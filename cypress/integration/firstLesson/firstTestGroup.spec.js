/// <reference types="cypress" />
context('Entering selected pages tests', () => {

  // describe('Google test', () => {
  //   it('test 1', () => {
  //     cy.visit('www.google.com');
  //     cy.url().should('contain', 'https://www.google');
  //     cy.get('#L2AGLb > .QS5gu').click()
  //     cy.get('.dbsFrd').should('not.be.visible');
  //   });
  // })
  
  describe('WP test', () => {
    it('test 2', () => {
      cy.visit('www.wp.pl');
      cy.url().should('contain', 'wp.pl'); 
      cy.get('body > div > div > div > div > div > button:nth-child(2').click();
    });
  })
})



