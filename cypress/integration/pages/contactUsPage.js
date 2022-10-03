class contactUs{
    navigate(){
        cy.visit('/contact-us')
    }
    header(){
        return cy.get("header h1")
    }
    inputName(){
        return cy.get('#FirstName')
    }
    inputLastName(){
        return cy.get('#LastName')
    }
    inputEmail(){
        return cy.get('#Email')
    }
    selectReason_for_Contact__c(){
        return cy.get('#Reason_for_Contact__c')
    }
    inputWebsite(){
        return cy.get('#Website')
    }
    buttonSubmit(){
        return cy.get('form button')
    }
    alertMessage(){
        return cy.get("form [role='alert']")
    }
    clickButtonSubmit(){
        this.buttonSubmit().click()
    }
    typeToForm(name,lastname,email,site){
        this.selectReason_for_Contact__c().select('Support')
        this.inputName().type(name).should('have.value', name)
        this.inputLastName().type(lastname).should('have.value', lastname)
        this.inputEmail().type(email).should('have.value', email)
        this.inputWebsite().type(site).should('have.value', site)
    }
    

}
module.exports = new contactUs()