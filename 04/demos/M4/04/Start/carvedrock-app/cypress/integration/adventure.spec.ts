// describe('Adventure', () => {
//     it('should visit CarvedRock homepage', () => {
//         cy.visit('/');
//     });

//     it('should open the Breithorn adventure', () => {
//         cy.get('a[href="/adventure/1"]').click();
//         cy.get('#title').should('have.text', 'Breithorn, Pennine Alps');
//     });

//     it('should post a comment', () => {
//         cy.contains('Reset Comments').click();
//         cy.contains('Add Comment').click();

//         cy.get('#name').type('Josh');
//         cy.get('#comment-text').type('What a great adventure!');
//         cy.get('#add-comment-button').click();

//         cy.get('div[data-test-automation="user-comments"] blockquote:last-child p')
//             .should('have.text', 'What a great adventure!');

//         cy.get('div[data-test-automation="user-comments"] blockquote:last-child footer')
//             .should('have.text', 'Josh');

//         cy.get('div[data-test-automation="user-comments"] blockquote:last-child').then($el => {
//             cy.wrap($el).find('p').should('have.text', 'What a great adventure!');
//             cy.wrap($el).find('footer').should('have.text', 'Josh');
//         });
//     });

//     it('should not post a comment if the comment text is missing', () => {
//         cy.contains('Add Comment').click();

//         cy.get('#name').type('Josh');
//         cy.get('#add-comment-button').click();

//         cy.get('div[data-test-automation="comment-text"] .text-danger')
//             .should('have.text', 'Comment is required.');
//     });
// });

describe('Adventure', () => {
    it('should visit CravedRock homepage', () => {
        cy.visit('/');
    });

    it('shoudl open the breithron adventure', () => {
        cy.get('a[href="/adventure/1"]').click();
        cy.get('#title').should('have.text', 'Breithorn, Pennine Alps')
    });

    it('should post a comment', () => {
        cy.contains('Add Comment').click();

        cy.get('#name').type('Ramya');
        cy.get('#comment-text').type('What a trek');
        cy.get('#add-comment-button').click();

        cy.get('div[data-test-automation="user-comments"] blockquote:last-child p').
        should('have.text', 'What a trek');

        cy.get('div[data-test-automation="user-comments"] blockquote:last-child footer').
        should('have.text', 'Ramya');

        cy.get('div[data-test-automation="user-comments"] blockquote:last-child').then($el => {
            cy.wrap($el).find('p').should('have.text', 'What a trek');
            cy.wrap($el).find('footer').should('have.text', 'Ramya');
        })
    });

    it('should fail a post', () => {
        cy.contains('Add Comment').click();
        cy.get('#name').type('Ramya'); 
        cy.get('#add-comment-button').click();

        cy.get('div[data-test-automation="comment-text"] .text-danger').should('have.text','Comment is required.')
    });
})