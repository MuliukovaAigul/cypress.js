describe('Тестирование staya', function () {
    
    it('Проверка авторизации', function () {
        cy.visit('https://staya.dog/');
        cy.get('#stickyHeader > section.header-bottom.transition-header > div > div > a').click();
        cy.get('#__layout > div > main > div > div > div > section > div > form > input:nth-child(1)').type('mulyukova.89@mail.ru');
        cy.get('#__layout > div > main > div > div > div > section > div > form > input:nth-child(2)').type('mulyukovaAIGUL38242');
        cy.get('#__layout > div > main > div > div > div > section > div > form > button').click();
        cy.contains('Мои заказы');
    })
})
        