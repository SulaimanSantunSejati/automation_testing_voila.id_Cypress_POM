/// <reference types="cypress" />

import RegisterPage from '../../pages/RegisterPage';
import LoginPage from '../../pages/LoginPage';

describe('Register Tests', () => {
  const registerPage = new RegisterPage();
  const loginPage = new LoginPage();

  it('Test register with invalid email', () => {
    registerPage.open();
    loginPage.setUsername('invalidemail');
    loginPage.setPassword('password123');
    registerPage.clickRegisterButton();
    cy.contains('Please enter a valid email format or phone number.').should('be.visible');
  });

  it('Test register with invalid password (too long)', () => {
    registerPage.open();
    loginPage.setUsername('emailvalid@gmail.com');
    loginPage.setPassword('AAAAAAAAAAaaaaaaaaaaa');
    registerPage.clickRegisterButton();
    cy.contains('Password must be at most 20 characters.').should('be.visible');
  });

  it('Test register with invalid password (too short)', () => {
    registerPage.open();
    loginPage.setUsername('emailvalid@gmail.com');
    loginPage.setPassword('12345678');
    registerPage.clickRegisterButton();
    cy.contains('Password must be at least 6 characters with uppercase letters, lowercase letters, and numbers.').should('be.visible');
  });

  it('Test register with empty password', () => {
    registerPage.open();
    loginPage.setUsername('emailvalid@gmail.com');
    cy.get(loginPage.passwordInput).click();
    registerPage.clickRegisterButton();
    cy.contains('Please create a password.').should('be.visible');
  });

  it('Test register with empty email or phone number', () => {
    registerPage.open();
    cy.get(loginPage.usernameInput).click();
    cy.get(loginPage.passwordInput).click();
    registerPage.clickRegisterButton();
    cy.contains('Please enter email or phone number.').should('be.visible');
  });

  it('Test register with valid phone number', () => {
    registerPage.open();
    loginPage.setUsername('0889552772890');
    loginPage.setPassword('Password123');
    registerPage.clickRegisterButton();
    cy.contains('Enter the verification code we sent to your registered phone number.').should('be.visible')
  });

  it('Test register with valid email', () => {
    registerPage.open();
    loginPage.setUsername('emailyangvalid@gmail.com');
    loginPage.setPassword('Password123');
    registerPage.clickRegisterButton();
    cy.contains('Enter the verification code we sent to your registered email.').should('be.visible')
  });

  it('Test register with existing account', () => {
    registerPage.open();
    loginPage.setUsername('fihokob723@aqqor.com');
    loginPage.setPassword('Password123');
    registerPage.clickRegisterButton();
    cy.wait(3000)
    cy.contains('Sign in to shop with vouchers, track your order, and save your favorite products.').should(
      'be.visible'
    );
  });
});
