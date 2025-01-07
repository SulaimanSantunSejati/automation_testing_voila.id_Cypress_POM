/// <reference types="cypress" />

import CheckoutPage from '../../pages/CheckoutPage';
import LoginPage from '../../pages/LoginPage';
import SearchPage from '../../pages/SearchPage';
import BagPage from '../../pages/BagPage';

describe('Checkout Tests', () => {
  const checkoutPage = new CheckoutPage();
  const loginPage = new LoginPage();
  const searchPage = new SearchPage();
  const bagPage = new BagPage();

  it('should proceed with checkout by WhatsApp', () => {
    loginPage.login('fihokob723@aqqor.com', 'Tonoyoga999');
    searchPage.search("Chypre Calfskin Sandals Black Women");
    cy.wait(3000)
    bagPage.addToBagProduct();
    checkoutPage.clickCheckout();
    cy.window().then((win) => {
      cy.stub(win, 'open').callsFake((url) => {
        expect(url).to.include('https://web.whatsapp.com/send?text');
      });
    });
    checkoutPage.clickPlaceOrder();
  });

  it('should show alert when no shipment or payment method is selected', () => {
    loginPage.login('fihokob723@aqqor.com', 'Tonoyoga999');
    searchPage.search("Cassette Tri-Fold Zip Wallet Emerald Travertine");
    bagPage.addToBag();
    bagPage.viewBag();
    checkoutPage.clickCheckout();
    checkoutPage.clickPlaceOrder();
    checkoutPage.getAlertCantProceed().should('contain.text', 'Select shipping service and payment method to place order.');
  });

  it('should complete checkout with virtual account', () => {
    loginPage.login('fihokob723@aqqor.com', 'Tonoyoga999');
    searchPage.search("Cassette Tri-Fold Zip Wallet Emerald Travertine");
    bagPage.addToBag();
    bagPage.viewBag();
    checkoutPage.clickCheckout();
    checkoutPage.selectShippingService();
    checkoutPage.selectPaymentMethodWithVirtualAccount();
    checkoutPage.clickPlaceOrder();
    checkoutPage.getAlertOrderSuccess().should('contain.text', 'Order has been placed');
  });

  it('should complete checkout with bank transfer', () => {
    loginPage.login('fihokob723@aqqor.com', 'Tonoyoga999');
    searchPage.search("Cassette Tri-Fold Zip Wallet Emerald Travertine");
    bagPage.addToBag();
    bagPage.viewBag();
    checkoutPage.clickCheckout();
    checkoutPage.selectShippingService();
    checkoutPage.selectPaymentMethodWithBankTransfer();
    checkoutPage.clickPlaceOrder();
    checkoutPage.getAlertOrderSuccess().should('contain.text', 'Order has been placed');
  });

  it('should show alert when no product is selected for checkout', () => {
    loginPage.login('fihokob723@aqqor.com', 'Tonoyoga999');
    searchPage.search("Cassette Tri-Fold Zip Wallet Emerald Travertine");
    bagPage.addToBag();
    bagPage.viewBag();
    checkoutPage.cancelOrder();
    checkoutPage.clickCheckout();
    checkoutPage.getAlertCantProceed().should('contain.text', 'Select product to checkout.');
  });

  it('should cancel order successfully', () => {
    loginPage.login('fihokob723@aqqor.com', 'Tonoyoga999');
    searchPage.search("Cassette Tri-Fold Zip Wallet Emerald Travertine");
    bagPage.addToBag();
    bagPage.viewBag();
    checkoutPage.clickCheckout();
    checkoutPage.selectShippingService();
    checkoutPage.selectPaymentMethodWithVirtualAccount();
    checkoutPage.clickPlaceOrder();
    checkoutPage.cancelOrder();
    checkoutPage.getAlertCantProceed().should('contain.text', 'Order Canceled');
  });
});
