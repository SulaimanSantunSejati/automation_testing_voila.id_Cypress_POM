/// <reference types="cypress" />

class LoginPage {
    constructor() {
      this.urlLogin = "https://voila.id/account/login";
      this.urlUnlogin = "https://voila.id/";
      this.usernameInput = "input[name='identifier']";
      this.passwordInput = "input[name='password']";
      this.loginButton = "[data-test-id='CT_component_login_submit']";
      this.loginsText = "[data-test-id='CT_component_login_submit']";
      this.greetingText = "p._15kd2weps._17zx15tdc._1ccbe2wb#base";
      this.profileButton = '[data-test-id="CT_Component_ProfileMenu"]';
      this.signOutButton1 = '[data-test-id="CT_account_navigation-item_Sign Out"]';
      this.signOutButton2 = '[data-test-id="CT_SignOut_Confirm"]';
      this.signInText = "[data-test-id='CT-SignIn-Btn']";
      this.registerText = "[data-test-id='CT-Register-Btn']";
      this.unregistText = "._15kd2weog._17zx15t9c._17zx15t6p._17zx15tgg._17zx15thd._17zx15te8._17zx15t4g#base";
      this.invalidPassText = "._7q2fqh7#base";
      this.emptyEmailText = "p._15kd2wejk._1ccbe2wc#base";
      this.forgotPasswordButton1 = 'p._5y0pl50._5y0pl5e._5y0pl5a#base';
      this.forgotPasswordButton2 = "button[data-test-id='CT_Component_UpdatePassword_Submit']";
      this.forgotPasswordText = "p._15kd2weow._15r4f4dap._15r4f4dg9.wovzoqj._1ccbe2wb#base";
    }
  
    open() {
      cy.visit(this.urlLogin);
      cy.viewport('macbook-13');
    }
  
    setUsername(username) {
      cy.get(this.usernameInput).clear().type(username);
    }
  
    setPassword(password) {
      cy.get(this.passwordInput).clear().type(password);
    }
  
    clickLogin() {
      cy.get(this.loginButton).click();
    }

    clickLogins() {
      cy.get(this.loginsText).invoke('removeAttr', 'disabled').click(); //element button disabled
    }
  
    getGreetingText() {
      return cy.get(this.greetingText);
    }
  
    clickProfileButton() {
      cy.get(this.profileButton).click();
    }
  
    clickSignOut1() {
      cy.get(this.signOutButton1).click();
    }
  
    clickSignOut2() {
      cy.get(this.signOutButton2).click();
    }
  
    getSignInText() {
      return cy.get(this.signInText);
    }
  
    getRegisterText() {
      return cy.get(this.registerText);
    }
  
    getUnregistText() {
      return cy.get(this.unregistText);
    }
  
    getInvalidPassText() {
      return cy.get(this.invalidPassText);
    }
  
    getEmptyEmailText() {
      return cy.get(this.emptyEmailText);
    }
  
    clickForgotPassword1() {
      cy.get(this.forgotPasswordButton1).click();
    }
  
    clickForgotPassword2() {
      cy.get(this.forgotPasswordButton2).click();
    }
  
    getForgotPasswordText() {
      return cy.get(this.forgotPasswordText);
    }

    login(username,password) {
      this.open();
      this.setUsername(username);
      this.setPassword(password);
      this.clickLogin();
    }

    unlogin() {
      cy.visit(this.urlUnlogin);
      cy.viewport('macbook-13');
    }

    logout() {
      this.clickProfileButton();
      this.clickSignOut1();
      this.clickSignOut2();
    }
  }
  
  export default LoginPage;
  