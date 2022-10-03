class SipTrunksPage{
    navigate(){
        cy.visit('/products/sip-trunks')
    }
    header(){
        return cy.get("main span strong")
    }
    secondTab(){
        return cy.get("[role='tab']").eq(1)
    }
    textAfterTabs(){
        return this.secondTab().parent().parent().next().next().find('p')
    }
    blockNetwork(){
        return cy.get("main ul li img").parents('li')
    }
    
    clickToSecondTab(){
        this.secondTab().click({force: true})
    }




}
module.exports = new SipTrunksPage()