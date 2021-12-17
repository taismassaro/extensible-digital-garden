describe('garden', () => {
  beforeEach(() => cy.visit('/notes/dynamic-routing'));

  it('renders note title', () => {
    cy.get('h1').should('contain', 'Dynamic Routing and Static Generation');
  });

  it('renders embedded video component', () => {
    cy.get('iframe').should(
      'have.attr',
      'src',
      'https://www.youtube.com/embed/9nDjLYXBCYM'
    );
  });
});
