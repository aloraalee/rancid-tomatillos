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
    cy.get('button').should('have.class', 'show-home-btn')
    cy.get('.show-home-btn').find('img').should('have.attr', 'alt', 'Home button')  
  })

  it('displays an alert when the API call fails', () => {
    cy.intercept("GET", 'https://rancid-tomatillos-api.onrender.com/api/v1/movies/155', {
      forceNetworkError: true
    })
    cy.visit('http://localhost:3000/')

    cy.get(".movie-poster").first().click()
    cy.wait
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Failed to fetch movie details. Please try again later.')
    })
  })
})