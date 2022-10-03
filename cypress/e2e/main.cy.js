/// <reference types="cypress" />
import MainPage from '../integration/pages/mainPage' 

describe('Telnyx main page', () => {
    beforeEach(() => {
      MainPage.navigate()
    })
  
    it('Check list of products', () => {
      MainPage.closeModal()
      MainPage.checkProducts()
    })

  })
  