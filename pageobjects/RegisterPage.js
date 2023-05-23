const { expect } = require("@playwright/test")
const {faker, th} = require('@faker-js/faker')
const {BasePage} = require('../pageobjects/BasePage');

// This class contains all the locators and functions related to the Register Page.


class RegisterPage extends BasePage{
 
    constructor(page){
        super(page);
        this.title = page.locator("//h2[contains(text(),'Sign up')]")
        this.emailField= page.locator("//input[@type='email']")
        this.termsAndConditionsCheck = page.locator("//label[@for='core__protected_modules_user_yiiForm_RegistrationForm_terms_and_conditions']")
        this.currencyDrop = page.locator("//div[@class='selectric-wrapper selectric-below selectric-open']")
        this.passwordField = page.locator("//input[@data-test='input-password']")
        this.passwordConfirmationField = page.locator("//input[@data-test='input-password_confirmation']")
        this.noBonusButton = page.locator("//label[@for='bonus-0']")
        this.createAccountButton = page.locator("//span[contains(text(),'Create account')]")
        this.successRegistrationMessage = page.locator("//h1[@class='notification__title']")

    }



   
    // This function completes the form to register an user, using a faker to generate an email and password, both randoms
    async completeForm(){
        const email = faker.internet.email()
        const password = faker.internet.password()
        await this.emailField.type(email)
        await this.termsAndConditionsCheck.click()
        await this.passwordField.type(password)
        await this.passwordConfirmationField.type(password)
        await this.noBonusButton.click()
        await this.createAccountButton.click()
    }

   
     

}

module.exports ={RegisterPage};