/// <reference types="cypress" />

import BagPage from '../../pages/BagPage';
import LoginPage from '../../pages/LoginPage';
import SearchPage from '../../pages/SearchPage';

describe('Bag Page Tests', () => {
    const bagPage = new BagPage();
    const loginPage = new LoginPage();
    const searchPage = new SearchPage();

    it('should not allow access to bag button without login', () => {
        loginPage.unlogin();
        bagPage.clickBagButton();
        cy.wait(4000);
        cy.contains('Sign in to shop with vouchers, track your order, and save your favorite products.').should('be.visible')
    });

    it('should not add product to bag without login', () => {
        loginPage.unlogin();
        cy.wait(2000);
        searchPage.search('Rockstud Strappy Sandal Flats Light Ivory Ghw');
        cy.wait(2000);
        bagPage.addToBagProduct();
        cy.wait(2000);
        cy.contains('Sign in to shop with vouchers, track your order, and save your favorite products.').should('be.visible')
    });

    it('should add product to bag with valid login', () => {
        loginPage.login('vacogon959@cantozil.com', 'Tonoyoga999');
        cy.wait(2000);
        searchPage.search('Rockstud Strappy Sandal Flats Light Ivory Ghw');
        cy.wait(5000);
        bagPage.addToBagProduct();
        cy.wait(6000);
        bagPage.clickBagButton();
        cy.wait(8000);
        cy.contains('Shopping Bag.').should('be.visible');
        cy.contains('Rockstud Strappy Sandal Flats Light Ivory Ghw').should('be.visible');
    });

    it('should remove product from bag', () => {
        loginPage.login('vacogon959@cantozil.com', 'Tonoyoga999');
        bagPage.clickBagButton();
        bagPage.removeProductFromBag();
        cy.contains('Your shopping bag is empty').should('be.visible')
    });
});
