describe('Misc', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('open the page and check url', () => {
        cy.url().should('eq', 'http://automationpractice.com/index.php');    
        cy.log('piewszy test');
    })
  
  })
  