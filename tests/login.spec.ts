import{test,expect} from '@playwright/test'
import{env} from  '../env/env';
test.only('login succesful' , async ({page}) =>{
await page.goto(env.baseurl);
await page.locator('[data-test="username"]').fill('standard_user');
await page.locator('[data-test="password"]').fill('secret_sauce');
await page.getByRole('button',{name:'Login'}).click();
await expect(page.locator('[data-test="title"]')).toHaveText('Products');
})