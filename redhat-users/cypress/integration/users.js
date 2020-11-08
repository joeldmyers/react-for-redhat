describe("Check Users Page", function () {
  it("navigates to the users page and checks content loads", function () {
    cy.visit("https://react-for-redhat.vercel.app/");
    cy.contains("Users");
    cy.contains("Patricia Lebsack").click();
    cy.contains("Multi-tiered zero tolerance productivity");
    cy.visit("https://react-for-redhat.vercel.app/users/2");
    cy.contains("Proactive didactic contingency");
  });
});
