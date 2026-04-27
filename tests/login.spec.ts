import{test,expect} from '@playwright/test'
import{env} from  '../env/env';
test.describe('sauce demo', () => {
test   ('login succesfull' ,async({page}) => {
await page.goto(env.baseurl);
await page.locator('[data-test="username"]').fill('standard_user');
await page.locator('[data-test="password"]').fill('secret_sauce');
await page.getByRole('button',{name:'Login'}).click();
await expect(page.locator('[data-test="title"]')).toHaveText('Products');
})
test ( 'login invalid credentials',async ({page}) =>{
    await page.goto(env.baseurl);
    await page.locator('[data-test="username"]').fill('locked_out_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.getByRole('button',{name:'Login'}).click();
     const errorMessage = page.locator('[data-test="error"]');
  await expect(errorMessage).toHaveText(
    'Epic sadface: Sorry, this user has been locked out.');
  })
  
})