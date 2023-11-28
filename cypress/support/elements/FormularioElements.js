class FormularioElements { 
    botaoForms = () => { return '#app > div > div > div.home-body > div > div:nth-child(2) > div > div.card-body > h5' }
    botaoAlert = () => { return '#app > div > div > div.home-body > div > div:nth-child(3) > div > div.card-body > h5' }
    botaoPracticeForm = () => { return ':nth-child(2) > .element-list > .menu-list > #item-0 > .text'}
    botaoBrowserWindows = () => { return '#item-0'}
    botaoNewWindow = () => {return '#windowButton'}
    txtPracticeForm = () => {return '#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.practice-form-wrapper > h5'}
    txtFirstName = () => {return '#firstName'}
    txtLastName = () => {return '#lastName'}
    txtEmail = () => {return '#userEmail'}
    radioButtonGenderMale = () => {return '#gender-radio-1'}
    radioButtonGenderFemale = () => {return '#gender-radio-2'}
    radioButtonGenderOther = () => {return '#gender-radio-3'}
    txtMobileNumber = () => {return '#userNumber'}
    txtDateBirth = () => {return '#dateOfBirthInput'}
    txtSubjects =() => {return '#subjectsContainer > div > div.subjects-auto-complete__value-container.subjects-auto-complete__value-container--is-multi.css-1hwfws3'}
    chkButtonHobbiesSports = () => {return '#hobbies-checkbox-1'}
    chkButtonHobbiesReading = () => {return '#hobbies-checkbox-2'}
    chkButtonHobbiesMusic = () => {return '#hobbies-checkbox-3'}
    botaoEscolherArquivo = () => { return '#uploadPicture"' }
    txtCurrentAddress = () => {return '#currentAddress'}
    botaoSubmit = () => {return '#submit'}
    slcState = () => {return '#state'}
    slcCity = () => {return '#city'}
    imputArquivo = () => { return '#uploadPicture'}
}
export default FormularioElements;