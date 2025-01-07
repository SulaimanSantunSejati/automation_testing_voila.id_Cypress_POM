/// <reference types="cypress" />

import LoginPage from '../../pages/LoginPage';
import SearchPage from '../../pages/SearchPage';
import WishlistPage from '../../pages/WishlistPage';

describe('Wishlist Tests', () => {
  const wishlistPage = new WishlistPage();
  const loginPage = new LoginPage();
  const searchPage = new SearchPage();

  it('Add product to wishlist without login (invalid)', () => {
    loginPage.unlogin();
    searchPage.search('Bon Bon 32 - RH32-13 Ceramic Playful Multicolor Dial Pink Rubber Strap');
    wishlistPage.clickProductButton();
    wishlistPage.clickWishlistButton();
    loginPage.getSignInToShopText().should(
      'eq',
      'Sign in to shop with vouchers, track your order, and save your favorite products.'
    );
  });

  it('Add and validate product in wishlist (valid)', () => {
    loginPage.login('fihokob723@aqqor.com', 'Tonoyoga999');
    searchPage.search('Bon Bon 32 - RH32-13 Ceramic Playful Multicolor Dial Pink Rubber Strap');
    wishlistPage.clickProductButton();
    wishlistPage.clickWishlistButton();
    wishlistPage.clickHeartWishlistButton();
    wishlistPage.getWishlistText().should('eq', 'Wishlist');
    wishlistPage.getItemOnWishlist().should('eq', 'Bon Bon 32 - RH32-13 Ceramic Playful Multicolor Dial Pink Rubber Strap');
  });

  it('Remove product from wishlist', () => {
    loginPage.login('fihokob723@aqqor.com', 'Tonoyoga999');
    cy.wait(3000)
    wishlistPage.clickHeartWishlistButton();
    wishlistPage.clickEditWishlistButton();
    wishlistPage.clickItemToCheck();
    wishlistPage.clickRemoveWishlistButton();
    wishlistPage.clickConfirmRemoveButton();
    wishlistPage.getWishlistEmptyText().should('eq', 'Your wishlist is empty');
  });

  it('Access wishlist without login (invalid)', () => {
    loginPage.unlogin();
    wishlistPage.clickHeartWishlistButton();
    cy.wait(3000)
    loginPage.getSignInToShopText().should(
      'eq',
      'Sign in to shop with vouchers, track your order, and save your favorite products.'
    );
  });

  it('Validate wishlist after logout and login', () => {
    loginPage.login('fihokob723@aqqor.com', 'Tonoyoga999');
    searchPage.search('Bon Bon 32 - RH32-13 Ceramic Playful Multicolor Dial Pink Rubber Strap');
    wishlistPage.clickProductButton();
    wishlistPage.clickWishlistButton();
    loginPage.logout();
    cy.wait(3000)
    loginPage.login('fihokob723@aqqor.com', 'Tonoyoga999');
    wishlistPage.clickHeartWishlistButton();
    wishlistPage.getWishlistText().should('eq', 'Wishlist');
    wishlistPage.getItemOnWishlist().should('eq', 'Bon Bon 32 - RH32-13 Ceramic Playful Multicolor Dial Pink Rubber Strap');
  });
});
