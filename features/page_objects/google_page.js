import Page from './page'
let helper = require("../helper")

class GooglePage extends Page {

    get campoPesquisa() { return $('//input[@name="q"]') }
    get pesquisaTeste() { return $("//input[@value='teste'][@role='combobox']") }

    abraUrl() {
        helper.logGenerator("Navegando para o site do Google")
        super.open('https://www.google.com')
        helper.logGenerator("Site Google acessado com sucesso")
    }

    realizaPesquisa() {
        helper.logGenerator("Solicitando pesquisa por 'teste'")
        this.campoPesquisa.setValue('teste')
        browser.keys("\uE007");
        helper.logGenerator("Pesquisa por 'teste' solicitada")
    }

    resultadoPesquisaTeste() {
        helper.logGenerator("Verificando se pesquisa por 'teste' foi realizada")
        this.pesquisaTeste.isDisplayed()
        helper.logGenerator("Pesquisa por 'teste' realizada com sucesso")
    }

}

export default new GooglePage()
