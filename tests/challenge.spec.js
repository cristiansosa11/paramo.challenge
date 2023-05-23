const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pageobjects/HomePage');
const { RegisterPage} = require('../pageobjects/RegisterPage');
const {DepositPage} = require('../pageobjects/DepositPage')




test.beforeEach(async ({page})  => {  
    await page.goto('')
    expect(page.url(),'The page is not loaded').toBe("https://demo.casino/")
    await page.locator("//button[@class='button button--s2 button--t1 ']").click()   
  
  });


test('User Registration', async ({page}) =>{
    const homePage = new HomePage(page);  
    const registerPage = await homePage.goToRegisterPage();    
    await registerPage.completeForm();
    await expect(registerPage.successRegistrationMessage,'The user has not been created').toBeVisible();


});

test('Login and create a deposit', async ({page}) =>{
  // the test.slow() is just in this test, to avoid of change the default timeout 
  test.slow();
  const homePage = new HomePage(page);
  const loginPage = await homePage.goToLoginPage();
  await loginPage.completeLogin(); 
  await expect(homePage.userAvatar,'The user has not been logged').toBeVisible();
  const profilePage = await homePage.goToProfilePage();  
  const depositPage = await profilePage.goToDepositPage();
  await depositPage.enterDeposit();
  await expect(depositPage.successToast,'The deposit has not been created').toBeVisible();
  
});

test.afterEach(async ({page})=>{

  page.close();


});


