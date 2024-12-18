describe('movie details spec', () => {
  beforeEach(() => {
    cy.intercept('https://rancid-tomatillos-api.onrender.com/api/v1/movies', {
      statusCode: 200,
      fixture: "movie_posters"
    })

    cy.intercept("GET", 'https://rancid-tomatillos-api.onrender.com/api/v1/movies/*', {
      statusCode: 200,
      fixture: "movie_details"
    }).as('getMovieDetails')
    cy.visit('http://localhost:3000/')
  })

  it('displays title on page load', () => {
    cy.get('h1').contains('rancid tomatillos')
  })

  it('displays movie details on page load', () => {
    cy.get(".movie-poster").first().click()
    cy.wait('@getMovieDetails')
    cy.get('h2').contains('The Dark Knight')
    cy.get('.genre').contains("Drama")
    cy.get('.genre').contains("Action")
    cy.get('.genre').contains("Crime")
    cy.get('.genre').contains("Thriller")
    cy.get('p').contains("Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.")
  })

  it('displays a home button', () => {
    cy.get(".movie-poster").first().click()
    cy.wait('@getMovieDetails')
    cy.get('button').should('have.class', 'home-btn')
    cy.get('.home-btn').find('img').should('have.attr', 'alt', 'Home button')  
  })
})