describe('Filter', () => {
  it('should display filter criteria', () => {
    cy.visit('/');
    cy.window().then((window: Window) => {
      cy.wrap(window).its('FilterComponent').invoke('onChange', 'Tara');
      cy.wait(1000);
      cy.wrap(window).its('appRef').invoke('tick');
    });

    cy.get('p[data-test-automation="filtered-by"]').should('have.text', 'Filtered by: Tara');
  });
});
