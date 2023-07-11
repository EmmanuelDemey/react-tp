describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000');
    cy.get('h1').contains('Hello World')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('studio.demo.cy.ts', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000');
    cy.get('.title').click();
    cy.get('strong').click();
    cy.get('.subtitle').click();
    cy.get('.subtitle').click();
    cy.get('.container').click();
    cy.get('.title').click();
    cy.get('.title').click();
    cy.get('.title').click();
    cy.get('strong').click();
    /* ==== End Cypress Studio ==== */
  });
})