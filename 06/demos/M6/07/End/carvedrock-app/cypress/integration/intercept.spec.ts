describe('Intercept', () => {
  before(() => {
    cy.intercept(`http://localhost:3000/adventures/1`, {
      "id": 1,
      "title": "Intercepted",
      "image": "../../assets/adventure-images/carved-rock-img-7.jpg"
    }).as('interceptAdventure');
  })

  it('should display intercepted adventure', () => {
    cy.visit('/adventure/1')
      .wait('@interceptAdventure')
      .get('#title').should('have.text', 'Intercepted');
  });
});
