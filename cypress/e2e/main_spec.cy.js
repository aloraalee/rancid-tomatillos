describe('Main Page', () => {
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

  it('displays movie posters on page load', () => {
    cy.get('.movie-poster').should('have.length', 4)

    cy.get('.movie-poster').first().find('img').should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//qJ2tW6WMUDux911r6m7haRef0WH.jpg')
    cy.get('.movie-poster').first().find('img').should('have.attr', 'alt', 'Poster of The Dark Knight')
    cy.get('.movie-poster').first().find('div').should('have.class', 'vote-banner')
    cy.get('.vote-banner').first().find('button').should('have.class', 'vote-button')
    cy.get('.vote-banner').first().find('p').should('contain', 32544)

    cy.get('button').first().find('img').should('have.class', 'upvote')
    cy.get('button').first().find('img').should('have.attr', 'src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAtdJREFUeF7t20FOw0AQRFH7YERhByxAnAg4EYIFsCOCgwU5UlCQjFO2u6a6pWLDgs5M8l8GSw70nb+kBXrp7t68M4D4TWAAA4gLiLf3CTCAuIB4e58AA4gLiLf3CTCAuIB4e58AA4gLiLf3CTCAuIB4e58AAywvsLl5eRwe/fV2d/he8avsCTjE33cPh+h991QVoSTAn/jHt31RhHIAo/ELI5QCmIxfFKEMABS/IEIJgFnxiyGkB1gUvxBCaoBV8YsgpAUIiV8AISVAaPzkCOkAKPETI6QCoMZPipAGoEn8hAgpAJrGT4YgB5gTf9/1u77bb6duOyMzv49PcANPCjA3/vf77eXm+mU/BfD1ftdfXL9+noPKgiADWBJ/iIYADHNVECQAS+PPAaiC0BxgTfy5ABUQmgKsjb8EIDtCM4CI+EsBMiM0AYiKvwYgKwIdIDL+WoCMCFSA6PgRANkQaACM+FEAmRAoAKz4kQBZEMIBmPGjATIghAKw4zMA1AhhAC3iswCUCCEAreIzAVQIqwFaxmcDKBCaAQwflAz386fu5SM/Q29HI2v9NwPfyg74QGc1wOFdefq3+iOvKip+ixNwfPpnEQLiD3uFAEwhRMZvCTD56ygofijAGEJ0/NYAowiB8cMBThEY8RUAfxCC41MAjgis/9lqcREeuzhvr563u4/73ZqL+9hjw64B0U/sv/VUAKzXZwBWWXBdA4ChWGMGYJUF1zUAGIo1ZgBWWXBdA4ChWGMGYJUF1zUAGIo1ZgBWWXBdA4ChWGMGYJUF1zUAGIo1ZgBWWXBdA4ChWGMGYJUF1zUAGIo1ZgBWWXBdA4ChWGMGYJUF1zUAGIo1ZgBWWXBdA4ChWGMGYJUF1zUAGIo1ZgBWWXDdcgDg6yozZgAxlQEMIC4g3t4nwADiAuLtfQIMIC4g3t4nwADiAuLtfQIMIC4g3t4nwADiAuLtfQIMIC4g3v4HROI9fyAPyNUAAAAASUVORK5CYII=')
    cy.get('button').first().find('img').should('have.attr', 'alt', 'Up vote button')
    
    cy.get('.movie-poster').last().find('img').should('have.attr', 'src', "https://image.tmdb.org/t/p/original//d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg")
    cy.get('.movie-poster').last().find('img').should('have.attr', 'alt', 'Poster of Pulp Fiction')
    cy.get('.movie-poster').last().find('div').should('have.class', 'vote-banner')
    cy.get('.vote-banner').last().find('button').should('have.class', 'vote-button')
    cy.get('.vote-banner').last().find('p').should('contain', 27642)

    cy.get('button').last().find('img').should('have.class', 'downvote')
    cy.get('button').last().find('img').should('have.attr', 'src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAtpJREFUeF7t20FOwzAQhWHnYFRlByxAnIhyIlQWwI6qHCwooFYC1CZjv/GbQa9rxxP+r6ZSCkPRi1pgoE7X8CIA8ptAAAIgFyCP1wkQALkAebxOgADIBcjjdQIEQC5AHq8TIAByAfJ4nQABkAuQx+sECMBWYHW9Hc9dsX+9S/WmSnWzU3gB2N6w8NUCgCe1bSgAWy/4agHAk9o2FICtF3y1AOBJbRsKwNYLvloA8KS2DQVg6wVfLQB4UtuGArD1gq8WADypbUMB2HrBVwsAntS2oQBsveCrBQBPattQALZe8NUCgCe1bSgAWy/4agHAk9o2FICtF3y1AOBJbRsKwNYLvloA8KS2DQWwoNf66mm9e7vfLVhqXsICWN1sN/uXu435hmcugP9l3HSjZSwPYxl2H6+3l+gbZgBcXD+/D2Vcl6E8ohGgAIf4h+geCL0BjvEPPxQYAQbwO74XQk+AP/EdECAAp+J7IPQCOBkfjNAMMBcfjdADYDY+EKEbwHTPiM8Eb4DF8acfCPB50Aww3cfSU4BA8AToHf/bEPTqheAFwIgPBeh1EjwAWPHhAD0Q0ADM+C4A3ghIAHZ8NwBPBBRAhPiuAF4ICIAo8d0BPBBaASLF7wKARmgBiBa/GwASoRYgYvyuACiEGoCo8bsDIBCsAJHjUwBaESwA0ePTAFoQlgJkiE8FqEVYApAlPh2gBuHry/Ezr+k7h7k1x8sBz/NbHybDHke33IjlUXbLnB/XBogf4gQconRFCBI/FID111H1SQgUPxyAO0Kw+CEB3BACxg8LAEcIGj80AAwhcPzwAM0IweOnAKhGSBA/DYAZIUn8VACLERLFTwcwi5AsfkqAkwgJ46cF+IOQNH5qgCNCKQX9f1vVz5kqLgzxOLrivv/NJQIgUwpAAOQC5PE6AQIgFyCP1wkQALkAebxOgADIBcjjdQIEQC5AHq8TIAByAfJ4nQABkAuQx38CizY9f7FvjaYAAAAASUVORK5CYII=')
    cy.get('button').last().find('img').should('have.attr', 'alt', 'Down vote button')
  })
})