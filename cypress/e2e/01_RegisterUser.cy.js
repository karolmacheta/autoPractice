describe('Test Case 1: Register User', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('open the page and check url', () => {
    cy.checkIfMainPageOpen();
    cy.checkMainPageUrl();
  })

})
