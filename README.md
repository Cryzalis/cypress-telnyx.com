# cypress-telnyx.com
Several automatic tests on Cypress(JavaScript) for the site: [telnyx.com](https://telnyx.com/). It check ability to log in, and few another pages.
### Сontent
- [Technology](#Technology)
- [Usage](#Usage)
- [Requirements](#Requirements)
- [File structure](#file-structure)
- [Test structure](#test-structure)
- [Testing](#Testing)
- [To do](#to-do)

### Technology
- [Cypress](https://docs.cypress.io/)

### Usage
- Download project
- Go to root folder
- Install the npm package with the command:

```
$ npm install
```

### Requirements
 :exclamation: To install and run the project, you need [NodeJS](https://nodejs.org/) v14+.

### File structure
- cypress   
    - downloads   
    - e2e 
        - contact-us.cy.js 
        - login.cy.js
        - main.cy.js
        - sip-trunks.cy.js
        - solution-customer.cy.js
    - fixtures  
    - integration  
        - pages
            - contactUsPage.js
            - loginPage.js
            - mainPage.js
            - pages.js
            - sipTrunksPage.js
            - solutionCustomerPage.js
    - screenshots  
    - support  
    - videos

`e2e` folder contains spec files
`pages` folder contains Page Object Model files
 ### Test structure
Cypress has adopted Mocha's bdd syntax. Example below, for details use the [official documentation](https://docs.cypress.io/guides/references/bundled-libraries#Mocha)
```js
describe('Telnyx login', () => {//Title block of tests
    it('Login with invalid data', () => {//Individual test title 
      LoginPage.login('example@gmail.com','password')//directly test
      LoginPage.checkError()
    })
})
```
### Testing
To run tests in the headless mod in the root directory, execute
```
npm run test
```
To open the cypress graphic interface
```
npm run cypress
```
### To Do
:white_large_square: write a normal readme

:white_large_square: rewrite everything