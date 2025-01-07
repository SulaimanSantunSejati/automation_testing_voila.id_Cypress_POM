/// <reference types="cypress" />

import LoginPage from '../../pages/LoginPage';

describe("Login Tests", () => {
    const loginPage = new LoginPage();
  
    beforeEach(() => {
      loginPage.open();
    });
  
    it("should login successfully", () => {
      loginPage.login('vacogon959@cantozil.com', 'Tonoyoga999');
      cy.wait(5000)
      loginPage.getGreetingText().should("contain.text", "Hi, Tono!");
    });
  
    it("should login and logout successfully", () => {
      loginPage.login('vacogon959@cantozil.com', 'Tonoyoga999');
      loginPage.clickLogin();
      cy.wait(8000)
      loginPage.clickProfileButton();
      loginPage.clickSignOut1();
      loginPage.clickSignOut2();
      cy.wait(5000)
      loginPage.getSignInText().should("be.visible").and("contain.text", "Sign In");
      loginPage.getRegisterText().should("be.visible").and("contain.text", "Register");
    });
  
    it("should show error for unregistered user", () => {
      loginPage.setUsername("blabla123@gmail.com");
      loginPage.clickLogin();
      cy.wait(5000)
      loginPage.getUnregistText().should("contain.text", "Register");
    });
  
    it("should show error for invalid password", () => {
      loginPage.login('vacogon959@cantozil.com', 'Invalidpassword123');
      loginPage.clickLogin();
      cy.wait(5000)
      loginPage.getInvalidPassText().should(
        "contain.text",
        "Your account ID or password is incorrect. Please try again."
      );
    });
  
    it("should show error for invalid email format", () => {
      loginPage.setUsername("invalidemail");
      loginPage.clickLogins();
      cy.wait(5000)
      loginPage.getEmptyEmailText().should(
        "contain.text",
        "Please enter a valid email format or phone number."
      );
    });
  
    it("should show error for empty username", () => {
      loginPage.clickLogins();
      cy.wait(5000)
      loginPage.getEmptyEmailText().should(
        "contain.text",
        "Please enter email or phone number."
      );
    });
  
    it("should handle forgot password flow", () => {
      loginPage.setUsername("vacogon959@cantozil.com");
      loginPage.clickForgotPassword1();
      cy.wait(5000)
      loginPage.setUsername("vacogon959@cantozil.com");
      loginPage.clickForgotPassword2();
      cy.wait(2000)
      loginPage.getForgotPasswordText().should(
        "contain.text",
        "Enter the verification code we sent to your registered email."
      );
    });


  });