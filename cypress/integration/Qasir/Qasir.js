describe('Cypress Testing Qasir Web', () => {
  before(() => {
    cy.visit('/', {failOnStatusCode: false});
  });

  it('verifies metadata', () => {
    cy.title().should('eq', 'Qasir | Aplikasi Kasir Lengkap Paling Terjangkau untuk Semua Jenis Usaha');
  });

  it('Check Button Sign up redirection', () => {
    cy.get('.div-block-96')
      .find('.primarybtn')
      .should('contain', 'Masuk')
      .click();

    cy.url().should('include', '/sign-in');
  });

  it('User Login', () => {

    cy.get('#sign-in-phonenumber')
      .type('81234072123');

    cy.get('#password')
      .type('140290');

    cy.get('#eye-close')
      .click();

    cy.get('#submit-btn-signin')
      .click();

    cy.get('#DashboardInstance', { timeout: 10000 }).should('be.visible');
  });

/*  it('Add Outlet', () => {
    cy.get(':nth-child(10) > a')
      .click({force: true});

    cy.wait(1000);

    cy.url().should('include', 'outlets');


  });
*/
  it('Edit and Save Profile', () => {
    //Test to Edit Nama Depan USer
    cy.get('.user-dropdown')
      .click();

    cy.get('.dropdown > .dropdown-menu > :nth-child(3)')
      .click();

    cy.get(':nth-child(3) > .col-md-8 > :nth-child(1) > :nth-child(1) > .form-group > .form-control')
      .type(' Edit');

    cy.get(':nth-child(3) > .col-md-8 > :nth-child(4) > .col-xs-12 > .form-group > .button')
      .click();


    //Test to Check Edited information
    cy.get('.user-dropdown')
      .click({force: true});

    cy.get('.dropdown > .dropdown-menu > :nth-child(3)')
      .click({force: true});

    cy.get('input').should('have.value', 'Puspita Edit');
  });
});
