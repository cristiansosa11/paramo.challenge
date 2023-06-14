
const { test, expect} = require('@playwright/test');
const { HomePage } = require('../../pageobjects/HomePage')


exports.expect = expect
exports.test = test.extend({
  webApp: async ({page}, use) =>{
  const homePage = new HomePage(page);
  await homePage.goTo();
  await use(homePage);    
  },
});