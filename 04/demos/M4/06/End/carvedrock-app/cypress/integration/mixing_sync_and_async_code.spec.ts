describe('Mixing synchronous and asyncrhonous code', () => {
  it('should clear a filter if active', () => {
    let isFilterActive = false;

    cy.visit('/');
    cy.get('input[data-test-automation="filter"]').type('Tara');
    cy.get('p[data-test-automation="filtered-by"] b').then($el => {
      if ($el.text() === 'Tara') {
        isFilterActive = true;
      }

      if (isFilterActive) {
        cy.get('button[data-test-automation="clear-filter"]').click();
      }
    });

    cy.get('p[data-test-automation="number-of-results"] b').should('have.text', 3);
  });
});
