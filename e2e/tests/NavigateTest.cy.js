/// <reference types="cypress" />

import NavigatePage from '../../pages/NavigatePage';
import LoginPage from '../../pages/LoginPage';

describe('Test Navigation', () => {
    const navigatePage = new NavigatePage();
    const loginPage = new LoginPage();

    beforeEach(() => {
        loginPage.unlogin();
        cy.scrollTo('bottom');
      });

    // Official Store 
    it('Navigate to Tokopedia', () => {
        navigatePage.clickTokopediaButtonNavigate();
        cy.get().should('eq', 'https://www.tokopedia.com/voilaid');
    });

    it('Navigate to Shopee', () => {
        navigatePage.clickShopeeButtonNavigate();
        cy.url().should('eq', 'https://shopee.co.id/voila.id_officialshop');
    });

    it('Navigate to Blibli', () => {
        navigatePage.clickBlibliButtonNavigate();
        cy.url().should('eq', 'https://www.blibli.com/challenge/landing/?redirect=%2Fmerchant%2Fvoila-id%2FVOI-70003%3Fpage%3D1%26start%3D0%26pickupPointCode%3DPP-3176345%26cnc%3D%26multiCategory%3Dtrue%26excludeProductList%3Dtrue%26promoTab%3Dfalse%26sort%3D7');
    });

    it('Navigate to Zalora', () => {
        navigatePage.clickZaloraButtonNavigate();
        cy.url().should('eq', 'https://www.zalora.co.id/voila-id/');
    });
// About Us
    it('Navigate to About Us', () => {
        navigatePage.clickAboutButtonNavigate();
        cy.url().should('eq', 'https://edit.voila.id/about/');
    });

    it('Navigate to Our Boutiques', () => {
        navigatePage.clickOurBoutiquesButtonNavigate();
        cy.url().should('eq', 'https://edit.voila.id/our-boutiques/');
    });

    it('Navigate to Blog', () => {
        navigatePage.clickBlogButtonNavigate();
        cy.url().should('eq', 'https://edit.voila.id/');
    });

    it('Navigate to Promotions', () => {
        navigatePage.clickPromotionsButtonNavigate();
        cy.url().should ('include', 'promotions')
    });

    it('Navigate to Program and Partnership', () => {
        navigatePage.clickProgramAndPartnershipButtonNavigate();
        cy.url().should('eq', 'https://voila.id/pages/programs-and-partnerships');
    });

    it('Navigate to Careers', () => {
        navigatePage.clickCareersButtonNavigate();
        cy.url().should ('include', 'jobs')  
    });

    it('Navigate to Voila x Kaya Leathers', () => {
        navigatePage.clickVoilaidXKayaLeathersButtonNavigate();
        cy.url().should('eq', 'https://edit.voila.id/voila-kaya/');
    });

    // Customer Service
    it('Navigate to Contact Us', () => {
        navigatePage.clickContactUsButtonNavigate();
        cy.url().should('eq', 'https://edit.voila.id/contact/');
    });

    it('Navigate to Help Center', () => {
        navigatePage.clickHelpCenterButtonNavigate();
        cy.url().should('eq','https://helpcenter.voila.id/hc/activity') 
    });

    it('Navigate to Terms and Conditions', () => {
        navigatePage.clickTermsAndConditionsButtonNavigate();
        cy.url().should('eq', 'https://edit.voila.id/terms-and-conditions/');
    });

    it('Navigate to Privacy Policy', () => {
        navigatePage.clickPrivacyPolicyButtonNavigate();
        cy.url().should('eq', 'https://edit.voila.id/privacy-policy/');
    });

    //Social Media
    it('Navigate to Instagram Voila', () => {
        navigatePage.clickInstagramVoilaButtonNavigate();
        cy.url().should('eq', 'https://www.instagram.com/voila.id/');
    });

    it('Navigate to Tiktok Voila', () => {
        navigatePage.clickTiktokVoilaButtonNavigate();
        cy.url().should('eq', 'https://www.tiktok.com/@voila.id?lang=en');
    });

    it('Navigate to YouTube Voila', () => {
        navigatePage.clickYoutubeVoilaButtonNavigate();
        cy.url().should('eq', 'https://www.youtube.com/channel/UCYkAZ9ERvRASlKhIqrGpeQA');
    });

    it('Navigate to Facebook Voila', () => {
        navigatePage.clickFacebookVoilaButtonNavigate();
        cy.url().should('eq', 'https://www.facebook.com/voilalux');
    });

    // Voila App

    it('Navigate to Google Play Store', () => {
        navigatePage.clickGooglePlayStoreButtonNavigate();
        cy.url().should('eq', 'https://play.google.com/store/apps/details?id=com.voila.id&pli=1');
    });

    it('Navigate to Apple Store', () => {
        navigatePage.clickAppleStoreButtonNavigate();
        cy.url().should('eq', 'https://apps.apple.com/id/app/voila-id/id1560619001?l=id');
    });
});
