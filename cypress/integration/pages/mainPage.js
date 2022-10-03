class MainPage{
    navigate(){
        cy.visit('/')
    }
    closeModal(){
        cy.get("button[aria-label='close and deny']").click()
    }
    checkProducts(){
        cy.get('main ul:nth-child(2) li').each(($el) => {
              cy.wrap($el).find('h3').should('be.visible')
              cy.wrap($el).find('div+p').should('be.visible')
              cy.wrap($el).find('a').should('have.attr','href')
        })
    }

}
module.exports = new MainPage()