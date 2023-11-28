Feature: Teste de API

    #Scenario: Acessar Submenu Forms
    #    Given acessar o site
    #    When clicar no menu forms
    #    And clicar no submenu Practice Form
    #    Then a pagina Student Registration Form deve ser exibida

    #Scenario: Preencher Formulario
    #    Given usuario esta na tela Student Registration Form
    #    When preencher todo o formulario
    #    Then clicar em enviar
    
    #Scenario: Preencher Formulario
    #    Given usuario esta na tela Alerts Frame e Windows
    #    When Clicar no botão new window
    #    #Then validar que a nova janela foi aberta

    #Scenario: Preencher Formulario
    #    Given usuario esta na tela Alerts Frame e Windows
    #    When Clicar no botão new window
    #    #Then validar que a nova janela foi aberta

    Scenario: Preencher Formulario
        Given Cadastrar usuario
        When Gerar token de acesso
        And Confirmar se o usuário criado está autorizado
        And Listar os livros disponíveis
        And Alugar dois livros de livre escolha
        Then Listar os detalhes do usuário com os livros escolhidos
