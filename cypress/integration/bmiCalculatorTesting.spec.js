/// <reference types="cypress" />

context('Entering selected my bmiCalculator for tests its functionality', () => {

  describe('Test my bmiCalculator called "Projekt-JS-PB"', () => {
 
    beforeEach(() => {
      cy.visit('https://jakubsosn.github.io/Projekt-JS-PB/');
      cy.url().should('contain', 'https://jakubsosn.github.io/Projekt-JS-PB/');
      cy.fixture('bmiCalcData.json').as('data');
    })

    it('Checking is the weight field is empty',{tags:'empty'}, () => {
      cy.get('.weight').should('be.empty');
    })

    it('Checking is the height field is empty',{tags:'empty'}, () => {
      cy.get('.height').should('be.empty');
    })

    it('Checking is history of entries is empty',{tags:'empty'}, () => {
      cy.get('.right p').should('be.empty');
      cy.get('.right .button').should('not.be.visible');
    })

    it('Checking correct font-weight of header',{tags:'correct'}, () => {
      cy.get('header').should('have.css', 'font-weight', '700');
    })

    it('Checking correct input weight background color',{tags:'correct'}, () => {
      cy.get('.weight').should('have.css', 'background-color', 'rgb(239, 239, 239)');
    })

    it('Checking correct background color of "Zatwierdź" button',{tags:'correct'}, () => {
      cy.get('form > .button').should('have.css', 'background-color', 'rgb(54, 176, 60)');
    })

    it('Filling weight and height field and comparison the result data',{tags:'result'}, function () {
      cy.get('.weight').clear().type(this.data[0].weight);
      cy.get('.height').clear().type(this.data[0].height);
      cy.get('form > .button').click();
      cy.get('.middle > :nth-child(2)').should('have.text', this.data[0].heightResult);        
      cy.get('.middle > :nth-child(3)').should('have.text', this.data[0].weightResult);
    })

    it('Filling weight and height field and checking BMI result',{tags:'result'}, function () {
      cy.get('.weight').clear().type(this.data[1].weight);
      cy.get('.height').clear().type(this.data[1].height);
      cy.get('form > .button').click();
      cy.get('.middle>:nth-child(4)').should('have.text', this.data[1].bmiResult);        
    })

    it('Checking can we show hisotry of entries by clicking it', function () {
      cy.get('[data-key="0"]').click();
      cy.get('.middle > :nth-child(2)').should('have.text', this.data[0].heightResult);        
      cy.get('.middle > :nth-child(3)').should('have.text', this.data[0].weightResult); 
      cy.get('.middle > :nth-child(4)').should('have.text', this.data[0].bmi);          
    })

    it('Checking clear history button', function() {
      cy.get('.right > .button').click({force: true});
      cy.get('.middle > :nth-child(2)').should('have.text', this.data[2].heightResult);        
      cy.get('.middle > :nth-child(3)').should('have.text', this.data[2].weightResult); 
      cy.get('.middle > :nth-child(4)').should('have.text', this.data[2].bmiResult); 

    })
  })
})