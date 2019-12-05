import CheckPage from '../page_objects/check_page'
const assert = require('assert');
const { Given, When, Then } = require('cucumber');
let helper = require("../../features/helper")

  Given('que eu check', function () {
    // helper.logGenerator("Indo para a página do Mocha")
    // browser.url('https://mochajs.org/')
    // helper.logGenerator("Página do Mocha acessada")
    CheckPage.abraUrl()
  });


  When('eu checo', function () {
    // helper.logGenerator("Verificando Clicando no link")
    // browser.keys("\uE007");
    // $("//a[@href='https://nodejs.org/']").click();
    // helper.logGenerator("Click acionado com sucesso")
    CheckPage.acessandoLink()
  });

  Then('eu devo ver o check', { wrapperOptions: { retry: 2 } }, function () {
    // helper.logGenerator("Verificando se pesquisa por 'teste' foi realizada")
    // assert.deepEqual($("//img[@alt='Node.js']").isDisplayed(), true)
    // console.log("A imagem do Node.js é apresentada: " + $("//img[@alt='Node.js']").isDisplayed())
    // helper.logGenerator("Pesquisa por 'teste' realizada com sucesso")
    CheckPage.verificandoImagemNode()
  });