describe('Automation Exercise', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('open the page and check url', () => {
    cy.url().should('eq', 'https://www.automationexercise.com/');
    cy.get('section#slider').should('be.visible');
    cy.get('div .container').first().should('be.visible');
    cy.get('.left-sidebar').should('be.visible');
    cy.get('footer#footer').should('be.visible');
    cy.get('.features_items').should('be.visible');
    cy.log('Pentagon zhakowany');
  })

})
