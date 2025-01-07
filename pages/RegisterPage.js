/// <reference types="cypress" />

class RegisterPage {
    constructor() {
      this.url = "https://voila.id/account/register";
      this.registerButton = '[data-test-id="CT_component_register_submit"]';
    }
  
    open() {
      cy.visit(this.url);
      cy.viewport('macbook-13');
    }
  
    clickRegisterButton() {
      cy.get(this.registerButton).click({ force: true });
    }
  
  }
  
  export default RegisterPage;
  