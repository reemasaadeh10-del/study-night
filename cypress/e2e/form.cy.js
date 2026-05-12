describe("Form Tests" , () => {
    describe("Create Set Form" , () => {
        beforeEach (()=> {
        cy.visit("http://localhost:1234");
        cy.get("#cardSetPage").click();
        cy.get('[data-cy="toggle_form"]').first().click();
        });

        it("should create a card set with valid input" , () => {
        cy.get('[data-cy="set_form"] input[name="titleInput"]').type("My New Set");
        cy.get('[data-cy="set_form"] input[type="submit"]').click();
        cy.get('[data-cy="study-set-header"]').should("be.visible");
        });

        it("should show error when submitting empty title" , () => {
        cy.get('[data-cy="set_form"] input[type="submit"]').click();
        cy.get(".error").should("be.visible");
        cy.get(".error").should("contain", "TITLE CANNOT BE EMPTY");
        });
    });

    describe("Add Card Form" , () => {
        beforeEach (()=> {
        cy.visit("http://localhost:1234");
        cy.get("#cardSetPage").click();
        cy.get('[data-cy="1"]').click();
        cy.get('[data-cy="toggle_form"]').first().click();
        });

        it("should add a card set with valid input" , () => {
        cy.get('[data-cy="card_form"] input[name="termInput"]').type("Test Term");
        cy.get('[data-cy="card_form"] input[name="descriptionInput"]').type("Test Description");
        cy.get('[data-cy="card_form"] input[type="submit"]').click();
        cy.get(".term").should("be.visible");
        });

        it("should show error when submitting empty card form" , () => {
        cy.get('[data-cy="set_form"] input[type="submit"]').click();
        cy.get(".error").should("be.visible");
        cy.get(".error").should("contain", "TERM AND DESCRIPTION CANNOT BE EMPTY");
        });
    });


});