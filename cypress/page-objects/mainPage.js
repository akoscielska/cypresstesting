/// <reference types='cypress' />

const url = 'http://newtours.demoaut.com/'
const signInTab = 'SIGN-ON'
const registerTab = 'REGISTER'
const supportTab = 'SUPPORT'
const contactTab = 'CONTACT'

export function navigateToSite(){
    cy.visit(url)
    cy.contains(signInTab).should('be.visible')
    cy.contains(registerTab).should('be.visible')
    cy.contains(supportTab).should('be.visible')
    cy.contains(contactTab).should('be.visible')
}

export function clickRegisterPage(){
    cy.contains(registerTab).click()
    cy.contains('Contact Information').should('be.visible')
    cy.contains('Mailing Information').should('be.visible')
    cy.contains('User Information').should('be.visible')

}