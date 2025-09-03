import {test, expect} from '@playwright/test';

test.describe('Verify the Gercep Page', () => {
    // Open Gercep Page & Check Title
    test('open page and verify has a title', async({page})=>{
        await page.goto("/gercep");

        // Expect a URL
        await expect(page).toHaveURL(/.*gercep/);
        // Expect a title 'VCGemes'
        await expect(page).toHaveTitle(/VCGamers/);
        // Harusnya
        // await expect(page).toHaveTitle(/Top Up Game Gercep, Termurah dan 100% Aman/);
    });

    // Search Bar Interaction
    test('verify search bar interaction', async({page})=>{
        await page.goto("/gercep");

        // Fill the searchbar
        await page
            .getByPlaceholder("Cari Nama Brand di Gercep...")
            .fill("mobile legends");
        await page.keyboard.press('Enter');

        const result = page.getByRole('link', {name: /Mobile Legends/i });
        await expect(result).toBeVisible();
    });

    // Click First Item
    test('verify click search result item', async({page})=>{
        await page.goto("/gercep");

        // Fill the searchbar
        await page
            .getByPlaceholder("Cari Nama Brand di Gercep...")
            .fill("mobile legends");
        await page.keyboard.press('Enter');

        // cari locator
        // const clickPage = page.getByRole('link', {name: 'Mobile Legends'});
        const clickPage = page.locator('a[href="/gercep/mobile-legends/top-up-game"]');
        // await expect(clickPage).toBeVisible();

        // Klik hasil yang muncul
        await clickPage.click();

        await expect(page).toHaveURL(/gercep\/mobile-legends\/top-up-game/, {timeout: 15000});
        // await expect(page).toHaveTitle(/Top Up ML Murah Pasti Dapat Cashback | Mobile Legends | VCGamers/).toBeVisible();
    });
});