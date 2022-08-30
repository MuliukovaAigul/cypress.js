describe('Тестирование staya', function () {
    
    it('Ввод неправильного пароля', function () {
        cy.visit('https://staya.dog/');
        cy.get('#stickyHeader > section.header-bottom.transition-header > div > div > a').click();
        cy.get('#__layout > div > main > div > div > div > section > div > form > input:nth-child(1)').type('ввод почты');
        cy.get('#__layout > div > main > div > div > div > section > div > form > input:nth-child(2)').type('ввод неправильного пароля');
        cy.get('#__layout > div > main > div > div > div > section > div > form > button').click();
        })
})
     
