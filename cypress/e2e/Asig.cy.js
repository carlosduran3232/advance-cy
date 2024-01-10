///<reference types = "Cypress"/>

//Suite de Casos

describe('Casos', function () {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })
    before(function() {
       //cargamos los datos que vienen de fixture
       cy.fixture('example').then(function(datos){
        this.datos = datos
        cy.log(datos.name)

       })
    })
    beforeEach(() => {
       
        cy.visit('https://demoqa.com/automation-practice-form')
    })
   
    it('llenamos formulario ', function () {
        cy.get('#firstName').type(this.datos.name)  
        cy.get('#lastName').type(this.datos.lastname)
        cy.get('#userEmail').type(this.datos.email)  
        cy.get('input[name="gender"][value="' +this.datos.sexo+'"]').click({ force: true }).should('be.checked')
        cy.get('#userNumber').type(this.datos.phone)  
        cy.get('#dateOfBirthInput').click()
        cy.get('.react-datepicker__month-select').should('be.visible').select(this.datos.date[0])
        cy.get('.react-datepicker__year-select').should('be.visible').select(this.datos.date[1])
        cy.get('.react-datepicker__day--0' + this.datos.date[2]).should('be.visible').click()
        cy.get('#dateOfBirthInput')
        .should('contain.value',this.datos.date[0].substring(0,3))
        .should('contain.value',this.datos.date[1])
        .should('contain.value',this.datos.date[2])
        cy.get('.subjects-auto-complete__value-container').type(this.datos.materia)
        cy.get('div[id^="react-select-"]').click()
        cy.get('.subjects-auto-complete__value-container').should('contain.text',this.datos.materia)
        cy.get("div[class='custom-control custom-checkbox custom-control-inline']:has(label:contains('" + this.datos.hobbies[0] + "')) input").check({ force: true }).should('be.checked')
        cy.get("div[class='custom-control custom-checkbox custom-control-inline']:has(label:contains('" + this.datos.hobbies[1] + "')) input").check({ force: true }).should('be.checked')
    })
})

