const { th } = require("@faker-js/faker");
const { expect } = require("@playwright/test");
const {BasePage} = require('../pageobjects/BasePage');

// This class contains all the locators and functions related to the Deposit Page.


class DepositPage extends BasePage{

    constructor(page){
        super(page);
        this.title= page.locator("//h1[contains(text(),'Deposit')]");
        this.manualDepositButton = page.locator("[id='withdraw-button-38']");
        this.amountField = page.locator("[id='DepositForm_amount']");
        this.depositButton = page.locator("//button[@id='btn-deposit']");
        this.successToast = page.locator("//div[contains(text(),'Done')]")
    }


    // This function selects the option for a manual deposit and type a value into that field 
    async enterDeposit (){
        console.log("Filling the deposit to add")
        await this.manualDepositButton.click();
        await this.amountField.type("12354");
        await this.depositButton.click();

    }

   

}
module.exports ={DepositPage};