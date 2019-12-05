import Page from './page'
let helper = require("../helper")

class TestePage extends Page {

    get linkTeste() { return $("//a[@href='#testar-velocidade'][@class='no_origin']") }
    get tituloVelocimetro(){return $("//h2[text()= 'Velocímetro Vivo']")}
    get botaoIniciaTeste() { return $("//button/span[text()= 'GO']") }
    get velocimetroTeste() {return $("//div[@class='speed-assembly monochrome-primary']")}
    get pageFrame () {return browser.$("//iframe[@class='speedtest']")}

    abraUrl() {
        helper.logGenerator("Indo para Speed Test")
        super.open('http://www.testepower.com.br/')
        helper.logGenerator("Site Speed Test acessado com sucesso")
    }

    iniciandoTeste() {
        helper.logGenerator("Clicando para iniciar teste")
        this.linkTeste.click()
        browser.switchToFrame(this.pageFrame)
        this.tituloVelocimetro.isDisplayed()
        helper.logGenerator("Teste iniciado com sucesso")
    }

    verificandoVelocimetro() {
        helper.logGenerator("Verificando se velocímetro é apresentado")
        this.botaoIniciaTeste.waitForClickable()
        this.botaoIniciaTeste.click()
        this.velocimetroTeste.isDisplayed()
        helper.logGenerator("Velocímetro apresentado com sucesso")
    }

}

export default new TestePage()
