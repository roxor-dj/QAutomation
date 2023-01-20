import { test, expect} from '@playwright/test';


/*test('Validate login on homepage', async ({ page }) => {
  
  // 1. Go to saucedemo
  await page.goto('https://www.saucedemo.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Swag Labs/);

  // 2.Find and Click on field Username
  const username =  page.locator('#user-name');
  await username.click();

  // 3.In field username add 'standard_user'
  await username.fill('standard_user');

  // 4.Find and Click on field Password
  const pass = page.locator('#password')
  await pass.click();
  
  // 5.In field password add 'secret_sauce'
  await pass.fill('secret_sauce');

  //6.Find and Click on Login button
  const login = page.locator('#login-button');
  await login.click();

  // 7.Assertions
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  // Expect an attribute "to be strictly equal" to the value.
  //await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // Click the get started link.
  //await getStarted.click();

  // Expects the URL to contain intro.
  //await expect(page).toHaveURL(/.*intro/);
  await page.waitForTimeout(5000);
});

*/

/*test('Validate if there is 6 articles on page', async ({ page }) => {
  // Preconditions
  await page.goto('https://www.saucedemo.com/');
  const username =  page.locator('#user-name');
  await username.click();
  await username.fill('standard_user');
  const pass = page.locator('#password')
  await pass.click();
  await pass.fill('secret_sauce');
  const login = page.locator('#login-button');
  await login.click();

  let numberOfArticles = await  page.locator('.inventory_item').count();
  console.log(numberOfArticles);
  expect(numberOfArticles).toEqual(9);
  await page.waitForTimeout(5000);
});*/


//isti test : .inventory_item_name je klasa. porediti da li naslovi artikala su odgovarajuci.
test('Validate if articles have correct prices', async ({ page }) => {
 // Preconditions
 await page.goto('https://www.saucedemo.com/');
 const username =  page.locator('#user-name');
 await username.click();
 await username.fill('standard_user');
 const pass = page.locator('#password')
 await pass.click();
 await pass.fill('secret_sauce');
 const login = page.locator('#login-button');
 await login.click();

 let arr_price =  await page.locator('.inventory_item_price').allInnerTexts();
 
 console.log(arr_price);

 let my_arr = ['$29.99', '$9.99', '$15.99', '$49.99', '$7.99', '$15.99'];
  let i: number;
  let counter: number=0;
 for(i=0; i < my_arr.length; i++ ){
    if(arr_price[i] == my_arr[i]){
      console.log(arr_price[i]+ ' == '  + my_arr[i]);
        counter++;
    }
 }

expect(counter).toEqual(my_arr.length);
});









