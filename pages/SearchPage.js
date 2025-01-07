/// <reference types="cypress" />

class SearchPage {
    constructor() {
      this.urlLogin = "https://voila.id/";
      this.searchBox = '[data-test-id="CT-Search"]';
      this.searchBoxInput = '[data-test-id="CT-Search-Input"]';
      this.filterText = 'p._17zx15te8._1ccbe2w9#base';
      this.searchResultNotFoundText = 'p._15kd2we1f4._17zx15tm8._17zx15te8._1ccbe2wa#base';
      this.searchResultInvalidFoundText = 'p._15kd2we1f4._15kd2weow._17zx15tm8._1ccbe2wb#base';
      this.searchSpecificItemText = 'p._15r4f4dg9._1ccbe2wb#base';
      this.logoNike = 'img[alt="Nike"]';
    }
  
    clickSearch() {
      cy.get(this.searchBox).click();
    }
  
    getFilterText() {
      return cy.get(this.filterText).invoke('text');
    }
  
    searchForItem(item) {
      cy.get(this.searchBoxInput).type(item).type('{enter}');
    }
  
    getNotFoundText() {
      return cy.get(this.searchResultNotFoundText).invoke('text');
    }
  
    getInvalidFoundText() {
      return cy.get(this.searchResultInvalidFoundText).invoke('text');
    }
  
    getSpecificItemText() {
      return cy.get(this.searchSpecificItemText).invoke('text');
    }
  
    getLogoNike() {
      return cy.get(this.logoNike).invoke('attr', 'alt');
    }
  
    search(item) {
      this.clickSearch();
      this.searchForItem(item);
    }
  }
  
  export default SearchPage;
  