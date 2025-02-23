/// <reference types="cypress" />

import LoginPage from '../../pages/LoginPage';
import SearchPage from '../../pages/SearchPage';

describe("Search Tests", () => {
  const loginPage = new LoginPage();
  const searchPage = new SearchPage();

  beforeEach(() => {
    loginPage.unlogin();
  });

  it('should handle invalid special characters in search', () => {
    searchPage.search('!@#$%');
    cy.wait(2000)
    cy.contains('Product not found').should('be.visible'); 
    cy.contains('We can’t find any products that matches your search. Please try another keyword.').should('be.visible');    
  });

  it('should handle empty search', () => {
    cy.get(searchPage.searchBox).click();
    cy.get(searchPage.searchBoxInput).type('{enter}');
    cy.wait(5000)
    cy.contains('We can’t find any products that matches your search. Please try another keyword.').should('be.visible'); 
    cy.contains('Product not found').should('be.visible'); 
  });

  it('should search for a specific item', () => {
    searchPage.search('Bon Bon 32 - RH32-13 Ceramic Playful Multicolor Dial Pink Rubber Strap');
    cy.wait(2000)
    cy.contains('Bon Bon 32 - RH32-13 Ceramic Playful Multicolor Dial Pink Rubber Strap').should('be.visible'); 
  });

  it('should search for a specific brand', () => {
    cy.wait(1000)
    searchPage.search('nike');
    cy.wait(6000)
    cy.contains('Nike').should('be.visible');
    cy.contains('Filter').should('be.visible');
  });
});
