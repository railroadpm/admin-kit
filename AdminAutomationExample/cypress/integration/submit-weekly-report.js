const config = require('../../config');
require('../../NewWeek.toml'); // This simple TOML has the advantage of being valid JavaScript assignment statements in global scope
const { _ } = Cypress;

describe('RPM Admin', () => {
  it('accepts a valid login and a new set of weekly data to publish', () => {
    cy.visit('/');
    // Click main "Login" button
    cy.contains('Login').click();

    cy.get('#netlify-identity-widget').then($iframe => {
      const $body = $iframe.contents().find('body');

      // Select "Log in" tab instead of "Sign up"
      cy.wrap($body)
        .find('button.btnHeader:nth-of-type(2)')
        .click();

      // Log in to Netlify Identity
      cy.wrap($body)
        .find('input[name="email"]')
        .type(config.username);
      cy.wrap($body)
        .find('input[name="password"]')
        .type(config.password);
      cy.wrap($body)
        .find('.form button[type="submit"]')
        .click();
    });

    cy.url().should('include', '/collections');
    cy.get('div')
      .contains('Loading configuration')
      .should('not.exist');
    cy.get('.nc-user-role-is-participant');
    cy.get('.nc-app-header-quick-add')
      .should('be.visible')
      .click();

    if (Railroad === 'AOR') {
      // Ensure correct option is pressed for AOR
      Railroad = 'All Other Railroads';
    }

    cy.contains(Railroad).click();

    // Fill in data fields from TOML file
    // (TOML was executed as JavaScript assignment statements in global scope via "require" above)
    cy.url()
      .should('include', '/reports')
      .then(() => {
        _(global)
          .keys()
          .filter(key => key.startsWith('WeekEnding') || key.startsWith('TrainSpeed_') || key.startsWith('TerminalDwell_'))
          .each(key => {
            let value = global[key];
            cy.get(`[id^=${key}]`)
              .invoke('attr', 'type', 'text')
              .type(value);
          });
      });

    // Submit new report
    cy.get('.nc-app-editor-btn-save').click();

    // Wait for changes to be saved
    cy.contains('Report saved');

    // Log out
    cy.get('.nc-app-avatar-menu').click();
    cy.get('.nc-app-avatar-logout-btn').click();
    cy.contains('Login');
  });
});
