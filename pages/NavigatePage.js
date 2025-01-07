/// <reference types="cypress" />

class NavigatePage {
    constructor() {
        // Official Store
        this.tokopedia_button = 'img[alt="tokopedia"]';
        this.shopee_button = 'img[alt="shopee"]';
        this.blibli_button = 'img[alt="blibli"]';
        this.tiktok_button = 'img[alt="tiktok"]';
        this.zalora_button = 'img[alt="zalora"]';

        // About Us
        this.about_voila_button_text = 'About voilà.id';
        this.our_boutiques_button_text = 'Our Boutiques';
        this.blog_button_text = 'Blog';
        this.promotions_button_text = 'Promotions';
        this.program_and_partnership_button_text = 'Programs & Partnerships';
        this.shop_by_request_button_text = 'Shop by Request';
        this.careers_button_text = 'Careers';
        this.voilaid_x_kaya_leathers_button_text = 'voilà.id x Kaya Leathers';

        // Customer Service
        this.contact_us_button_text = 'Contact Us';
        this.help_center_button_text = 'Help Center';
        this.terms_and_conditions_button_text = 'Terms & Conditions';
        this.privacy_policy_button_text = 'Privacy Policy';

        // Social Media
        this.instagram_voila_button = 'a[href="https://www.instagram.com/voila.id/"]';
        this.tiktok_voila_button = 'a[href="https://www.tiktok.com/@voila.id?lang=en"]';
        this.youtube_voila_button = 'a[href="https://www.youtube.com/channel/UCYkAZ9ERvRASlKhIqrGpeQA"]';
        this.facebook_voila_button = 'a[href="https://www.facebook.com/voilalux"]';

        // Voila App
        this.google_play_store_button = 'a[href="https://play.google.com/store/apps/details?id=com.voila.id&pli=1"]';
        this.apple_store_button = 'a[href="https://apps.apple.com/id/app/voila-id/id1560619001?l=id"]';
    }

    // Scroll to specific position
    scrollToPosition(yPosition) {
        cy.scrollTo(0, yPosition);
    }

    // Click Methods

    // Official Store
    clickTokopediaButtonNavigate() {
        cy.get(this.tokopedia_button).click();
    }

    clickShopeeButtonNavigate() {
        cy.get(this.shopee_button).click();
    }

    clickBlibliButtonNavigate() {
        cy.get(this.blibli_button).click();
    }

    clickTiktokButtonNavigate() {
        cy.get(this.tiktok_button).click();
    }

    clickZaloraButtonNavigate() {
        cy.get(this.zalora_button).click();
    }

    // About Us
    clickAboutButtonNavigate() {
        cy.contains(this.about_voila_button_text).click();
    }

    clickOurBoutiquesButtonNavigate() {
        cy.contains(this.our_boutiques_button_text).click();
    }

    clickBlogButtonNavigate() {
        cy.contains(this.blog_button_text).click();
    }

    clickPromotionsButtonNavigate() {
        cy.contains(this.promotions_button_text).click({ force: true });
    }

    clickProgramAndPartnershipButtonNavigate() {
        cy.contains(this.program_and_partnership_button_text).click({ force: true });
    }

    clickShopByRequestButtonNavigate() {
        cy.contains(this.shop_by_request_button_text).click();
    }

    clickCareersButtonNavigate() {
        cy.contains(this.careers_button_text).click({ force: true });
    }

    clickVoilaidXKayaLeathersButtonNavigate() {
        cy.contains(this.voilaid_x_kaya_leathers_button_text).click();
    }

    // Customer Service
    clickContactUsButtonNavigate() {
        cy.contains(this.contact_us_button_text).click();
    }

    clickHelpCenterButtonNavigate() {
        cy.contains(this.help_center_button_text).click({ force: true });
    }

    clickTermsAndConditionsButtonNavigate() {
        cy.contains(this.terms_and_conditions_button_text).click({ force: true });
    }

    clickPrivacyPolicyButtonNavigate() {
        cy.contains(this.privacy_policy_button_text).click();
    }

    // Social Media
    clickInstagramVoilaButtonNavigate() {
        cy.get(this.instagram_voila_button).click();
    }

    clickTiktokVoilaButtonNavigate() {
        cy.get(this.tiktok_voila_button).click();
    }

    clickYoutubeVoilaButtonNavigate() {
        cy.get(this.youtube_voila_button).click();
    }

    clickFacebookVoilaButtonNavigate() {
        cy.get(this.facebook_voila_button).click();
    }

    // Voila App
    clickGooglePlayStoreButtonNavigate() {
        cy.get(this.google_play_store_button).click();
    }

    clickAppleStoreButtonNavigate() {
        cy.get(this.apple_store_button).click();
    }
}

export default NavigatePage;


        // Buttons by text
        


    // Methods
//     clickContactUsButtonNavigate() {
//         cy.contains(this.contact_us_button_text).click({ force: true });
//     }
// }