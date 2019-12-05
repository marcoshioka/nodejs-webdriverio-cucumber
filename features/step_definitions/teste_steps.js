import TestePage from '../page_objects/teste_page';
const assert = require('assert');
const { Given, When, Then } = require('cucumber');
let helper = require("../../features/helper")

Given('que eu teste', function () {
    // helper.logGenerator("Indo para Speed Test")
    // browser.url('http://www.testepower.com.br/')
    // helper.logGenerator("Speed Test")
    TestePage.abraUrl()
});


When('eu testo', function () {
    // helper.logGenerator("Indo para Speed Test e")
    // browser.keys("\uE007");
    // helper.logGenerator("Speed Test")
    TestePage.iniciandoTeste()
});


Then('eu devo o teste', function () {
    //helper.logGenerator("Verificando se pesquisa por 'teste' foi realizada")
    //$("//input[@value='teste'][@role='combobox']").isDisplayed()
    //helper.logGenerator("Pesquisa por 'teste' realizada com sucesso")
    TestePage.verificandoVelocimetro()
});