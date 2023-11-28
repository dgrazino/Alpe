/* global Given, Then, When */
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const { faker } = require('@faker-js/faker');
let accessToken; 
let isbn1;
let isbn2;
let userIDNew;
let password = 'Casa1234#';
let userNameinst = faker.person.firstName();

Given("Cadastrar usuario", () => {
    const requestData = {        
        userName: userNameinst,
        password: password
      };
      cy.request({
        method: 'POST',
        url: 'https://bookstore.toolsqa.com/Account/v1/User',
        headers: {
          'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7,fr;q=0.6',
          'Content-Type': 'application/json',
          'accept': 'application/json',
        },
        body: requestData,
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('userID');
        userIDNew = response.body.userID;
        cy.log('Usuario criado:', userIDNew);
        cy.log('UserName', userNameinst);
      });
});

Given("Gerar token de acesso", () => {
    const requestData = {
        userName: userNameinst,
        password: password
      };
    cy.log('Usuario criado:', userNameinst, ' password: ', password);

    cy.request({
      method: 'POST',
      url: 'https://bookstore.toolsqa.com/Account/v1/GenerateToken',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: requestData,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(200);
      accessToken = response.body.token;
      cy.log('Resultado: ', response.body.token);
      cy.log('Resultado: ', response.body.expires);
      cy.log('Resultado: ', response.body.status);
      cy.log('Resultado: ', response.body.result);
    });
});

Given("Confirmar se o usuário criado está autorizado", () => {
    const requestData = {
        userName: userNameinst,
        password: password
      };
    cy.log('Usuario criado:', userNameinst, ' password: ', password);

    cy.request({
      method: 'POST',
      url: 'https://bookstore.toolsqa.com/Account/v1/Authorized',
      headers: {
        'Content-Type': 'application/json'
      },
      body: requestData
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.be.true;
    });
});

Given("Listar os livros disponíveis", () => {
    cy.request({
      method: 'GET',
      url: 'https://bookstore.toolsqa.com/BookStore/v1/Books',
      headers: {
        'Content-Type': 'application/json'
      },

    }).then((response) => {
      expect(response.status).to.equal(200);
      isbn1 = response.body.books[0].isbn;
      isbn2 = response.body.books[1].isbn;
    });
});

Given("Alugar dois livros de livre escolha", () => {
    const requestData = {
        userId:  userIDNew,
        collectionOfIsbns: [
            {isbn: isbn1},
            {isbn: isbn2}
          ]
      };
      cy.log('Usuario criado:', userIDNew);
      cy.log('isbn1:', isbn1);
      cy.log('isbn1:', isbn2);
    cy.request({
      method: 'POST',
      url: 'https://bookstore.toolsqa.com/BookStore/v1/Books',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      },
      body: requestData
    }).then((response) => {
      expect(response.status).to.equal(201);
      //isbn = response.body.books[0].isbn;
    });
});

Given("Listar os detalhes do usuário com os livros escolhidos", () => {
    const requestData = {
        userId:  userIDNew
      };
    cy.request({
      method: 'GET',
      url: 'https://bookstore.toolsqa.com/Account/v1/User/' + userIDNew,
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      },
      body: requestData
    }).then((response) => {
      expect(response.status).to.equal(200);
      cy.log('Descrição livro 1 ' + response.body.books[0].description)
      cy.log('Descrição livro 2 ' + response.body.books[1].description)
    });
});



