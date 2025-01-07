/// <reference types="cypress" />

class CheckoutPage {
    checkoutButton = '[data-test-id="CT_Component_btnCheckout"]';
    selectShippingMethod = 'div[data-test-id="CT_Component_ShippingSelector_ButtonShipping"] p';
    selectJNEReg = '[alt="JNE REG"]';
    selectPaymentMethodButton = 'div[data-test-id="CT_Component_SelectorPayment_ButtonPayment"] p';
    virtualAccountButton = '[data-test-id="CT_Component_PaymentGroup_ButtonPaymentGroup"]';
    virtualAccountBCAButton = '[data-test-id="CT_Component_SelectorPayment_ButtonSelectBank_VABCA"]';
    bankTransferButton = '[data-test-id="CT_Component_PaymentGroup_ButtonPaymentGroup"] p';
    bankTransferBCAButton = '[data-test-id="CT_Component_SelectorPayment_ButtonSelectBank_BANKTRANSFER"]';
    placeOrderButton = '[data-test-id="CT_Component_btnPlaceOrder"]';
    alertCantProceed = '[data-test-id="toast-"]';
    alertOrderSuccess = 'p._15kd2we7k';
    cancelOrderButton = '[data-test-id="CT_Component_cancelOrder"]';
  

    clickCheckout() {
      cy.get(this.checkoutButton).click();
    }
  
    selectShippingService() {
      cy.get(this.selectShippingMethod).click();
      cy.get(this.selectJNEReg).click();
    }
  
    selectPaymentMethodWithVirtualAccount() {
      cy.get(this.selectPaymentMethodButton).click();
      cy.get(this.virtualAccountButton).click();
      cy.get(this.virtualAccountBCAButton).click();
    }
  
    selectPaymentMethodWithBankTransfer() {
      cy.get(this.selectPaymentMethodButton).click();
      cy.get(this.bankTransferButton).click();
      cy.get(this.bankTransferBCAButton).click();
    }
  
    clickPlaceOrder() {
      cy.get(this.placeOrderButton).click();
    }
  
    getAlertCantProceed() {
      return cy.get(this.alertCantProceed).should('be.visible');
    }
  
    getAlertOrderSuccess() {
      return cy.get(this.alertOrderSuccess).should('be.visible');
    }
  
    cancelOrder() {
      cy.get(this.cancelOrderButton).click();
    }
  }
  
  export default CheckoutPage;
  