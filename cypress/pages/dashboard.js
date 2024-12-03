class DashboardPage {
    verifyWelcomeMessage() {
      cy.contains('Welcome').should('be.visible');
    }
  }
  
  export default DashboardPage;
  