class FilterPage {
    // Boutiques
    mallOfIndonesia = "p:contains('Jakarta - Mall of Indonesia')";
    pondokIndah = "p:contains('Jakarta - Pondok Indah')";
    pantaiIndahKapuk = "p:contains('Jakarta - Pantai Indah Kapuk')";
    bukitDarmoGolf = "p:contains('Surabaya - Bukit Darmo Golf')";
    medanSunPlaza = "p:contains('Medan - Sun Plaza')";
  
    // Availability
    boutiqueAvailability = "[data-test-id='CT-quick-filter-pill-storeAvailability']";
    genderAvailability = "[data-test-id='CT-quick-filter-pill-gender']";
    stockAvailability = "[data-test-id='CT-quick-filter-pill-stockAvailability']";
    categoryAvailability = "[data-test-id='CT-quick-filter-pill-category']";
    productTypeAvailability = "[data-test-id='CT-quick-filter-pill-productType']";
  
    // Gender
    women = "p:contains('Women')";
    men = "p:contains('Men')";
    kids = "p:contains('Kids')";
  
    // Stock Availability
    readyStock = "p:contains('Ready Stock')";
    preorder = "p:contains('Preorder')";
  
    // Category
    shoes = "p:contains('Shoes')";
    clothes = "p:contains('Clothes')";
    bags = "p:contains('Bags')";
    accessories = "p:contains('Accessories')";
    beauty = "p:contains('Beauty')";
    watchesCategory = "p:contains('Watches')";
  
    // Product type
    cardHolders = "p:contains('Card holders')";
    belts = "p:contains('Belts')";
    earrings = "p:contains('Earrings')";
    watchesProductType = "p:contains('Watches')"; 
    heeledSandals = "p:contains('Heeled Sandals')";
    shorts = "p:contains('Shorts')";
    bagCharms = "p:contains('Bag Charms')";
    blankets = "p:contains('Blankets')";
    vests = "p:contains('Vests')";
    rings = "p:contains('Rings')";
    slipOns = "p:contains('Slip-Ons')";
    caps = "p:contains('Caps')";
    necklaces = "p:contains('Necklaces')";
    otherEssentials = "p:contains('Other Essentials')";
    longSleevedShirts = "p:contains('Long Sleeved Shirts')";
    otherTops = "p:contains('Other Tops')";
    pouches = "p:contains('Pouches')";
    scarves = "p:contains('Scarves')";
    wallets = "p:contains('Wallets')";
    strap = "p:contains('Strap')";
    bracelets = "p:contains('Bracelets')";
    lips = "p:contains('Lips')";
    nails = "p:contains('Nails')";
    bucketBags = "p:contains('Bucket Bags')";
    luggage = "p:contains('Luggage')";
    twilly = "p:contains('Twilly')";
    ties = "p:contains('Ties')";
    bagStraps = "p:contains('Bag Straps')";
    shoulderBags = "p:contains('Shoulder Bags')";
    face = "p:contains('Face')";
    fragrance = "p:contains('Fragrance')";
    woc = "p:contains('WOC')";
    backpacks = "p:contains('Backpacks')";
    beltBags = "p:contains('Belt Bags')";
    clutchBags = "p:contains('Clutch Bags')";
    handbags = "p:contains('Handbags')";
    crossbodyBags = "p:contains('Crossbody Bags')";
    dresses = "p:contains('Dresses')";
    hoodie = "p:contains('Hoodie')";
    sandals = "p:contains('Sandals')";
    tShirts = "p:contains('T-Shirts')";
    sweatshirts = "p:contains('Sweatshirts')";
    jackets = "p:contains('Jackets')";
    cardigan = "p:contains('Cardigan')";
    winterwear = "p:contains('Winterwear')";
    boots = "p:contains('Boots')";
    loafers = "p:contains('Loafers')";
    passportHolders = "p:contains('Passport Holders')";
    keyChains = "p:contains('Key Chains')";
    towels = "p:contains('Towels')";
    wedges = "p:contains('Wedges')";
    blouses = "p:contains('Blouses')";
    bucketHats = "p:contains('Bucket Hats')";
    beanies = "p:contains('Beanies')";
    berets = "p:contains('Berets')";
    brooches = "p:contains('Brooches')";
    slingBags = "p:contains('Sling Bags')";
    otherHeels = "p:contains('Other Heels')";
    poloShirts = "p:contains('Polo Shirts')";
    mules = "p:contains('Mules')";
    slingbacks = "p:contains('Slingbacks')";
    sneakers = "p:contains('Sneakers')";
  
    // Step methods boutiques
    clickMOI() {
      cy.get(this.mallOfIndonesia).click();
    }
  
    clickPI() {
      cy.get(this.pondokIndah).click();
    }
  
    clickBDG() {
      cy.get(this.bukitDarmoGolf).click();
    }
  
    clickPIK() {
      cy.get(this.pantaiIndahKapuk).click();
    }
  
    clickMSP() {
      cy.get(this.medanSunPlaza).click();
    }
  
    // Step methods gender
    clickWomen() {
      cy.get(this.women).click();
    }
  
    clickMen() {
      cy.get(this.men).click();
    }
  
    clickKids() {
      cy.get(this.kids).click();
    }
  
    // Assert values
    getBoutiqueAvailabilityText() {
      return cy.get(this.boutiqueAvailability).invoke('text');
    }
  
    getGenderAvailabilityText() {
      return cy.get(this.genderAvailability).invoke('text');
    }
  
    getStockAvailabilityText() {
      return cy.get(this.stockAvailability).invoke('text');
    }
  
    getCategoryAvailabilityText() {
      return cy.get(this.categoryAvailability).invoke('text');
    }
  
    getProductTypeAvailabilityText() {
      return cy.get(this.productTypeAvailability).invoke('text');
    }
  
    // Method Stock Availability
    clickReadyStock() {
      cy.get(this.readyStock).click();
    }
  
    clickPreorder() {
      cy.get(this.preorder).click();
    }
  
    // Method Category
    clickShoes() {
      cy.get(this.shoes).click();
    }
  
    clickClothes() {
      cy.get(this.clothes).click();
    }
  
    clickBags() {
      cy.get(this.bags).click();
    }
  
    clickAccessories() {
      cy.get(this.accessories).click();
    }
  
    clickBeauty() {
      cy.get(this.beauty).click();
    }
  
    clickWatchesCategory(){
        cy.get(this.watchesCategory).click();
    }
  
    // Method product type
    clickOtherHeels() {
      cy.get(this.otherHeels).click();
    }
  
    clickPoloShirts() {
      cy.get(this.poloShirts).click();
    }
  
    clickMules() {
      cy.get(this.mules).click();
    }
  
    clickSlingbacks() {
      cy.get(this.slingbacks).click();
    }
  
    clickSneakers() {
      cy.get(this.sneakers).click();
    }
  
    clickCardHolders() {
      cy.get(this.cardHolders).click();
    }
  
    clickBelts() {
      cy.get(this.belts).click();
    }
  
    clickEarrings() {
      cy.get(this.earrings).click();
    }
  
    clickWatchesProductType() {
      cy.get(this.watchesProductType).click();
    }
  
    clickHeeledSandals() {
      cy.get(this.heeledSandals).click();
    }
  
    clickShorts() {
      cy.get(this.shorts).click();
    }
  
    clickSandals() {
      cy.get(this.sandals).click();
    }
  
    clickBagCharms() {
      cy.get(this.bagCharms).click();
    }
  
    clickBlankets() {
      cy.get(this.blankets).click();
    }
  
    clickVests() {
      cy.get(this.vests).click();
    }
  
    clickRings() {
      cy.get(this.rings).click();
    }
  
    clickSlipOns() {
      cy.get(this.slipOns).click();
    }
  
    clickCaps() {
      cy.get(this.caps).click();
    }
  
    clickNecklaces() {
      cy.get(this.necklaces).click();
    }
  
    clickOtherEssentials() {
      cy.get(this.otherEssentials).click();
    }
  
    clickLongSleevedShirts() {
      cy.get(this.longSleevedShirts).click();
    }
  
    clickOtherTops() {
      cy.get(this.otherTops).click();
    }
  
    clickPouches() {
      cy.get(this.pouches).click();
    }
  
    clickScarves() {
      cy.get(this.scarves).click();
    }
  
    clickWallets() {
      cy.get(this.wallets).click();
    }
  
    clickStrap() {
      cy.get(this.strap).click();
    }
  
    clickBracelets() {
      cy.get(this.bracelets).click();
    }
  
    clickLips() {
      cy.get(this.lips).click();
    }
  
    clickNails() {
      cy.get(this.nails).click();
    }
  
    clickBucketBags() {
      cy.get(this.bucketBags).click();
    }
  
    clickLuggage() {
      cy.get(this.luggage).click();
    }
  
    clickTwilly() {
      cy.get(this.twilly).click();
    }
  
    clickTies() {
      cy.get(this.ties).click();
    }
  
    clickBagStraps() {
      cy.get(this.bagStraps).click();
    }
  
    clickShoulderBags() {
      cy.get(this.shoulderBags).click();
    }
  
    clickFace() {
      cy.get(this.face).click();
    }
  
    clickFragrance() {
      cy.get(this.fragrance).click();
    }
  
    clickWOC() {
      cy.get(this.woc).click();
    }
  
    clickBackpacks() {
      cy.get(this.backpacks).click();
    }
  
    clickBeltBags() {
      cy.get(this.beltBags).click();
    }
  
    clickClutchBags() {
      cy.get(this.clutchBags).click();
    }
  
    clickHandbags() {
      cy.get(this.handbags).click();
    }
  
    clickCrossbodyBags() {
      cy.get(this.crossbodyBags).click();
    }
  
    clickDresses() {
      cy.get(this.dresses).click();
    }
  
    clickHoodie() {
      cy.get(this.hoodie).click();
    }
  
    clickTShirts() {
      cy.get(this.tShirts).click();
    }
  
    clickSlingBags() {
      cy.get(this.slingBags).click();
    }
  
    clickSweatshirts() {
      cy.get(this.sweatshirts).click();
    }
  
    clickJackets() {
      cy.get(this.jackets).click();
    }
  
    clickCardigan() {
      cy.get(this.cardigan).click();
    }
  
    clickWinterwear() {
      cy.get(this.winterwear).click();
    }
  
    clickBoots() {
      cy.get(this.boots).click();
    }
  
    clickLoafers() {
      cy.get(this.loafers).click();
    }
  
    clickPassportHolders() {
      cy.get(this.passportHolders).click();
    }
  
    clickKeyChains() {
      cy.get(this.keyChains).click();
    }
  
    clickTowels() {
      cy.get(this.towels).click();
    }
  
    clickWedges() {
      cy.get(this.wedges).click();
    }
  
    clickBlouses() {
      cy.get(this.blouses).click();
    }
  
    clickBucketHats() {
      cy.get(this.bucketHats).click();
    }
  
    clickBeanies() {
      cy.get(this.beanies).click();
    }
  
    clickBerets() {
      cy.get(this.berets).click();
    }
  
    clickBrooches() {
      cy.get(this.brooches).click();
    }
  }
  
  export default FilterPage;