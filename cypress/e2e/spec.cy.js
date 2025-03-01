describe("template spec", () => {
  it("passes", () => {
    cy.visit(" http://192.168.1.5:3000");
    cy.contains("Weather Application");
    cy.get(".form-control").type("Hyderabad {enter}");
    cy.contains("Hyderabad").should("be.visible");
    cy.contains("lo").should("be.visible");
    cy.contains("Cloud").should("be.visible");
    cy.contains("Temperature").should("be.visible");
    cy.contains("Wind").should("be.visible");
    cy.contains("Humidity").should("be.visible");
  });
});

describe("template spec", () => {
  it("shows an error for an invalid city", () => {
    cy.visit("http://192.168.1.5:3000");
    cy.get(".form-control").type("InvalidCityName{enter}");
    cy.contains("city not found").should("be.visible");
  });
});
