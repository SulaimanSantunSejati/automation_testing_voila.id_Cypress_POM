/// <reference types="cypress" />

import LoginPage from '../../pages/LoginPage';
import SubscribePage from '../../pages/SubscribePage';

describe('Subscribe Tests', () => {
  const loginPage = new LoginPage();
  const subscribePage = new SubscribePage();

  beforeEach(() => {
    loginPage.unlogin();
  });

  it('should subscribe with a valid email', () => {
    subscribePage.setSubscribe('hitler@gmail.com');
    subscribePage.getSubscribedNotificationText().should(
      'eq',
      'Thanks for joining our community!'
    );
  });

  it('should handle already subscribed email', () => {
    subscribePage.setSubscribe('test@gmail.com');
    subscribePage.getEmailAlreadySubscribedText().should(
      'eq',
      'This email address is already subscribed, please try a different one.'
    );
  });

  it('should handle invalid email format', () => {
    subscribePage.setSubscribe('emailsalah');
    cy.wait(1000);
    subscribePage.getErrorMessageText().should(
      'eq',
      'Please enter your email address in format: yourname@example.com'
    );
  });

  it('should handle empty email field', () => {
    cy.get(subscribePage.subscribeButton).click();
    cy.wait(1000);
    subscribePage.getErrorMessageText().should(
      'eq',
      'Please enter your email address in format: yourname@example.com'
    );
  });
});
