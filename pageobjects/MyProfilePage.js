const {DepositPage} = require('../pageobjects/DepositPage')
const {BasePage} = require('../pageobjects/BasePage');

// This class contains all the locators and functions related to the Profile Page.


class MyProfilePage extends BasePage{

    constructor(page){  
        super(page);
        this.depositButton = page.locator("//span[contains(text(),'Deposit')]");
        this.myAccountsButton = page.locator("//span[contains(text(),'My accounts')]")
    }
    // This function redirects to the Deposit Page
    async goToDepositPage(){
        console.log('redirecting to the deposit page')
        await this.depositButton.click();
        const deposit = new DepositPage(this.page);
        return deposit;
    }

    
}

module.exports= {MyProfilePage};