const axios = require('axios');
const cheerio = require('cheerio');
const got = (...args) => import('got').then(({default: got}) => got(...args)); 


(async()=>{
  const keyUrl = 'naturalnews'

  const res = await axios.get('https://naturalnews.com/')
  const $ = cheerio.load(res.data);
    const links = [];
    const linkObjects = $('a');
    linkObjects.each((index, element) => {
        const item = {
            text: $(element).text(), // get the text
            href: convertUrlString($(element).attr('href')), // get the href attribute
        }
        if (!item.href.includes(keyUrl)) {
            return;
        }
        links.push(item);
    });

    console.log(links);

})()

const convertUrlString = (str) => { 
    if (str.indexOf('https')!==-1 ) {
        return str
    } 
    return 'https:' + str
 }

const crawlDataWeb = async ({ url, keyUrl, fetchDescription = true, crawNested = false }) => {
    const res = await axios.get('https://naturalnews.com/')
    const $ = cheerio.load(res.data);
    const links = [];
    const linkObjects = $('a');
    linkObjects.each((index, element) => {
        const item = {
            text: $(element).text(), // get the text
            href: $(element).attr('href'), // get the href attribute
        }
        links.push(item);
    });
}
