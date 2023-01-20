import { test, expect } from '@playwright/test';

test('Validate title on login form', async ({page}) => {

    //1. Go to Saucedemo.com
    await page.goto('https://www.saucedemo.com/');

    //2.Check if you pointing to right page
    await expect(page).toHaveTitle(/Swag Labs/);
})

test('Validate URL on login Form', async ({page}) =>{

    //1. Go to Saucemo.com
    await page.goto('https://www.saucedemo.com/');
    
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    
})

test('Validate login with correct username and password',async ({page}) => {

    //1.Go to page
    await page.goto('https://www.saucedemo.com/');

    //2.Click on username filed 
    const username = page.locator('#user-name');
    await username.click();

    //3.Enter valid username
    await username.fill('standard_user');

    //4.Click on password field
    const password = page.locator('#password')
    await password.click();

    //5. Enter valid password
    await password.fill('secret_sauce');

    //6.Click on login button
    const loginButton = page.locator('#login-button');
    await loginButton.click();

    //7.Assertions
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    const headerContainer = page.locator('#header_container');
    await expect(headerContainer).toBeVisible();

    
    await page.waitForTimeout(3000)
})

test.only('Validate error message - incorrect credentionals', async ({page}) => {
    //1 Go to page saucedemo.com
    await page.goto('https://www.saucedemo.com/');

    //2. Click on username field
    const username = page.locator('#user-name');
    await username.click();

    //3.Enter wrong username in username field
    await username.fill('error_username')

    //4.Click on password field 
    const password = page.locator('#password');
    await password.click();

    //5. Enter wrong password in password field
    await password.fill('wrong');

    //6. Click on Loginbutton
    const loginButton = page.locator('#login-button');
    await loginButton.click();

    //7.Get error message from page
    const eroorMessageOne = await page.locator('h3').innerText();
    console.log(eroorMessageOne);

    //8.Assertions

    const message = 'Epic sadface: Username and password do not match any user in this service';
    expect(eroorMessageOne).toEqual(message);

    await page.waitForTimeout(3000);
})