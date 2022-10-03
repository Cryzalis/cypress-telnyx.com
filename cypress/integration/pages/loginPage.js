class LoginPage{
    navigate(){
        cy.visit('https://portal.telnyx.com/')
    }
    inputEmail(){
        return cy.get("form[aria-label='loginForm']  input[name='email']")
    }
    inputPassword(){
        return cy.get("form[aria-label='loginForm']  input[name='password']")
    }
    buttonLogin(){
        return cy.get("form[aria-label='loginForm']  button")
    }
    errorMessage(){
        return cy.get("div[type='error'] div[type='error']")
    }

    login(email,password){
        this.inputEmail().clear().type(email,{ force: true})
        this.inputPassword().clear().type(password,{ force: true})
        this.buttonLogin().click({ force: true})
    }
    checkError(){
        this.errorMessage().should('be.visible')
    }


}
module.exports = new LoginPage()