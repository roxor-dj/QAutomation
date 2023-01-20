import { test, expect} from '@playwright/test';


test('Validate googleSearchFields', async ({ page }) => {
    
    // 1.Go to Google.com
    await page.goto('https://www.yahoo.com/');

    // 2.Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Yahoo/);

    // 3.Find and Click on Search Field
    let field : any = {};
    field =  page.locator('#ybar-sbq');

    // 4.In search field put Crypto
    let term : any = {};
    term =  page.locator('#ybar-sbq');
    await term.fill('Crypto');
    
    // 5.Click on magnifier glass
    let glass : any = {};
    glass = await page.locator('#ybar-search').click();

    // 5. Assertion
    let title: string;
    title = await page.locator('.fw-n').innerText();
    console.log(title);
    expect.soft(title).toEqual("Cryptocurrency");
    //expect(title).toEqual("Cryptocurrency");  

   await page.waitForTimeout(5000);
});







