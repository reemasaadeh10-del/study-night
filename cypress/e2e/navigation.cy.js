describe("Navigation Tests" , () => {
    beforeEach (()=> {
        cy.visit("http://localhost:1234");
    });

    it("should navigate to card sets page" , () => {
        cy.get("#cardSetPage").click();
        cy.get('[data-cy="study-set-header"]').should("be.visible");
    });

    it("should navigate to About page" , () => {
        cy.get("#aboutPage").click();
        cy.get('[data-cy="about_page"]').should("be.visible");
    });

    it("should navigate to Home page" , () => {
        cy.get("#aboutPage").click();
        cy.get("#homePage").click();
        cy.get('[data-cy="home_header"]').should("be.visible");
    });

});