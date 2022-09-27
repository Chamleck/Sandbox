/// <reference types="cypress"/>

describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080/commands/assertions');
    //проверка на то что єлемент обладает определеннім класом
    cy.get('table.table-bordered.assertion-table tr').eq(3)
    .should('have.class','success')
    //проверка что у элемента есть атрибут в данн случае класс
    cy.get('table.table-bordered.assertion-table tr').eq(3)
    .should('have.attr','class')
    //проверка на наличие текста
    cy.get('table.table-bordered.assertion-table tr td').eq(3)
    .should('have.text','Column content')
    //
    cy.get('table.table-bordered.assertion-table tr td').eq(3)
    .should('have.html','Column content')
    //тоже поиск текста
    cy.get('table.table-bordered.assertion-table tr td').eq(3)
    .should('contain','Column content')
    //ищет часть текста 
    cy.get('table.table-bordered.assertion-table tr td').eq(3)
    .should('include.text','Column content')
    //не содержит
    cy.get('table.table-bordered.assertion-table tr td').eq(3)
    .should('not.contain','adasdafa')
    //наличие цифры
    cy.get('table.table-bordered.assertion-table tr td').eq(5)
    .should('contain','3')
    //превращаем текст в число и проверяем больше ли это число цифры 2
    cy.get('table.table-bordered.assertion-table tr td').eq(5)
    .invoke('text')
    .then(parseFloat)
    .should('be.greaterThan',2)
    //что єлемент равен 3
    cy.get('table.table-bordered.assertion-table tr td').eq(5)
    .invoke('text')
    .then(parseFloat)
    .should('eq',3)

    cy.visit('http://localhost:8080/commands/querying');
    cy.get('#inputName')
    .type('Hello')
    .should('have.value','Hello');
    //проверка на цвет
    cy.get('table.table-bordered.assertion-table tr td').eq(5)
    .should('have.css', 'backgroud-color')
    .and('eq','rgb(223, 240, 216)');
    // перевірка на те що елемент візібл
    cy.get('table.table-bordered.assertion-table tr td').eq(5)
    .should('be.visible');
    //перевірка що список має певну кількість елементів
    cy.get('a[data-toggle="dropdown"]').click();
    cy.get('.dropdown-menu li').should('have.length', 17)
  })
})