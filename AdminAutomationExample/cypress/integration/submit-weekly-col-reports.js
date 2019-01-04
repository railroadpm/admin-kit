const config = require('../../config');
require('../../NewWeek.toml'); // This simple TOML has the advantage of being valid JavaScript assignment statements in global scope
const { _ } = Cypress;

describe('RPM Admin', () => {
  it('accepts a valid login and a new set of weekly COL data to publish', () => {
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
      cy.wait(100);
      cy.wrap($body)
        .find('.form button[type="submit"]')
        .click();
    });

    cy.wait(500);

    cy.url().should('include', '/collections');
    cy.get('div')
      .contains('Loading configuration')
      .should('not.exist');
    cy.get('.nc-user-role-is-admin');

    ['BNSF', 'CN', 'KCS', 'NS', 'UP', 'AOR'].forEach(Railroad => {
      let rrFullName = Railroad;
      if (Railroad === 'AOR') {
        rrFullName = 'All Other Railroads';
      }

      // Click the left nav link that loads the Weekly Reports for this Railroad
      cy.get(`.nc-app-sidebar-nav-link-reports_${Railroad.toLowerCase()}`).click();

      cy.get('div')
        .contains('Loading Reports')
        .should('not.exist');

      // Open the Quick add dropdown in the toolbar...
      cy.get('.nc-app-header-quick-add')
        .should('be.visible')
        .click();

      // ...and click the option for this Railroad
      cy.contains(`${rrFullName} Weekly Report`).click();

      // Fill in data fields from global variables
      // (TOML was executed as JavaScript assignment statements in global scope via "require" above)
      cy.url()
        .should('include', '/reports')
        .then(() => {
          _(global)
            .keys()
            .filter(key => key.startsWith('WeekEnding') || key.startsWith(`${Railroad}_`))
            .each(key => {
              let id = key;
              if (id.startsWith(`${Railroad}_`)) id = id.substring(Railroad.length + 1); // strip RR prefix for actual input id
              let value = global[key];
              cy.get(`[id^=${id}]`) // See: https://github.com/cypress-io/cypress/issues/1171#issuecomment-364059485
                .invoke('attr', 'type', 'text')
                .type(value);
            });
        });

      // Submit new report
      cy.get('.nc-app-editor-btn-save').click();

      // Wait for changes to be saved
      cy.contains('Report saved');

      cy.contains('Changes saved').click();
    });

    // Log out
    cy.get('.nc-app-avatar-menu').click();
    cy.contains('Log Out').click();

    // Wait for login to be displayed again before considering the submission complete
    cy.contains('Login');
  });
});
