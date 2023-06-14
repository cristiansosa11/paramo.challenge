const { test, expect,} = require('./utils/hooks');

test('Login and create a deposit', async ({webApp}) =>{
    // the test.slow() is just in this test, to avoid of change the default timeout 
    test.slow();
    
    const loginPage = await webApp.goToLoginPage();
    await loginPage.completeLogin(); 
    await expect(webApp.userAvatar,'The user has not been logged').toBeVisible();
    const profilePage = await webApp.goToProfilePage();  
    const depositPage = await profilePage.goToDepositPage();
    await depositPage.enterDeposit();
    await expect(depositPage.successToast,'The deposit has not been created').toBeVisible();
    
  });
  

  
test.afterEach(async ({page})=>{

  page.close();


});
  