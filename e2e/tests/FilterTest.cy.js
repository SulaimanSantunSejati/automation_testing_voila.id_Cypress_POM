/// <reference types="cypress" />

import LoginPage from '../../pages/LoginPage';
import SearchPage from '../../pages/SearchPage';
import FilterPage from '../../pages/FilterPage';

describe("Search Tests", () => {
  const loginPage = new LoginPage();
  const searchPage = new SearchPage();
  const filterPage = new FilterPage();
  beforeEach(() => {
    loginPage.unlogin();
  });


  // Boutique Availability
  it('should filter search result based on item available on Jakarta Mall of Indonesia Boutique', () => {
    searchPage.search("hermes");
    filterPage.clickMOI();
    filterPage.getBoutiqueAvailabilityText().should('eq', 'Jakarta - Mall of Indonesia');
  });

  it('should filter search result based on item available on Jakarta Pondok Indah Boutique', () => {
    searchPage.search("hermes");
    filterPage.clickPI();
    filterPage.getBoutiqueAvailabilityText().should('eq', 'Jakarta - Pondok Indah');
  });

  it('should filter search result based on item available on Jakarta Pantai Indah Kapuk Boutique', () => {
    searchPage.search("hermes");
    filterPage.clickPIK();
    filterPage.getBoutiqueAvailabilityText().should('eq', 'Jakarta - Pantai Indah Kapuk');
  });

  it('should filter search result based on item available on Surabaya Bukit Darmo Golf Boutique', () => {
    searchPage.search("hermes");
    filterPage.clickBDG();
    filterPage.getBoutiqueAvailabilityText().should('eq', 'Surabaya - Bukit Darmo Golf');
  });

  it('should filter search result based on item available on Medan Sun Plaza Boutique', () => {
    searchPage.search("hermes");
    filterPage.clickMSP();
    filterPage.getBoutiqueAvailabilityText().should('eq', 'Medan - Sun Plaza');
  });

  // Gender
  it('should filter search result based on item available for women', () => {
    searchPage.search("hermes");
    filterPage.clickWomen();
    filterPage.getGenderAvailabilityText().should('eq', 'Women');
  });

  it('should filter search result based on item available for men', () => {
    searchPage.search("hermes");
    filterPage.clickMen();
    filterPage.getGenderAvailabilityText().should('eq', 'Men');
  });

  it('should filter search result based on item available for kids', () => {
    searchPage.search("hermes");
    filterPage.clickKids();
    filterPage.getGenderAvailabilityText().should('eq', 'Kids');
  });

  // Stock Availability
  it('should filter search result based on item available Ready Stock', () => {
    searchPage.search("hermes");
    filterPage.clickReadyStock();
    filterPage.getStockAvailabilityText().should('eq', 'Ready Stock');
  });

  it('should filter search result based on item available Preorder', () => {
    searchPage.search("hermes");
    filterPage.clickPreorder();
    filterPage.getStockAvailabilityText().should('eq', 'Preorder');
  });

  // Category
  it('should filter search result based on shoes', () => {
    searchPage.search("hermes");
    filterPage.clickShoes();
    filterPage.getCategoryAvailabilityText().should('eq', 'Shoes');
  });

  it('should filter search result based on clothes', () => {
    searchPage.search("hermes");
    filterPage.clickClothes();
    filterPage.getCategoryAvailabilityText().should('eq', 'Clothes');
  });

  it('should filter search result based on Category bags', () => {
    searchPage.search("hermes");
    filterPage.clickBags();
    filterPage.getCategoryAvailabilityText().should('eq', 'Bags');
  });

  it('should filter search result based on Category accessories', () => {
    searchPage.search("hermes");
    filterPage.clickAccessories();
    filterPage.getCategoryAvailabilityText().should('eq', 'Accessories');
  });

  it('should filter search result based on Category watches', () => {
    searchPage.search("hermes");
    filterPage.clickWatchesCategory();
    filterPage.getCategoryAvailabilityText().should('eq', 'Watches');
  });

  it('should filter search result based on Category Beauty', () => {
    searchPage.search("hermes");
    filterPage.clickBeauty();
    filterPage.getCategoryAvailabilityText().should('eq', 'Beauty');
  });

  // Product Type
  it('should filter search result based on card holders', () => {
    searchPage.search("hermes");
    filterPage.clickCardHolders();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Card holders');
  });

  it('should filter search result based on belts', () => {
    searchPage.search("hermes");
    filterPage.clickBelts();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Belts');
  });

  it('should filter search result based on earrings', () => {
    searchPage.search("hermes");
    filterPage.clickEarrings();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Earrings');
  });

  it('should filter search result based on watches', () => {
    searchPage.search("hermes");
    filterPage.clickWatchesProductType();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Watches');
  });

  it('should filter search result based on heeled sandals', () => {
    searchPage.search("hermes");
    filterPage.clickHeeledSandals();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Heeled Sandals');
  });

  it('should filter search result based on shorts', () => {
    searchPage.search("hermes");
    filterPage.clickShorts();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Shorts');
  });

  it('should filter search result based on bag charms', () => {
    searchPage.search("hermes");
    filterPage.clickBagCharms();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Bag Charms');
  });

  it('should filter search result based on blankets', () => {
    searchPage.search("hermes");
    filterPage.clickBlankets();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Blankets');
  });

  it('should filter search result based on vests', () => {
    searchPage.search("hermes");
    filterPage.clickVests();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Vests');
  });

  it('should filter search result based on rings', () => {
    searchPage.search("hermes");
    filterPage.clickRings();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Rings');
  });

  it('should filter search result based on slip ons', () => {
    searchPage.search("hermes");
    filterPage.clickSlipOns();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Slip-Ons');
  });

  it('should filter search result based on caps', () => {
    searchPage.search("hermes");
    filterPage.clickCaps();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Caps');
  });

  it('should filter search result based on necklaces', () => {
    searchPage.search("hermes");
    filterPage.clickNecklaces();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Necklaces');
  });

  it('should filter search result based on other essentials', () => {
    searchPage.search("hermes");
    filterPage.clickOtherEssentials();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Other Essentials');
  });

  it('should filter search result based on long sleeved shirts', () => {
    searchPage.search("hermes");
    filterPage.clickLongSleevedShirts();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Long Sleeved Shirts');
  });

  it('should filter search result based on other tops', () => {
    searchPage.search("hermes");
    filterPage.clickOtherTops();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Other Tops');
  });

  it('should filter search result based on pouches', () => {
    searchPage.search("hermes");
    filterPage.clickPouches();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Pouches');
  });

  it('should filter search result based on scarves', () => {
    searchPage.search("hermes");
    filterPage.clickScarves();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Scarves');
  });

  it('should filter search result based on wallets', () => {
    searchPage.search("hermes");
    filterPage.clickWallets();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Wallets');
  });

  it('should filter search result based on strap', () => {
    searchPage.search("hermes");
    filterPage.clickStrap();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Strap');
  });

  it('should filter search result based on bracelets', () => {
    searchPage.search("hermes");
    filterPage.clickBracelets();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Bracelets');
  });

  it('should filter search result based on lips', () => {
    searchPage.search("hermes");
    filterPage.clickLips();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Lips');
  });

  it('should filter search result based on nails', () => {
    searchPage.search("hermes");
    filterPage.clickNails();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Nails');
  });

  it('should filter search result based on bucket bags', () => {
    searchPage.search("hermes");
    filterPage.clickBucketBags();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Bucket Bags');
  });

  it('should filter search result based on luggage', () => {
    searchPage.search("hermes");
    filterPage.clickLuggage();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Luggage');
  });

  it('should filter search result based on twilly', () => {
    searchPage.search("hermes");
    filterPage.clickTwilly();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Twilly');
  });

  it('should filter search result based on ties', () => {
    searchPage.search("hermes");
    filterPage.clickTies();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Ties');
  });

  it('should filter search result based on bag straps', () => {
    searchPage.search("hermes");
    filterPage.clickBagStraps();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Bag Straps');
  });

  it('should filter search result based on shoulder bags', () => {
    searchPage.search("hermes");
    filterPage.clickShoulderBags();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Shoulder Bags');
  });

  it('should filter search result based on face', () => {
    searchPage.search("hermes");
    filterPage.clickFace();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Face');
  });

  it('should filter search result based on fragrance', () => {
    searchPage.search("hermes");
    filterPage.clickFragrance();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Fragrance');
  });

  it('should filter search result based on woc', () => {
    searchPage.search("hermes");
    filterPage.clickWOC();
    filterPage.getProductTypeAvailabilityText().should('eq', 'WOC');
  });

  it('should filter search result based on backpacks', () => {
    searchPage.search("hermes");
    filterPage.clickBackpacks();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Backpacks');
  });

  it('should filter search result based on belt bags', () => {
    searchPage.search("hermes");
    filterPage.clickBeltBags();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Belt Bags');
  });

  it('should filter search result based on clutch bags', () => {
    searchPage.search("hermes");
    filterPage.clickClutchBags();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Clutch Bags');
  });

  it('should filter search result based on handbags', () => {
    searchPage.search("hermes");
    filterPage.clickHandbags();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Handbags');
  });

  it('should filter search result based on crossbody bags', () => {
    searchPage.search("hermes");
    filterPage.clickCrossbodyBags();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Crossbody Bags');
  });

  it('should filter search result based on dresses', () => {
    searchPage.search("hermes");
    filterPage.clickDresses();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Dresses');
  });

  it('should filter search result based on hoodie', () => {
    searchPage.search("hermes");
    filterPage.clickHoodie();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Hoodie');
  });

  it('should filter search result based on t shirts', () => {
    searchPage.search("hermes");
    filterPage.clickTShirts();
    filterPage.getProductTypeAvailabilityText().should('eq', 'T-Shirts');
  });

  it('should filter search result based on sweatshirts', () => {
    searchPage.search("hermes");
    filterPage.clickSweatshirts();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Sweatshirts');
  });

  it('should filter search result based on jackets', () => {
    searchPage.search("hermes");
    filterPage.clickJackets();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Jackets');
  });

  it('should filter search result based on cardigan', () => {
    searchPage.search("hermes");
    filterPage.clickCardigan();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Cardigan');
  });

  it('should filter search result based on winterwear', () => {
    searchPage.search("hermes");
    filterPage.clickWinterwear();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Winterwear');
  });

  it('should filter search result based on boots', () => {
    searchPage.search("hermes");
    filterPage.clickBoots();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Boots');
  });

  it('should filter search result based on loafers', () => {
    searchPage.search("hermes");
    filterPage.clickLoafers();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Loafers');
  });

  it('should filter search result based on passport holders', () => {
    searchPage.search("hermes");
    filterPage.clickPassportHolders();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Passport Holders');
  });

  it('should filter search result based on key chains', () => {
    searchPage.search("hermes");
    filterPage.clickKeyChains();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Key Chains');
  });

  it('should filter search result based on towels', () => {
    searchPage.search("hermes");
    filterPage.clickTowels();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Towels');
  });

  it('should filter search result based on wedges', () => {
    searchPage.search("hermes");
    filterPage.clickWedges();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Wedges');
  });

  it('should filter search result based on blouses', () => {
    searchPage.search("hermes");
    filterPage.clickBlouses();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Blouses');
  });

  it('should filter search result based on bucket hats', () => {
    searchPage.search("hermes");
    filterPage.clickBucketHats();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Bucket Hats');
  });

  it('should filter search result based on beanies', () => {
    searchPage.search("hermes");
    filterPage.clickBeanies();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Beanies');
  });

  it('should filter search result based on berets', () => {
    searchPage.search("hermes");
    filterPage.clickBerets();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Berets');
  });

  it('should filter search result based on brooches', () => {
    searchPage.search("hermes");
    filterPage.clickBrooches();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Brooches');
  });

  it('should filter search result based on other heels', () => {
    searchPage.search("hermes");
    filterPage.clickOtherHeels();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Other Heels');
  });

  it('should filter search result based on sling bags', () => {
    searchPage.search("hermes");
    filterPage.clickSlingBags();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Sling Bags');
  });

  it('should filter search result based on polo shirts', () => {
    searchPage.search("hermes");
    filterPage.clickPoloShirts();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Polo Shirts');
  });

  it('should filter search result based on mules', () => {
    searchPage.search("hermes");
    filterPage.clickMules();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Mules');
  });

  it('should filter search result based on sandals', () => {
    searchPage.search("hermes");
    filterPage.clickSandals();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Sandals');
  });

  it('should filter search result based on slingbacks', () => {
    searchPage.search("hermes");
    filterPage.clickSlingbacks();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Slingbacks');
  });

  it('should filter search result based on sneakers', () => {
    searchPage.search("hermes");
    filterPage.clickSneakers();
    filterPage.getProductTypeAvailabilityText().should('eq', 'Sneakers');
  });
});