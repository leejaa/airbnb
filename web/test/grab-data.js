const puppeteer = require('puppeteer');

const grabData = async () => {
  const browser = await puppeteer.launch({
    // will greatly affect the results
    headless: false,
    // important for running on various server where root user is present
    args: [`--window-size=2000,1500`],
  });

  // actual navigation happens here
  const page = await browser.newPage();
  await page.goto('https://www.naver.com');

  // sample data collection
  const title = await page.title();
  let outerHTML = await page.evaluate(() => document.querySelector('body').outerHTML);
  await page.waitFor('.input_text');
  await page.type('.input_text', '리액트', { delay: 0 });
  await page.keyboard.press( 'Enter' );
  await page.waitForNavigation();
  // await page.click('.lst_realtime_srch > li');
  outerHTML = await page.evaluate(() => document.querySelector('body').outerHTML);
  console.log('outerHTML', outerHTML);
  // cleanup once done
  await browser.close();
  return { title, outerHTML };
};

module.exports = grabData;