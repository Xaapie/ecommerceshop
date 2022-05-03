// https://docs.cypress.io/api/introduction/api.html

describe("Login Page", () => {
  it("Check display of login form", () => {
    cy.visit("/login");
    cy.contains("h2", "New to our Shop?");
  });
});

describe("Register Page", () => {
  it("Check display of register form", () => {
    cy.visit("/register");
    cy.contains("h2", "Already have an account?");
  });
});

describe("Not Found Page", () => {
  it("Check display of 404 page", () => {
    cy.visit("/notfound");
    cy.contains("h2", "404 - Page not found");
  });
});

describe("Product Details", () => {
  it("Check if user don't choose flavour then display error", () => {
    cy.visit("/product-details/azQWsJYmSql830dqZsGs");
    cy.get(".add-to-cart").click();
    cy.get(".ant-alert-message").should("be.visible");
  });
});

describe("Shop Page", () => {
  it("Check if products displayed for the client", () => {
    cy.visit("/shop");
    cy.get(".popular-img").should("be.visible");
  });
});
