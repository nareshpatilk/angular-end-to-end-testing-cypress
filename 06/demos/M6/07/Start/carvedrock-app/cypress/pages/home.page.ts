import { AdventureDetailsPage } from "./adventure-details.page";

export class HomePage {

  visit(): HomePage {
    cy.visit('/');
    return this;
  }

  clickMoreDetailsBtn(adventureId: Number): AdventureDetailsPage {
    cy.get(`a[href="/adventure/${adventureId}"]`).click();
    return new AdventureDetailsPage;
  }
}