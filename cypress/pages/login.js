class LoginPage {
    visit() {
      cy.visit('/on-board/login'); // Adjust the URL path as needed
    }
  
    fillPhoneNumber(phone) {
        cy.typeInNumberField('1790587636');

    }
  
    fillPassword(password) {
        cy.typePassword('1111');

    }
  
    submit() {
      cy.get('button[type="submit"]').click();
    }
  }
  
  export default LoginPage;
  