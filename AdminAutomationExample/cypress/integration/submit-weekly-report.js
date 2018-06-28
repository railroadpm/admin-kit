const config = require('../../config');
require('../../NewWeek.toml');
const { _ } = Cypress;

describe('RPM Admin', () => {
  it('accepts a valid login and a new set of weekly data to publish', () => {
    cy.visit('/');
    cy.contains('Login with Netlify Identity').click();

    cy.get('#netlify-identity-widget').then($iframe => {
      const $body = $iframe.contents().find('body');

      // Log in btn at top
      cy.wrap($body)
        .find('button.btnHeader:nth-of-type(2)')
        .click();

      cy.wrap($body)
        .find('input[name="email"]')
        .type(config.username);
      cy.wrap($body)
        .find('input[name="password"]')
        .type(config.password);

      // Log in to Netlify Identity
      cy.wrap($body)
        .find('.form button[type="submit"]')
        .click();
    });

    cy.url().should('include', '/collections');
    cy.contains('Quick add').click();

    if (Railroad === 'AOR') {
      // Ensure correct option is pressed for AOR
      Railroad = 'All Other Railroads';
    }

    cy.contains(Railroad).click();

    // Fill in data fields from file
    cy.url()
      .should('include', '/reports')
      .then(() => {
        _(global)
          .keys()
          .filter(key => key.startsWith('Title') || key.startsWith('CarsOnLine_') || key.startsWith('TrainSpeed_') || key.startsWith('TerminalDwell_'))
          .each(key => {
            let value = global[key];
            cy.get(`[id^=${key}]`)
              .invoke('attr', 'type', 'text')
              .type(value);
          });
      });

    // Publish new report to site
    cy.contains('Publish').click();
    cy.contains('Publish now').click();
  });
});
