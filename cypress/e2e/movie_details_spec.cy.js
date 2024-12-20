describe('movie details spec', () => {
  beforeEach(() => {
    cy.intercept('https://rancid-tomatillos-api.onrender.com/api/v1/movies', {
      statusCode: 200,
      fixture: "movie_posters"
    })
    cy.visit('http://localhost:3000/')
  })

  it('displays title on page load', () => {
    cy.get('h1').contains('rancid tomatillos')
  })

  it('displays movie details on page load', () => {
    cy.intercept("GET", 'https://rancid-tomatillos-api.onrender.com/api/v1/movies/155', {
      statusCode: 200,
      fixture: "movie_details_155"
    }).as('getMovieDetails')
    cy.visit('http://localhost:3000/')

    cy.get(".movie-poster").first().click()
    cy.wait('@getMovieDetails')
    cy.get('h2').contains('The Dark Knight')
    cy.get('.movie-details').find('img').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//nMKdUUepR0i5zn0y1T4CsSB5chy.jpg')
    cy.get('.movie-details').find('img').should('have.attr', 'alt', 'Movie details for The Dark Knight')
    cy.get('.genre').contains("Drama")
    cy.get('.genre').contains("Action")
    cy.get('.genre').contains("Crime")
    cy.get('.genre').contains("Thriller")
    cy.get('p').contains("Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.")
  })

  it('displays movie details on page load', () => {
    cy.intercept("GET", 'https://rancid-tomatillos-api.onrender.com/api/v1/movies/680', {
      statusCode: 200,
      fixture: "movie_details_680"
    }).as('getMovieDetails2')
    cy.visit('http://localhost:3000/')


    cy.get(".movie-poster").last().click()
    cy.wait('@getMovieDetails2')
    cy.get('h2').contains('Pulp Fiction')
    cy.get('.movie-details').find('img').should('have.attr', 'src', "https://image.tmdb.org/t/p/original//suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg")
    cy.get('.movie-details').find('img').should('have.attr', 'alt', 'Movie details for Pulp Fiction')
    cy.get('.genre').contains("Thriller")
    cy.get('.genre').contains("Crime")
    cy.get('p').contains("A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.")
  })


  it('displays a home button', () => {
    cy.intercept("GET", 'https://rancid-tomatillos-api.onrender.com/api/v1/movies/155', {
      statusCode: 200,
      fixture: "movie_details_155"
    })
    cy.visit('http://localhost:3000/')

    cy.get(".movie-poster").first().click()
    cy.wait
    cy.get('button').should('have.class', 'home-button')
    cy.get('button').find('img').should('have.attr', 'alt', 'Home button')  
  })

  it ('returns to the home page when the home button is clicked', () => {
    cy.intercept("GET", 'https://rancid-tomatillos-api.onrender.com/api/v1/movies/155', {
      statusCode: 200,
      fixture: "movie_details_155"
    })

    cy.visit('http://localhost:3000/')

    cy.get(".movie-poster").first().click()
    cy.get('button').click()

    cy.get('.movie-poster').should('have.length', 4)
    cy.get('.movie-poster').find('img').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//qJ2tW6WMUDux911r6m7haRef0WH.jpg')
    cy.get('.movie-poster').find('img').should('have.attr', 'alt', 'Poster of The Dark Knight')
    cy.get('.movie-poster').find('div').should('have.class', 'vote-banner')
    cy.get('.vote-banner').find('button').should('have.class', 'vote-button')
    cy.get('.vote-banner').find('p').should('contain', 32544)

    cy.get('.vote-button').find('img').should('have.class', 'upvote')
    cy.get('.vote-button').find('img').should('have.attr', 'src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAtdJREFUeF7t20FOw0AQRFH7YERhByxAnAg4EYIFsCOCgwU5UlCQjFO2u6a6pWLDgs5M8l8GSw70nb+kBXrp7t68M4D4TWAAA4gLiLf3CTCAuIB4e58AA4gLiLf3CTCAuIB4e58AA4gLiLf3CTCAuIB4e58AAywvsLl5eRwe/fV2d/he8avsCTjE33cPh+h991QVoSTAn/jHt31RhHIAo/ELI5QCmIxfFKEMABS/IEIJgFnxiyGkB1gUvxBCaoBV8YsgpAUIiV8AISVAaPzkCOkAKPETI6QCoMZPipAGoEn8hAgpAJrGT4YgB5gTf9/1u77bb6duOyMzv49PcANPCjA3/vf77eXm+mU/BfD1ftdfXL9+noPKgiADWBJ/iIYADHNVECQAS+PPAaiC0BxgTfy5ABUQmgKsjb8EIDtCM4CI+EsBMiM0AYiKvwYgKwIdIDL+WoCMCFSA6PgRANkQaACM+FEAmRAoAKz4kQBZEMIBmPGjATIghAKw4zMA1AhhAC3iswCUCCEAreIzAVQIqwFaxmcDKBCaAQwflAz386fu5SM/Q29HI2v9NwPfyg74QGc1wOFdefq3+iOvKip+ixNwfPpnEQLiD3uFAEwhRMZvCTD56ygofijAGEJ0/NYAowiB8cMBThEY8RUAfxCC41MAjgis/9lqcREeuzhvr563u4/73ZqL+9hjw64B0U/sv/VUAKzXZwBWWXBdA4ChWGMGYJUF1zUAGIo1ZgBWWXBdA4ChWGMGYJUF1zUAGIo1ZgBWWXBdA4ChWGMGYJUF1zUAGIo1ZgBWWXBdA4ChWGMGYJUF1zUAGIo1ZgBWWXBdA4ChWGMGYJUF1zUAGIo1ZgBWWXBdA4ChWGMGYJUF1zUAGIo1ZgBWWXDdcgDg6yozZgAxlQEMIC4g3t4nwADiAuLtfQIMIC4g3t4nwADiAuLtfQIMIC4g3t4nwADiAuLtfQIMIC4g3v4HROI9fyAPyNUAAAAASUVORK5CYII=')
    cy.get('.vote-button').find('img').should('have.attr', 'alt', 'Up vote button')
  })
  
  it ('displays the intended content when navigating backward and forward', () => {
    cy.intercept("GET", 'https://rancid-tomatillos-api.onrender.com/api/v1/movies/155', {
      statusCode: 200,
      fixture: "movie_details_155"
    })

    cy.visit('http://localhost:3000/')
    cy.get(".movie-poster").first().click()
    cy.url().should('include', '/155')

    cy.go('back')
    cy.url().should('eq', 'http://localhost:3000/')

    cy.go('forward')
    cy.url().should('include', '/155')
  })
})