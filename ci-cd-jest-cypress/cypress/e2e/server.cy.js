describe('Server Interface Tests', () => {
  
  const baseUrl = 'http://localhost:3000'

  it('should load the homepage successfully', () => {
    // Vérifie que la page se charge avec le statut 200
    cy.request(baseUrl).its('status').should('eq', 200)
  })

  it('should display welcome message', () => {
    // Vérifie que le message de bienvenue est affiché
    cy.request(baseUrl).then((response) => {
      expect(response.body).to.have.property('message')
      expect(response.body.message).to.equal('Bienvenue !')
    })
  })

  it('should return JSON content type', () => {
    // Vérifie que la réponse est en JSON
    cy.request(baseUrl).its('headers').its('content-type').should('include', 'application/json')
  })

  it('should have correct response structure', () => {
    // Vérifie la structure complète de la réponse
    cy.request(baseUrl).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.an('object')
      expect(response.body).to.have.property('message')
      expect(response.body.message).to.be.a('string')
    })
  })

  it('should handle multiple requests', () => {
    // Vérifie que le serveur gère plusieurs requêtes
    cy.request(baseUrl).its('status').should('eq', 200)
    cy.request(baseUrl).its('status').should('eq', 200)
    cy.request(baseUrl).its('status').should('eq', 200)
  })

  it('should return 404 for invalid routes', () => {
    // Vérifie que les routes invalides retournent 404
    cy.request({ url: `${baseUrl}/invalid-route`, failOnStatusCode: false })
      .its('status')
      .should('eq', 404)
  })
})