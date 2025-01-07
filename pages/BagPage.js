/// <reference types="cypress" />
class BagPage {
    constructor() {
        this.bagButton ='[data-test-id="CT_Component_cartIcon"]' ;
        this.addToBagButton = '._15r4f4dhd > ._920fuu5';
        this.chooseProductButton = '[data-test-id="CT_component_product-item_Search-Result-Item"]';
        this.shoppingBagText = 'p._15r4f4daf._17zx15te8._17zx15ths._17zx15t80._17zx15t4g#base';
        this.valentinoText = 'p._15kd2weog._17zx15ta8._17zx15tg0.clamp-2#base';
        this.removeFromCartButton = '[data-test-id="CT_Component_removeSelectedCart"]';
        this.confirmToRemoveButton = '[data-test-id="CT_Component_ConfirmContent_Ok"]';
        this.shoppingBagIsEmptyText = 'p._17zx15te8._17zx15t7k._17zx15tgg#base';
    }

    clickBagButton() {
        cy.get(this.bagButton).click({ force: true });
    }

    clickAddToBagButton() {
        cy.get(this.addToBagButton).click({ force: true });
    }

    clickChooseProductButton() {
        cy.get(this.chooseProductButton).click();
    }

    getShoppingBagText() {
        return cy.get(this.shoppingBagText).invoke('text');
    }

    getValentinoText() {
        return cy.get(this.valentinoText).invoke('text');
    }

    clickRemoveFromCart() {
        cy.get(this.removeFromCartButton).click();
    }

    clickConfirmToRemoveFromCart() {
        cy.get(this.confirmToRemoveButton).click();
    }

    getShoppingBagIsEmptyText() {
        return cy.get(this.shoppingBagIsEmptyText).invoke('text');
    }

    addToBagProduct() {
        this.clickChooseProductButton();
        cy.wait(9000);
        this.clickAddToBagButton();
    }

    removeProductFromBag() {
        this.clickRemoveFromCart();
        this.clickConfirmToRemoveFromCart();
    }
}

export default BagPage;
