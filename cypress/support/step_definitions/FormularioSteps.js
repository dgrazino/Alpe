/* global Given, Then, When */
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import FormularioPage from '../pageobjects/FormularioPage'
const formularioPage = new FormularioPage


Given("acessar o site", () => {
    formularioPage.acessarSite();
})

When("clicar no menu forms", () => {
    formularioPage.clicarBotaoForms();
})

Then("clicar no submenu Practice Form", () => {
    formularioPage.clicarBotaoPracticeForm();
})

Then("a pagina Student Registration Form deve ser exibida", () => {
    formularioPage.validarTexto();
})

When("preencher todo o formulario", () => {
    formularioPage.preencherNomeForm();
    formularioPage.preencherSobreNomeForm();
    formularioPage.preencherMobileNumber()
    formularioPage.selecionarGeneroMasculino();
    formularioPage.selecionarHobby();
    formularioPage.carregarArquivo();
    formularioPage.preencherEndereco();
    formularioPage.preencherEmail();
    formularioPage.selecionarEstadoCidade();
    formularioPage.preencherSubject();
})

Given("usuario esta na tela Student Registration Form", () => {
    formularioPage.acessarSite();
    formularioPage.clicarBotaoForms();
    formularioPage.clicarBotaoPracticeForm();
})

Then("clicar em enviar", () => {
    formularioPage.clicarBotaoEnviar();
})

Given("usuario esta na tela Alerts Frame e Windows", () => {
    formularioPage.acessarSite();
    formularioPage.clicarBotaoAlert();
    formularioPage.clicarBotaoBrowserWindows();
    
})

Then("Clicar no botão new window", () => {
    formularioPage.clicarBotaoNewWindow();
})

Then("validar que a nova janela foi aberta", () => {
    formularioPage.validarNovaJanela();
})



