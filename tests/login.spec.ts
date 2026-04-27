import{test,expect} from '@playwright/test'
test.only('login succesful' , async ({page}) =>{
await page.goto("https://www.saucedemo.com/");
await page.locator('[data-test="username"]').fill('standard_user');
await page.locator('[data-test="password"]').fill('secret_sauce');
await page.getByRole('button',{name:'Login'}).click();
await expect (page.locator('[data-test="title"]')).toBeVisible('Prodcuts');
})