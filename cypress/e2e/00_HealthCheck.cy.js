describe('Automation Exercise Website Health Check', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('open the page and check url', () => {
    cy.checkIfMainPageOpen();
    cy.checkMainPageUrl();
    cy.log('Pentagon zhakowany');
  })

})
