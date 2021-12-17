describe('shared-ui: TopicButton component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=topicbutton--primary&args=name:Next.js')
  );

  it('renders the correct topic name', () => {
    cy.get('[data-testid="topic-name"]').should('contain', 'Next.js');
  });

  it('passes the topic name to the click handler', () => {
    cy.get('[data-testid="topic-button"]').click();
    cy.get('[data-testid="click-result"]').should('contain', 'Next.js');
  });
});
