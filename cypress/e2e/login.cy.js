import LoginPage from '../pages/login';

const loginPage = new LoginPage();


describe('Login Tests', () => {
  it('should log in successfully', () => {
    loginPage.visit();
    loginPage.fillPhoneNumber();
    loginPage.fillPassword();
    loginPage.submit();
    
  });
});
