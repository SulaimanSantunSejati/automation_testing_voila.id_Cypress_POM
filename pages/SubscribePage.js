/// <reference types="cypress" />

class SubscribePage {
    constructor() {
      this.subscribeInput = '[data-test-id="CT_Field_Container"]'; 
      this.subscribeButton = '[data-test-id="CT-Subscribe-Newsletter-Submit"]';
      this.notificationText = "p._17zx15t6o._17zx15te8._17zx15t4g._17zx15thc#base";
      this.emailAlreadySubscribedText = "._10z4js25 > ._15kd2we5s > #base";
      this.errorMessage = '._1kg30950 > .j1jih7ak > :nth-child(1) > ._15kd2weg > #base'; 
    }
  
    setSubscribe(email) {
      cy.scrollTo('bottom');;
      cy.get(this.subscribeInput).click();
      cy.get(this.subscribeInput).type(email);
      cy.get(this.subscribeButton).click();
    }
  
    getSubscribedNotificationText() {
      return cy.get(this.notificationText).invoke('text');
    }
  
    getEmailAlreadySubscribedText() {
      return cy.get(this.emailAlreadySubscribedText).invoke('text');
    }
  
    getErrorMessageText() {
      return cy.get(this.errorMessage).invoke('text');
    }
  }
  
  export default SubscribePage;
  