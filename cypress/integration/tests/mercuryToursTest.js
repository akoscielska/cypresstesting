/// <reference types="cypress" />

import {navigateToSite, clickRegisterPage} from '../../page-objects/mainPage'
import {registerNewAccount} from '../../page-objects/registerPage'


describe('Test',() => {
    it('Navigate to the site',() => {
        navigateToSite()
    })
    it('Go to Register tab', () => {
        clickRegisterPage()
    })
    it('Register new account',() => {
        registerNewAccount('zajaczek')
    })
})

