import {
  describeWithToken,
  popover,
  restore,
  signInAsAdmin,
} from "__support__/cypress";

describeWithToken("scenarios > admin > databases > add", () => {
  beforeEach(() => {
    restore();
    signInAsAdmin();
    cy.server();
  });

  describe("EE should ship with Oracle and Vertica as options", () => {
    cy.visit("/admin/databases/create");

    cy.contains("Database type")
      .parents(".Form-field")
      .find(".AdminSelect")
      .click();

    it("should have Oracle as an option", () => {
      popover().contains("Oracle");
    });

    it("should have Vertica as an option", () => {
      popover().contains("Vertica");
    });
  });
});
