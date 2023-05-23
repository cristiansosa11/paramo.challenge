const { th } = require("@faker-js/faker");

class BasePage{



    constructor(page){        
        this.page=page;
        this.searchButton = page.locator("[id='btn-search']");
        this.gameCategoriesButton = page.locator("//span[contains(text(),'Game categories')]");
        this.providersButton = page.locator("//span[contains(text(),'Providers')]");
        this.gamesButton = page.locator("//span[contains(text(),'Games')]");
        this.sportsbookButton = page.locator("//span[contains(text(),'Sportsbook')]");
        this.bonusButton = page.locator("//span[contains(text(),'Bonuses')]");
        this.tournamentsButton = page.locator("//span[contains(text(),'Tournaments')]");
        this.newsButton = page.locator("//span[contains(text(),'News')]");
        this.loyaltyButton = page.locator("//span[contains(text(),'Loyalty')]");
        this.rulesButton = page.locator("//span[contains(text(),'Rules')]");
        this.faqButton = page.locator("//span[contains(text(),'FAQ')]");
        this.buyCreditsButton = page.locator("//a[@class='header-user__transactions']");
    }  
    // These methods are considerate for a future implementation, that will allows to the other pages, to redirect to any another page

    /* async goToCategoriesPage(){
        await this.gameCategoriesButton.click();
        const gamePage = new GameCategoriesPage(this.page);
        return gamePage;

    }

    async goToProvidersPage(){
        await this.providersButton.click();
        const providersPage = new ProvidersPage(this.page);
        return providersPage;
    }

    async goToGamesPage(){
        await this.gamesButton.click();
        const gamesPage = new GamesPage();
        return gamesPage;
    } */



}

module.exports = {BasePage};