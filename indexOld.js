// const browserObject = require('./browser');
// const scraperController = require('./pageController');
const axios = require('axios');
// //Start the browser and create a browser instance
// let browserInstance = browserObject.startBrowser();

// // Pass the browser instance to the scraper controller
// scraperController(browserInstance)


(async()=>{
  const data = await  axios.get('https://naturalnews.com/')
  console.log(data)
})()
