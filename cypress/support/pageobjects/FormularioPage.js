import FormularioElements from '../elements/FormularioElements'
const formularioElements = new FormularioElements
const url = Cypress.config("baseUrl")

class FormularioPage { 
    acessarSite() {
        cy.visit(url)
        
    }   

        clicarBotaoForms() {
            cy.get(formularioElements.botaoForms()).click()
            
        }

        clicarBotaoAlert(){
            cy.get(formularioElements.botaoAlert()).click()            
        }

        clicarBotaoBrowserWindows(){
            //cy.get(formularioElements.botaoBrowserWindows()).click()
            cy.contains('Browser Windows').click()
        }

        clicarBotaoNewWindow(){
            cy.get(formularioElements.botaoNewWindow()).click()
        }

        validarNovaJanela(){
            const windows = cy.window();
            cy.window(windows[2]);
            cy.contains("This is a sample page");
        }

        validarTexto() {
            cy.get(formularioElements.txtPracticeForm()).should('contain','Student Registration Form')
            
        }

        clicarBotaoPracticeForm() {
            cy.get(formularioElements.botaoPracticeForm()).click()
            
        }

        preencherNomeForm() {
            cy.get(formularioElements.txtFirstName()).type("Diego")            
        }

        preencherEmail() {
            cy.get(formularioElements.txtEmail()).type("Diego.grazino@gmail.com")            
        }

        preencherSobreNomeForm() {
            cy.get(formularioElements.txtLastName()).type("Grazino")            
        }

        preencherMobileNumber() {
            cy.get(formularioElements.txtMobileNumber()).type("1199998888")            
        }        
        
        selecionarGeneroMasculino() {
            cy.get(formularioElements.radioButtonGenderMale()).check({force: true} )
        }

        selecionarHobby() {
            cy.get(formularioElements.chkButtonHobbiesMusic()).check({force: true})
        }

        carregarArquivo(){
            //cy.get(formularioElements.imputArquivo()).attachFile('cypress\fixtures\demoQA.txt');

            cy.get(formularioElements.imputArquivo()).selectFile("cypress/fixtures/demoQA.txt", {force: true});
            cy.get(formularioElements.imputArquivo()).click();

        }

        preencherEndereco(){
            cy.get(formularioElements.txtCurrentAddress()).type("Rua santo amaro, 180")
        }


        selecionarEstadoCidade(){
            cy.get(formularioElements.slcState()).type('NCR{enter}')
            cy.wait(500);
            cy.get(formularioElements.slcCity()).type('Delhi{enter}')
            //cy.get(formularioElements.slcCity).click().contains('Noida').click();
        }

        preencherSubject () {
            cy.get(formularioElements.txtSubjects()).type('Maths{enter}')
        }

        clicarBotaoEnviar() {
            cy.get(formularioElements.botaoSubmit()).click()
            
        }

}
export default FormularioPage;