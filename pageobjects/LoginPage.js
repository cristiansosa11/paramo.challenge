const  user  = require('../tests/utils/user.json')
const {BasePage} = require('../pageobjects/BasePage');

// This class contains all the locators and functions related to the Login Page.

class LoginPage extends BasePage{

    constructor(page){
        super(page);
        this.loginPageTitle = page.locator("//h2[contains(text(),'Sign in')]")
        this.emailField = page.locator("//input[@id='UserLogin_username']")
        this.passwordField = page.locator("//input[@id='UserLogin_password']")
        this.signInButton = page.locator("//button[@type='submit']")
    }

    //This function completes the email and the password field, using a static data provider from a JSON file
    async completeLogin (){       
        console.log("filling the user credentials")
        await this.emailField.type(user.user);
        await this.passwordField.type(user.password);
        await this.signInButton.click();       
               
    }

}

module.exports= {LoginPage};