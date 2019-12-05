import GooglePage from '../page_objects/google_page';
const assert = require('assert');
const { Given, When, Then } = require('cucumber');
let helper = require("../../features/helper")
//let GooglePage = require('../../features/page_objects/google_page')

Given('que eu vá para o Google', function () {
    // helper.logGenerator("Navegando para o site do Google")
    // browser.url('https://www.google.com')
    // helper.logGenerator("Site Googe acessado com sucesso")
    GooglePage.abraUrl()

});

When('eu pesquiso por teste', function () {
    // helper.logGenerator("Solicitando pesquisa por 'teste'")
    // $('//input[@name="q"]').setValue('teste')
    // browser.keys("\uE007");
    // helper.logGenerator("Pesquisa por 'teste' solicitada")
    GooglePage.realizaPesquisa()
});

Then('eu devo ver toda a Pesquisa', function () {
    // helper.logGenerator("Verificando se pesquisa por 'teste' foi realizada")
    // $("//input[@value='teste'][@role='combobox']").isDisplayed()
    // helper.logGenerator("Pesquisa por 'teste' realizada com sucesso")
    GooglePage.resultadoPesquisaTeste()
});