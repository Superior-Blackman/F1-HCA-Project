const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.formula1.com/en/latest/all.html');
  console.log('running');
//   await page.pdf({path: 'hn.pdf', format: 'a4'});

  const dimensions = await page.evaluate(() => {

  

    return {
      image: document.querySelector('.f1-latest-listing--grid-item .f1-cc--photo img').src,
      container: document.querySelectorAll('.f1-latest-listing--grid-item .col-12 .col-md-6 .col-lg-4'),
      deviceScaleFactor: window.devicePixelRatio,
    };
  });

  console.log('Dimensions:', dimensions);


  await browser.close();
})();