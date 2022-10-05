# cypress-telnyx.com
Several automatic tests on Cypress(JavaScript) for the site: [telnyx.com](https://telnyx.com/)
### Сontent
- [Technology](Technology)
- [Usage](Usage)
- [Requirements](Requirements)
- [File structure](File_structure)
- [Testing](Testing)
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

### File_structure
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
 

### Testing
To run tests in the headless mod in the root directory, execute
```
npm run test
```
To open the cypress graphic interface
```
npm run cypress
```