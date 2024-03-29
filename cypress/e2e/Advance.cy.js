/// <reference types="Cypress"/>
 
// Suite de casos de pruebas avanzadas
describe('Tercer feature de casos avanzados', function () {
    before(function () {
        //Cargamos los valores del archivo example.json en un objeto de datos
        cy.fixture('carritoDeCompras').then(function (datos) {
            this.datos = datos
        })
    })
    beforeEach(() => {
        //ingresar a la pagina de compra de articulos tecnologicos
        cy.visit("https://demo.opencart.com/index.php")
    })
    //alert alert-success alert-dismissible
    //Caso 7
    it('Realizar compra de celulares basadas en su titulo', function () {
        cy.get("#menu ul a:contains('Phones & PDAs')").click()
        cy.agregarElementoAlCarrito(this.datos.telefono1)
        cy.agregarElementoAlCarrito(this.datos.telefono2)
        cy.agregarElementoAlCarrito(this.datos.telefono3)
 
        // cy.get('.btn-inverse').click()
 
        // cy.verificamosElementoEnCarritoDD(this.datos.telefono1)
        // cy.verificamosElementoEnCarritoDD(this.datos.telefono2)
        // cy.verificamosElementoEnCarritoDD(this.datos.telefono3)
 
    })
})