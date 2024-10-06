/// <reference types="cypress" />

describe('checkout',()=>{
    it ('checkout_barang',()=>{
        cy.clearCookies()
        cy.clearAllLocalStorage()
        cy.visit('https://saucedemo.com/')    
    })
    it ('login', ()=>{
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce') 
        cy.get('#login-button').click()
        cy.get('.app_logo').should('exist')
        cy.get('[data-test="title"]').should('exist')
    })
    it ("add_to_cart",()=>{
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get ('.shopping_cart_link').click()
        cy.get('[data-test="title"]').should('exist')
        cy.get('[data-test="title"]').should('exist')
        
    })
    it ("add_checkout", ()=>{
        cy.get('[data-test="checkout"]').click()
        cy.get('.app_logo').should('exist')
        cy.get('[data-test="title"]').should('exist')
    })
    it ("your information", ()=>{
        cy.get('[data-test="firstName"]').type('test')
        cy.get('[data-test="lastName"]').type('test')
        cy.get('[data-test="postalCode"]').type('test')
        cy.get('[data-test="continue"]').click()
        cy.get('.app_logo').should('exist')
        cy.get('[data-test="title"]').should('exist')
    })
    it ("overview", ()=>{
        cy.get('[data-test="finish"]').click()
        cy.get('[data-test="title"]').should('exist')
        cy.get('[data-test="checkout-complete-container"]').should('exist')
    })
})
describe('remove-add-to-cart',()=>{
    it ('remove-add-to-cart',()=>{
        cy.clearCookies()
        cy.clearAllLocalStorage()
        cy.visit('https://saucedemo.com/')    
    })
    it ('login', ()=>{
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce') 
        cy.get('#login-button').click()
        cy.get('.app_logo').should('exist')
        cy.get('[data-test="title"]').should('exist')
    })

    it ('add-to-cart-order-detail', ()=>{
        cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').click()
        cy.get('[data-test="inventory-container"]').should('exist')
    })

    it('add-click-add-to-cart',()=>{
        cy.get('[data-test="add-to-cart"]').click()
        cy.get('[data-test="shopping-cart-badge"]').should('exist')
     })
       
    it ('click-icon-cart',()=>{
        cy.get('[data-test="shopping-cart-badge"]').click()
        cy.get('[data-test="cart-list"]').should('exist')
       
    })

    it ('remove-to-cart',()=>{
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[data-test="cart-contents-container"]').should('exist')
    })
    it ('continue-shopping',()=>{
        cy.get('[data-test="continue-shopping"]').click()
        cy.get('.app_logo').should('exist')
        cy.get('[data-test="title"]').should('exist')
        cy.get('[data-test="inventory-container"]').should('exist')
    })

})