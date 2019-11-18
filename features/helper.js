const cucumberJson = require('wdio-cucumberjs-json-reporter').default;
//const multipleCucumberHtmlReporter = require ('wdio-multiple-cucumber-html-reporter').default;

function logGenerator(logText) {
    cucumberJson.attach('Automação: ' + logText);
    console.log('Automação: ' + logText)
}

// function addScreenshot(){
//     //var decodedImage = new Buffer(png.replace(/^data:image\/(png|gif|jpeg);base64,/, ''), 'base64'));
//     cucumberJson.attach(browser.saveScreenshot('./reports/screenshot.png'), 'image/png');
// }

module.exports = { logGenerator }//, addScreenshot }

