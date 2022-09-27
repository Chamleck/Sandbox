/// <reference types="cypress"/>


 it('passes', () => {
    cy.visit('http://localhost:8080/commands/assertions');
    
    cy.get('table.table-bordered.assertion-table tr').eq(3).then(field=>{
        //експлісіт ассершіонс не змінюють об'єкту, також всі перевірки можно робити
        //в одній функції
        expect(cell).to.have.class('success');

        expect(cell).to.have.attr('class');

        expect(cell).to.have.attr('Column content');

        expect(cell).to.have.html('Column content');

        expect(cell).to.not.contain('asdasfasf');
        
        //прирівнювається до === строге порівняння
        expect(field.attr('class')).to.eq('success');
        expect(field.attr('class')).to.equal('success');
        expect(field.attr('class')).to.equals('success');

        //прирівнюється до ==
        expect(field.attr('class')).to.eql('success');
        expect(field.attr('class')).to.eqls('success');
    })

    const obj ={
        key: 'Dima',
        keyObj:{
            key2:'1'
        }
    }

    const obj2 ={
        key: 'Dima',
        keyObj:{
            key2:'1'
        }
    }
    //ця перевірка не виконається так як вона робить строге порівняння і два різні
    //об'єкти хоч і мають однаковий зміст але мають різну назву
    expect(obj).to.eq(obj2);
    //ця перевірка виконається
    expect(obj).to.eq(obj2);

    cy.get('table.table-bordered.assertion-table tr th').eq(5).then(cell=>{
        expect(cell).to.contain('3');
        //cell.text() дістає елемент а parseFloat перетворює на цифру
        expect(parseFloat(cell.text())).to.be.grreaterThen(2);
    })
 })
//перевірка локації
 it('passes', () => {
    cy.visit('http://localhost:8080/commands/assertions');

    cy.location().then(location=>{
        //перевірка локейшн (урл)
        expect(location.href).to.eq('http://localhost:8080/commands/assertions');
        //перевірка хосту
        expect(location.host).to.eq('localhost:8080');
        //перевірка ім'я хосту
        expect(location.hostname).to.eq('localhost');
        //перевірка порту
        expect(location.port).to.eq('8080');
        //
        expect(location.search).to.be.empty;
        //перевірка ендпоінту
        expect(location.pathname).to.eq('/commands/assertions');
        //перевірка протоколу
        expect(location.protocol).to.eq('http:');
        //перевірка що не має двух слещів в урл
        expect(location.pathname).to.not.contain('//');

    })
 })