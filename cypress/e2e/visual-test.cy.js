
describe('example VRT Tests', () => {
  beforeEach(() => {
    cy.vrtStart();
    cy.visit('http://localhost:4200');
  });

  // it('page styling is unchanged', () => {
  //   cy.get('.demo-button').should('have.css', 'background-color', 'rgb(255,255,255)')
  //   cy.get('.demo-button').should('have.css', 'margin-left', '8px');
  //   cy.get('.demo-button').should('have.css', 'colour', 'pink');
  //   cy.get('.demo-button').should('have.css', 'font-family').and('match', /serif/);
  //   cy.get('.demo-button').should('have.a.property', 'highlight');
  //   cy.get('.demo-button').should('have.class', 'button-container');
  //   cy.get('.demo-button').should('have.text', 'Remove data');
  //   cy.get('.demo-button').should('have.attr', 'value', 'remove-data');   
  // });

  it('Take a snapshot', () => {
    cy.vrtTrack('myPage');
  });
});
