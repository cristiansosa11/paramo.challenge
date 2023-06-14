const { test, expect,} = require('./utils/hooks');

test('User Registration', async ({webApp}) =>{    
    const registerPage = await webApp.goToRegisterPage() 
    await registerPage.completeForm();
    await expect(registerPage.successRegistrationMessage,'The user has not been created').toBeVisible();


});

test.afterEach(async ({page})=>{

  page.close();


});


