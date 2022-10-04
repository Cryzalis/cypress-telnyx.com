import Pages from './pages'
const header = "main span strong";
class SipTrunksPage extends Pages{
    header(){
        return cy.get(header)
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