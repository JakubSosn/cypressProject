/// <reference types="cypress" />
import searchFrazes from "../../fixtures/searchFrazes.json";

context('Entering selected pages tests', () => {

  describe('Landing page test', () => {
    it('test 1', () => {
      cy.visit('/');
      cy.url().should('contain', 'https://www.google');
      cy.get('#L2AGLb > .QS5gu').click().should('not.be.visible');
      cy.get('.dbsFrd').should('not.be.visible');

    })
  })

  describe('Google test', () => {
    beforeEach('Enter google page and confirm policy', ()=> {
      cy.visit('www.google.com');
      cy.url().should('contain', 'https://www.google');
      cy.get('#L2AGLb > .QS5gu').click().should('not.be.visible');
      cy.get('.dbsFrd').should('not.be.visible');
      cy.fixture('searchFrazes.json').as('searchFrazes');
    })
    it('test 1', () => {
      cy.visit('/search?q=Wiki');
      cy.url().should('contain', 'Wiki');
      // cy.url().should('contain', 'https://www.google');
      // cy.get('#L2AGLb > .QS5gu').click()
      // cy.get('.dbsFrd').should('not.be.visible');
    });

    it.only('Search fraze from fixture', () => {  
      cy.get('.gLFyf').as('input');
      cy.log(searchFrazes[0].fraze);
      cy.get('@input').clear().type(searchFrazes[0].fraze).should('have.value', searchFrazes[0].fraze);
      cy.get('@input').clear().type(searchFrazes[1].fraze).should('have.value', searchFrazes[1].fraze);
    })

    // it.only('Search fraze from fixture', function() {  
    //   cy.fixture('searchFrazes.json').as('searchFrazes');
    //   cy.get('.gLFyf').clear().type(this.searchFrazes[0].fraze).should('have.value', searchFrazes[0].fraze);
    //   // cy.get('.gLFyf').clear().type(this.searchFrazes[1].fraze).should('have.value', searchFrazes[1].fraze);
    // })



    it.skip('Search for Wikipedia and click search from dropdown', ()=> {
      cy.get('.gLFyf').clear().type('wikipedia');
      cy.get('.CqAVzb > center > .gNO89b').click();
      cy.get('#rcnt').should('contain', 'https://pl.wikipedia.org');
    })
    
    it.skip('Search for Wikipedia and click search from mainpage', ()=> {
      cy.get('.gLFyf').clear().type('wikipedia');
      cy.get('.lnXdpd').click();
      cy.get('.FPdoLc > center > .gNO89b').click();
      cy.get('.BYM4Nd').eq(0).should('contain', 'https://pl.wikipedia.org');
    })
    it.skip('Search for Wikipedia and click first dropdown result', ()=> {
      cy.get('.gLFyf').clear().type('wikipedia').wait(2000);
      cy.get(':nth-child(1) > .eIPGRd > .pcTkSc > .wM6W7d > span').click();
      // cy.get('.lnXdpd').click();
      // cy.get('.FPdoLc > center > .gNO89b').click();
    })
    it.skip('Search for Wikipedia and click first dropdown result by eq', ()=> {
      cy.get('.gLFyf').clear().type('wikipedia').wait(2000);
      cy.get('.wM6W7d > span').eq(0).click();
      // cy.get(':nth-child(1) > .eIPGRd > .pcTkSc > .wM6W7d > span').click();
      // cy.get('.lnXdpd').click();
      // cy.get('.FPdoLc > center > .gNO89b').click();
    })
  })
})


