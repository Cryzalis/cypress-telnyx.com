/// <reference types="cypress" />
import MainPage from '../integration/pages/mainPage' 

describe('Telnyx main page UI and link', () => {
    beforeEach(() => {
      MainPage.navigate()
    })
  
    it('Check list of products', () => {
      MainPage.closeModal()
      MainPage.checkProducts()
    })

  })
  