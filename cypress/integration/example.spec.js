
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('user-interaction', ()=>{   
        it('should play RPS against computer', ()=>{
            cy.get('#rock').click();
            cy.get('#submit-button').click();
            cy.get('#win-message').should('be.visible');
        });
    });
});