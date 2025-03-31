import { html, fixture, expect } from '@open-wc/testing';
import "../campus-card-list.js";

describe("CampusCardList test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <campus-card-list
        title="title"
      ></campus-card-list>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
