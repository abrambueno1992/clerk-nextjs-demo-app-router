describe("Signed out", () => {
  // beforeEach(() => {
  //   cy.signOut();
  // });

  it("should navigate to the  in a signed out state", () => {
    // open  page
    cy.signIn();
    cy.visit("http://localhost:3000/");

    // check h1 says signed out
    cy.get("h1").contains("Signed out");
  });

  it("navigate to the  signed in", () => {
    cy.signIn();

    // open  page
    cy.visit("http://localhost:3000/");

    // check h1 says signed in
    cy.get("h1").contains("Signed in");
  });

  it("should navigate to the ssr page in a signed out state", () => {
    // open  page
    cy.visit("http://localhost:3000/-ssr", {
      failOnStatusCode: false,
    });

    // check h1 says signed in
    cy.get("h1").contains("Signed out");
  });
});

describe("Signed in", () => {
  beforeEach(() => {
    cy.session("signed-in", () => {
      cy.signIn();
    });
  });

  it("navigate to the ", () => {
    // open  page
    cy.visit("http://localhost:3000/");

    // check h1 says signed in
    cy.get("h1").contains("Signed in");
  });

  it("SSR: navigate to the ssr ", () => {
    // open  page
    cy.visit("http://localhost:3000/-ssr", {
      failOnStatusCode: false,
    });

    // check h1 says signed in
    cy.get("h1").contains("Signed in");
  });
});
