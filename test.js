var Crawler = require("crawler");
 const axios = require('axios')
const idVideos= []
const incrViewUrl = (id) =>`https://www.brighteon.com/api-v3/videos/${id}/views`
var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : async function (error, res, done) {
        if(error){
            console.log(error);
        } else {
            const $ = res.$;
            const test = $('.title > a')
            test.each(((index, e) => idVideos.push($(e).attr('href').substring(1))))
            console.log('🚀 🚀 file: test.js 🚀 line 4 🚀 idVideos', idVideos)
          const data=   await Promise.all(idVideos.map(async id=>{
                try {
                    await axios.post(incrViewUrl(id))
                    return true
                } catch (error) {
                    console.log('🚀 🚀 file: test.js 🚀 line 19 🚀 error', error)
                    return false
                }

            }))
          console.log('🚀 🚀 file: test.js 🚀 line 26 🚀 data', data)
        }
        done();
    }
    
});
 
// Queue just one URL, with default callback
c.queue('https://www.brighteon.com/channels/hrreport');
c.queue('https://www.brighteon.com/channels/hrreport?page=2');
 
// Queue a list of URLs
// c.queue(['http://www.google.com/','http://www.yahoo.com']);
 
// Queue URLs with custom callbacks & parameters
// c.queue([{
//     uri: '',
//     jQuery: false,
 
//     // The global callback won't be called
//     callback: function (error, res, done) {
//         if(error){
//             console.log(error);
//         }else{
//             console.log('Grabbed', res.body.length, 'bytes');
//         }
//         done();
//     }
// }]);
 
// Queue some HTML code directly without grabbing (mostly for tests)
// c.queue([{
//     html: '<p>This is a <strong>test</strong></p>'
// }]);

