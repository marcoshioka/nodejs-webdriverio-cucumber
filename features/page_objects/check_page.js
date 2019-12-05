import Page from './page'
let helper = require("../helper")

class CheckPage extends Page {

    get linkNode() { return $("//a[@href='https://nodejs/']") }
    get imagemNode() { return $("//img[@alt='Node.js']") }

    abraUrl() {
        helper.logGenerator("Navegando para o site do Mocha")
        super.open('https://mochajs.org/')
        helper.logGenerator("Site Mocha acessado com sucesso")
    }

    acessandoLink() {
        helper.logGenerator("Clicando no link")
        browser.keys("\uE007");
        this.linkNode.click()
        helper.logGenerator("Click no link acionado com sucesso")
    }

    verificandoImagemNode() {
        helper.logGenerator("Verificando se imagem do Node é apresentada")
        this.imagemNode.isDisplayed()
        helper.logGenerator("Imagem do Node apresentada com sucesso")
    }

}

export default new CheckPage()
