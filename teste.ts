import * as puppeteer from 'puppeteer'

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  await page.goto('https://mangalivre.net/ler/-hitogatana-/online/6874/capitulo-1#/!page0', {
    waitUntil: 'networkidle2'
  });

  await page.on('response', async (response) => {    
    const urls = response.url()
    if (urls.includes('?key=')){
        console.log('XHR response received'); 
        console.log(await response.json()); 
    } 
  });

  await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });

  await page.close();
})();