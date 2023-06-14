const { RegisterPage} = require('../pageobjects/RegisterPage');
const {LoginPage} = require('../pageobjects/LoginPage');
const {MyProfilePage} = require('../pageobjects/MyProfilePage')
const {BasePage} = require('../pageobjects/BasePage');
const {DepositPage} = require('../pageobjects/DepositPage');

// This class contains all the locators and functions related to the Home Page.

class HomePage extends BasePage {
    constructor(page) {
        super(page);
        this.registerButton = page.locator("//span[contains(text(),'Sign up')]");
        this.loginButton = page.locator("//div[@class='button   header-button header-button--login']");
        this.mailLoginButton = page.locator("//a[@class='button   header-button header-button--login']");
        this.userAvatar = page.locator("//div[@class='user-avatar__links']");
        this.rowProfile = page.locator("//div[@class='user-info__profile-name']")
        this.goToProfileButtton = page.locator("//span[contains(text(),'Go to profile')]")
        this.arrowButton = page.locator('.icon-menu-open');
        this.gameCategories = page.locator("//span[contains(text(),'Game categories')]");

    }  
    // This function redirects to the Register Page
    async  goToRegisterPage() {
        console.log("redirecting to the register page")
        await this.registerButton.click();
        const registerPage = new RegisterPage(this.page);
        return registerPage;
    }
    // This function redirects to the Login Page
    async goToLoginPage (){
        console.log("redirecting to the login page")
        await this.loginButton.click();
        await this.mailLoginButton.click();
        const loginPage = new LoginPage(this.page);
        return loginPage;

    }

    // This function redirects to the Profile Page
    async goToProfilePage (){
        console.log("redirecting to the profile page")
        await this.rowProfile.click();
        await this.goToProfileButtton.click();      
        const myProfilePage = new MyProfilePage(this.page)
        return myProfilePage;
    } 
    async goToCategoriesPage(){
        await this.arrowButton.click();
        await this.gameCategories.click();
        const gamesPage = new GameCategoriesPage(this.page);
        return gamesPage;

    }

    async goTo(){
        await this.page.goto('')
        
        await this.page.locator("//button[@class='button button--s2 button--t1 ']").click()   
    }

}

module.exports = { HomePage };