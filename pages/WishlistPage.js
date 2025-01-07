/// <reference types="cypress" />

class WishlistPage {
    constructor() {
      this.chooseProductButton = '[data-test-id="CT_component_product-item_Search-Result-Item"]';
      this.wishlistButton = "[data-test-id='CT-PDP-Add-to-Wishlist']";
      this.productOnWishlist = '[data-test-id="CT-wishlist-link"]';
      this.wishlistText = "p._17zx15t4g._1ccbe2w2#base";
      this.itemOnWishlist = "p._15r4f4dg9._1ccbe2wb#base";
      this.editWishlistButton = "[data-test-id='CT-Wishlist-Edit']";
      this.toCheckItem = 'button.glci2q5.glci2q7';
      this.removeWishlistButton = 'button._920fuu5._920fuue._920fuub._920fuu6._920fuui';
      this.confirmToRemoveButton = 'button._920fuu5._920fuuf._920fuub._920fuu6._920fuui';
      this.wishlistEmptyText = "p._15kd2we1f4._17zx15tm8._17zx15te8._1ccbe2wa#base";
    }
  
    clickProductButton() {
      cy.get(this.chooseProductButton).click();
    }
  
    clickWishlistButton() {
      cy.get(this.wishlistButton).click();
    }
  
    clickHeartWishlistButton() {
      cy.get(this.productOnWishlist).click();
    }
  
    getWishlistText() {
      return cy.get(this.wishlistText).invoke('text');
    }
  
    getItemOnWishlist() {
      return cy.get(this.itemOnWishlist).invoke('text');
    }
  
    clickEditWishlistButton() {
      cy.get(this.editWishlistButton).click();
    }
  
    clickItemToCheck() {
      cy.get(this.toCheckItem).click();
    }
  
    clickRemoveWishlistButton() {
      cy.get(this.removeWishlistButton).click();
    }
  
    clickConfirmRemoveButton() {
      cy.get(this.confirmToRemoveButton).click();
    }
  
    getWishlistEmptyText() {
      return cy.get(this.wishlistEmptyText).invoke('text');
    }
  }
  
  export default WishlistPage;
  