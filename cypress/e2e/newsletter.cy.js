describe("Funcionalidad de newsletter",() =>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/')
      })

      it("Permite al usuario suscribirse",()=>{
        cy.getByData("email-input").type("carlos@gmail.com").click()
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("exist").contains("carlos@gmail.com")
      })

      it("No Permite al usuario suscribirse",()=>{
        cy.getByData("email-input").type("carlo").click()
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("not.exist")
      })

      it.only("Uauario ya existe",()=>{
        cy.getByData("email-input").type("john@example.com").click()
        cy.getByData("submit-button").click()
        cy.getByData("server-error-message").should("exist").contains("Error: john@example.com already exists. Please use a different email address.")
      })
})