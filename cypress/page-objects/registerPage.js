/// <reference types='cypress' />

//Contact Information
const firstName='[name="firstName"]'
const lastName='[name="lastName"]'
const phone='[name="phone"]'
const email='[name="userName"]'
//Mailing Information
const address='[name="address1"]'
const city='[name="city"]'
const stateProvince='[name="state"]'
const postalCode='[name="postalCode"]'
const countryList='[name="country"]'
//User Information
const userName='[name="email"]'
const password='[name="password"]'
const confirmPassword='[name="confirmPassword"]'
//Submit button
const submitButton='[name="register"]'


export function registerNewAccount(){

    cy.fixture('registerAccount').then((registerAccount) => {

        writeDown(firstName, registerAccount.firstName)
        writeDown(lastName, registerAccount.lastName)
        writeDown(phone, registerAccount.phone)
        writeDown(email, registerAccount.email)
        writeDown(address, registerAccount.address)
        writeDown(city, registerAccount.city)
        writeDown(stateProvince, registerAccount.stateProvince)
        writeDown(postalCode, registerAccount.postalCode)
        
        cy.get(countryList).select(registerAccount.country)

        writeDown(userName, registerAccount.userName)
        writeDown(password, registerAccount.password)
        writeDown(confirmPassword, registerAccount.confirmPassword)
    })
    
    cy.get(submitButton).click()
}

function writeDown(inputform, inputValue){
    return cy.get(inputform).type(inputValue) 
}
