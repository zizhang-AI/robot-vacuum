describe("Robot vacuum e2e test", () => {
  it("should display correct output", () => {
    cy.visit("/");
    cy.get('[data-cy="input"] textarea').first().type(`
      MOVE
      MOVE
      PLACE 5,5,NORTH
      PLACE 1,2,EAST
      MOVE
      MOVE
      LEFT
      MOVEn
      REPORT
    `);
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="output"]').should("contain", "3,3,NORTH");
  });
});
