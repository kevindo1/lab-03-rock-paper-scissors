
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('error message', ()=>{   
        it('should play RPS against computer', ()=>{
            cy.get('#submit-button').click();
            cy.get('#error-message').should('be.visible');
        });
    });

    describe('reset button', ()=>{   
        it('should reset the game', ()=>{
            cy.get('#reset-button').click();
            cy.get('#reset-message').should('be.visible');
        });
    });
});