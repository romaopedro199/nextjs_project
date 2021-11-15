/// <reference types="cypress" />

describe('Navigate', () => {
  it('Should test courses pagination', () => {
    cy.intercept(
      'GET',
      '/api/courses',
      {
        statusCode: 200,
        body: [
          {
            image: '/assets/png/course.png',
            lessons: 10,
            stars: [true, true, true, false, false],
            title: 'Request intercepted by Cypress'
          },
          {
            image: '/assets/png/course.png',
            lessons: 10,
            stars: [true, true, true, true, false],
            title: 'Request intercepted by Cypress'
          },
          {
            image: '/assets/png/course.png',
            lessons: 10,
            stars: [true, true, false, false, false],
            title: 'Request intercepted by Cypress'
          },
          {
            image: '/assets/png/course.png',
            lessons: 10,
            stars: [true, true, true, true, true],
            title: 'Request intercepted by Cypress'
          },
          {
            image: '/assets/png/course.png',
            lessons: 10,
            stars: [true, true, true, true, false],
            title: 'Request intercepted by Cypress'
          },
          {
            image: '/assets/png/course.png',
            lessons: 10,
            stars: [true, false, false, false, false],
            title: 'Request intercepted by Cypress'
          }
        ]
      }
    ).as('paginate')
    
    cy.visit('/dashboard')
    cy.wait('@paginate')
    cy.wait(1000)
    cy.scrollTo('bottom', { duration: 1000 })
    cy.wait(1000)
    cy.get('[data-cy=button-paginate]').click()
    cy.wait('@paginate')
  })

  it('Should test the responsive header', () => {
    cy.scrollTo('top', { duration: 1000 })
    cy.viewport('iphone-6')
    cy.get('[data-cy=link-my-classes]').should('have.css', 'display', 'none')
    cy.get('[data-cy=arrow-dropdown]').should('have.css', 'display', 'block')
    cy.get('[data-cy=arrow-dropdown]').click()
    cy.get('[data-cy=mobile-menu]').should('have.css', 'top', '64px')
  })
})
