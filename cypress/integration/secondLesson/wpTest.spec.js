/// <reference types='cypress'/>

describe('WP Test', ()=> {
  it('Test 1', ()=> {
    cy.visit('www.wp.pl');
    cy.url().should('contain', 'wp.pl'); 
    cy.get('body > div > div > div > div > div > button:nth-child(2').click();
  })
})