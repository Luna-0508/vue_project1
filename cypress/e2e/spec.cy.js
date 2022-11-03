describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });
});

describe("My Second Test", () =>
  it("should type todo", () => {
    cy.visit("http://127.0.0.1:5173/todolist");

    cy.get("#todo").type("EXAMPLE");

    cy.get("#button").click();
  }));
