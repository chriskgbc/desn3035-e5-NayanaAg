import fs from 'fs';
import lighthouse from 'lighthouse';
import puppeteer from 'puppeteer';

// Launch the browser and open a new blank page
const browser = await puppeteer.launch();
const page = await browser.newPage();

// Navigate the page to a URL.
await page.goto('https://nayanaag.github.io/desn3035-e5/');

// Set screen size.
await page.setViewport({width: 1920, height: 1080});

await page.waitForNetworkIdle();

await page.screenshot({
    path: "auto_screenshot.png"
});

const options = {
    output: 'html'
};

const runnerResult = await lighthouse(
    'https://nayanaag.github.io/desn3035-e5/', 
    options, 
    undefined, page);

// `.report` is the HTML report as a string
const reportHtml = runnerResult.report;
fs.writeFileSync('auto_report.html', reportHtml);

// Locate the full title with a unique string.
const textSelector = await page
  .locator('text/Customize and automate')
  .waitHandle();
const fullTitle = await textSelector?.evaluate(el => el.textContent);

// Print the full title.
console.log('The title of this blog post is "%s".', fullTitle);

//Lighthouse


await browser.close();
