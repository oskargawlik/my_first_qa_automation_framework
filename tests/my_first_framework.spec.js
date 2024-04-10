import { test, expect } from '@playwright/test';

test.describe('navigation', () => {
    test.beforeEach(async ({ page }) => {
        // Go to the starting url before each test.
        await page.goto('https://ultimateqa.com/complicated-page');
    });

    test('main navigation', async ({ page }) => {
        // Assertions use the expect API.
        await expect(page).toHaveURL('https://ultimateqa.com/complicated-page');
    });

    test('should have the correct title', async ({page}) =>{

        await expect(page).toHaveTitle('Complicated Page - Ultimate QA');
    })

    test('should submit the contact form successfully', async ({page}) =>{
        await page.fill('#et_pb_contact_name_0', 'John Doe');
        await page.fill('#et_pb_contact_email_0', 'john@example.com');
        await page.fill('#et_pb_contact_message_0', 'This is a test message');
        await page.locator('input[name="et_pb_contact_captcha_0"]').fill('14')
        await page.click('.et_contact_bottom_container .et_pb_contact_submit');
        await page.waitForSelector('.et-pb-contact-message p');

        const successMessage = await page.$('.et-pb-contact-message p');
        const successText = await successMessage.innerText();
        expect(successText).toEqual('Thanks for contacting us')
    })
});