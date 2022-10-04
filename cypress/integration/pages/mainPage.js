import Pages from './pages'

const products = 'main ul:nth-child(2) li'
class MainPage extends Pages{
    
    checkProducts(){
        cy.get(products).each(($el) => {
              cy.wrap($el).find('h3').should('be.visible')
              cy.wrap($el).find('div+p').should('be.visible')
              cy.wrap($el).find('a').should('have.attr','href')
        })
    }
}
module.exports = new MainPage()