import { test, expect } from '@playwright/test';

test('Validate if creating a user works', async ({page}) =>{
    
    // 1.Go to https://www.globalsqa.com/demo-site/dialog-boxes/#Form

    await page.goto('https://www.globalsqa.com/demo-site/dialog-boxes/#Form');

    //2 Click on Create User

    const createUser = page.locator('#create-user');
    createUser.click

    //3. Click on Create new Account

    const createNewAccount = page.locator('.ui-button ui-corner-all ui-widget')
    createNewAccount.click

    //4. Assertions
    const table  = page.locator('#users');
    expect(table).toContain('Jane Smith');










    await page.waitForTimeout(3000)
}) 