/// <reference types="cypress" />

describe('Navigate', () => {
  before(() => {
    cy.visit('/')
  })

  it('Should test the responsive header', () => {
    cy.viewport('iphone-6')
    cy.get('[data-cy=button-open-menu]').should('have.css', 'display', 'flex')
    cy.get('[data-cy=button-open-menu]').click()
    cy.get('[data-cy=menu]').should('have.css', 'left', '0px')
  })

  it('Should test forms navigation', () => {
    cy.get('[data-cy=button-open-modal]').click()
    cy.get('[data-cy=modal-login]').should('have.css', 'opacity', '1')
    cy.get('[data-cy=input-username]').type('testingUser')
    cy.get('[data-cy=input-password]').type('testingPassword')
    cy.get('[data-cy=button-show-password]').click()
    cy.get('[data-cy=input-password]').invoke('attr', 'type').should('eq', 'text')
    cy.wait(1000)
    cy.get('[data-cy=button-close-modal]').click()
    cy.wait(1000)
    cy.get('[data-cy=input-search]').type('searching for a course')
    cy.get('[data-cy=checkbox-student]').click()
    cy.scrollTo('top', { duration: 500 })
  })
})
