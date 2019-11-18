const assert = require('assert');
const { Given, When, Then } = require('cucumber');
let helper = require("../../features/helper")

Given('que eu vá para o Google', function () {
    helper.logGenerator("Navegando para o site do Google")
    browser.url('https://www.google.com')
    helper.logGenerator("Site Google acessado com sucesso")
    //helper.addScreenshot()
});

When('eu pesquiso por teste', function () {
    helper.logGenerator("Solicitando pesquisa por 'teste'")
    $('//input[@name="q"]').setValue('teste')
    browser.keys("\uE007");
    helper.logGenerator("Pesquisa por 'teste' solicitada")
    //helper.addScreenshot()
});

Then('eu devo ver toda a Pesquisa', function () {
    helper.logGenerator("Verificando se pesquisa por 'teste' foi realizada")
    $("//input[@value='teste'][@role='combobox']").isDisplayed()
    //$(selector).scrollIntoView(scrollIntoViewOptions)
    //browser.elementClick('//div[@text="huidashduhsao"]')
    //assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js')
    helper.logGenerator("Pesquisa por 'teste' realizada com sucesso")
    //helper.addScreenshot()
});