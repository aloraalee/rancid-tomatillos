describe('Voting', () => {
  beforeEach(() => {
    cy.intercept('https://rancid-tomatillos-api.onrender.com/api/v1/movies', {
      statusCode: 200,
      fixture: "movie_posters"
    }).as('getMoviesSuccess')

    cy.visit('http://localhost:3000/')
  })

  it('increments a movie/s vote count up when a user clicks the upvote button', () => {
    cy.intercept('PATCH', 'https://rancid-tomatillos-api.onrender.com/api/v1/movies/155', {
      statusCode: 200,
      body: {
        "id": 155,
        "poster_path": "https://image.tmdb.org/t/p/original//qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        "title": "The Dark Knight",
        "vote_count": 32545
      }
    })

    cy.intercept('PATCH', 'https://rancid-tomatillos-api.onrender.com/api/v1/movies/680', {
      statusCode: 200,
      body: {
          "id": 680,
          "poster_path": "https://image.tmdb.org/t/p/original//d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
          "title": "Pulp Fiction",
          "vote_count": 27643
      }
    })

    cy.wait('@getMoviesSuccess')
    cy.get('.movie-poster').first().find('.vote-button').first().click()
    cy.get('.movie-poster').first().find('p').should('contain', 32545)
    cy.get('.movie-poster').last().find('.vote-button').first().click()
    cy.get('.movie-poster').last().find('p').should('contain', 27643)
  })

  it('increments a movie/s vote count down when a user clicks the downvote button', () => {
    cy.intercept('PATCH', 'https://rancid-tomatillos-api.onrender.com/api/v1/movies/155', {
      statusCode: 200,
      body: {
        "id": 155,
        "poster_path": "https://image.tmdb.org/t/p/original//qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        "title": "The Dark Knight",
        "vote_count": 32543
      }
    })

    cy.intercept('PATCH', 'https://rancid-tomatillos-api.onrender.com/api/v1/movies/680', {
      statusCode: 200,
      body: {
        "id": 680,
          "poster_path": "https://image.tmdb.org/t/p/original//d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
          "title": "Pulp Fiction",
          "vote_count": 27641
      }
    })

    cy.wait('@getMoviesSuccess')
    cy.get('.movie-poster').first().find('.vote-button').last().click()
    cy.get('.movie-poster').first().find('p').should('contain', 32543)
    cy.get('.movie-poster').last().find('.vote-button').last().click()
    cy.get('.movie-poster').last().find('p').should('contain', 27641)
  })

  describe('sad path', () => {
    beforeEach(() => {
      cy.intercept('https://rancid-tomatillos-api.onrender.com/api/v1/movies', {
        statusCode: 200,
        fixture: "movie_posters"
      }).as('getMoviesSuccess')
  
      cy.visit('http://localhost:3000/')

      cy.intercept('PATCH', 'https://rancid-tomatillos-api.onrender.com/api/v1/movies/155', {
        forceNetworkError: true
      }).as('patchMovieError')
    })

    it('displays an alert when the upvote patch request fails', () => {
      cy.wait('@getMoviesSuccess')
      cy.get('.movie-poster').first().find('.vote-button').first().click()
      cy.wait('@patchMovieError')
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.contains('Failed to fetch movies. Please try again later.')
      })
    })

    it('displays an alert when the downvote patch request fails', () => {
      cy.wait('@getMoviesSuccess')
      cy.get('.movie-poster').first().find('.vote-button').last().click()
      cy.wait('@patchMovieError')
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.contains('Failed to fetch movies. Please try again later.')
      })
    })
  })
})

