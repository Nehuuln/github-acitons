describe('Sample Test Suite', () => {
  
  beforeEach(() => {
    // Visitez une page avant chaque test
    cy.visit('https://example.com')
  })

  it('should load the homepage successfully', () => {
    // Vérifie que la page contient le titre attendu
    cy.contains('Example Domain').should('be.visible')
  })

  it('should have a valid page title', () => {
    // Vérifie le titre de la page
    cy.title().should('include', 'Example')
  })

  it('should contain a link', () => {
    // Vérifie qu'il y a au moins un lien sur la page
    cy.get('a').should('have.length.at.least', 1)
  })

  it('should have correct viewport', () => {
    // Vérifie que le viewport est correctement configuré
    cy.viewport(1280, 720)
    cy.contains('Example Domain').should('be.visible')
  })
})
