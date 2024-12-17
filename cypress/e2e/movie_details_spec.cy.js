describe('movie details spec', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/movies/389"), {
      statusCode: 200
    }
    cy.visit('http://localhost:3000/')
  })

  it('displays title on page load', () => {
    cy.get('h1').contains('rancid tomatillos')
  })

  it('displays movie details on page load', () => {
    cy.get(".movie-poster").first().click()
    cy.get('h2').contains('12 Angry Men')
    cy.get('.genre').contains('Drama')
    cy.get('p').contains("The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.")
  })

  // it('displays a home button', () => {
  //   // cy.get('.home').find('img').should('have.class', 'home')
  //   // cy.get('.home-btn').find('img').should('have.attr', 'alt', 'Home button')  
  //   // cy.get('.home-btn').contains('Home button')  
  // })
})