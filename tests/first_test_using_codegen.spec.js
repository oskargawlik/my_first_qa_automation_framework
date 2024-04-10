import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://ultimateqa.com/complicated-page');
    await page.locator('.et_pb_button').first().click();
    await page.locator('.et_pb_column > ul').first().click();
    await page.locator('#et_pb_contact_name_0').click();
    await page.locator('#et_pb_contact_name_0').fill('John');
    await page.locator('#et_pb_contact_name_0').press('Tab');
    await page.locator('#et_pb_contact_email_0').fill('john.doe@gmail.com');
    await page.locator('#et_pb_contact_email_0').press('Tab');
    await page.locator('#et_pb_contact_message_0').fill('simple text');
    await page.locator('input[name="et_pb_contact_captcha_0"]').click();
    await page.locator('input[name="et_pb_contact_captcha_0"]').fill('14');
    await page.locator('#et_pb_contact_form_0').getByRole('button', { name: 'Submit 9' }).click();
    await page.getByText('A toggle Inside of toggle').click();
});