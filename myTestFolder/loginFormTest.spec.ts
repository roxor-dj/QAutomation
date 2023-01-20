import { test, expect} from '@playwright/test';


test('Validate title on login From', async ({page}) => {

    //1. Go to Saucedemo.com
    await page.goto('https://www.saucedemo.com/');

    //2.
    await expect(page).toHaveTitle(/Swag Labs/)

    await page.waitForTimeout(3000);
})

test('Validate URL on login Form', async({page}) =>{

    //1.Go to Saucedemo.com
    await page.goto('https://www.saucedemo.com/');

    await expect(page).toHaveURL('https://www.saucedemo.com')

    await page.waitForTimeout(3000);
})

test.only('Vaidate login with correct username and password', async({page}) => {

    //1.Go to saucedemo
    await page.goto('https://www.saucedemo.com/');

    //2.Click on field Username

    const username = page.locator('#user-name');
    await username.click();

    //3. Enter valid username
    await username.fill('standard_user');

    //4. Click on field password
    const password = page.locator('#password');

    //5. Enter valid password
    await password.fill('secret_sauce');

    //6.Find and click on login button
    const loginButton = page.locator('#login-button');
    await loginButton.click();

    //7.Assertions

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    const headerContainer = page.locator('#header_container')
    await expect(headerContainer).toBeVisible();


   await page.waitForTimeout(3000);
})

test('Validate error message - incorrect credentionals', async ({page}) => {

    //1.Go to page saucedemo
    await page.goto('https://www.saucedemo.com/');

    //2.Find and click on username field
    const username = page.locator('#user-name');
    await username.click();
    await username.fill('djdjd');

    //3. Find and click on password field
    const password = page.locator('#password');
    await password.click();
    await password.fill('jdjdd')

    //4 Click on loginbutton
    const loginButton = page.locator('#login-button');
    await loginButton.click();

    //5.Get error message from page
    const errorMessage = await page.locator('h3').innerText();
    console.log(errorMessage);

    //6. Assertions
    const message = 'Epic sadface: Username and password do not match any user in this service';
    expect(errorMessage).toEqual(message)

    await page.waitForTimeout(3000);
})


test('Validate error message with empty password', async ({page}) => {

    //1.Go to page saucedemo
    await page.goto('https://www.saucedemo.com/');

    //2.Find and click on username field
    const username = page.locator('#user-name');
    await username.click();
    await username.fill('djdjd');

    //3. Find and click on password field
    // const password = page.locator('#password');
    //await password.click();
    //await password.fill('')

    //4 Click on loginbutton
    const loginButton = page.locator('#login-button');
    await loginButton.click();

    //5.Get error message from page
    const errorMessage = await page.locator('h3').innerText();
    console.log(errorMessage);

    //6. Assertions
    const message = 'Epic sadface: Password is required';
    expect(errorMessage).toEqual(message)

    await page.waitForTimeout(3000);
})


test('Validate error message with empty username', async ({page}) => {

    //1.Go to page saucedemo
    await page.goto('https://www.saucedemo.com/');

    //2.Find and click on username field
    //const username = page.locator('#user-name');
    //await username.click();
    //await username.fill('djdjd');

    //3. Find and click on password field
    const password = page.locator('#password');
    await password.click();
    await password.fill('dddd')

    //4 Click on loginbutton
    const loginButton = page.locator('#login-button');
    await loginButton.click();

    //5.Get error message from page
    const errorMessage = await page.locator('h3').innerText();
    console.log(errorMessage);

    //6. Assertions
    const message = 'Epic sadface: Username is required';
    expect(errorMessage).toEqual(message)

    await page.waitForTimeout(3000);
})