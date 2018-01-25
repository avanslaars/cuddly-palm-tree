Cypress.Commands.add('seedAndVisit', (seedData = 'fixture:mixed_todos') => {
  cy.server()
  cy.route('GET', '/api/todos', seedData)
    .as('initialLoad')
  cy.visit('/')

  cy.wait('@initialLoad')
})
