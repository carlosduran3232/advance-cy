///<reference types = "Cypress"/>

//Suite de Casos
describe('Primer conjunto de casos de prueba', function () {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    // beforeEach(() => {
    //     cy.visit('https://demoqa.com/tool-tips')
    // })
    //Casos 1
    it('Ingresar pagina principal y comtar la cantidad de elmentos', function () {
        cy.get('.product-layout').as('ProductosPopulares')
        cy.get('@ProductosPopulares').should('have.length', 4)
    })
    //Casos 2
    it('Agregar un producto desde la pagina principal', function () {
        // cy.get('.category-cards')
        // .find('.card-body')
        // .each(($el,index,$list) =>{
        //     if($el.attr('h5') === 'Elements'){
        //         cy.get('.category-cards').eq(index).contains('Elements').click({force: true})
        //     }
        // })

        cy.get('.card-body > h5').eq(3).contains("Widgets").click({ force: true })
        // cy.get('#user-name').type('standard_user')
        // cy.get('#password').type('secret_sauce')
        // cy.get('#login-button').click() 
    })

    //Casos 3
    it('flotando sobre un elemento, bueno para un menu y activar que se vea', function () {
        cy.visit('https://demoqa.com/tool-tips')
        // cy.get('.card-body > h5').eq(3).contains("Widgets").click({force: true})
        // cy.wait(1000)
        // cy.get('#item-6').click({force: true})

        //cy.get('#block_top_menu > ul > li:nth-child(1) > ul').invoke('attr', 'style', 'display: block')
        cy.get('#toolTipButton').should('contain.text', "Hover me to see");
        // cy.get('a[title="T-shirts"]').should('be.visible')
        // cy.get('a[title="Blouses"]').should('be.visible')
        // cy.get('a[title="Dresses"]').should('be.visible')
        // cy.get('a[title^="Casual"]').should('be.visible')
        // cy.get('a[title^="Evening"]').should('be.visible')
        // cy.get('a[title^="Summer"]').should('be.visible')
    })
    //Caso 4
    it('Check box', function () {
        cy.visit('https://demoqa.com/checkbox')
        cy.get('.rct-checkbox').eq(0).click({ force: true })
        // cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
        // cy.get('li[class="nomargin hiddable col-lg-6"]:has(a[href*="categories-casual_dresses"]) input').check().should('be.checked')
        // cy.get('li[class="nomargin hiddable col-lg-6"]:has(a[href*="categories-evening_dresses"]) input').should('not.be.checked')
        // cy.get('li[class="nomargin hiddable col-lg-6"]:has(a[href*="categories-summer_dresses"]) input').should('not.be.checked')
    })

    //Caso 5
    it('Drop down', function () {
        // cy.visit('https://demoqa.com/automation-practice-form')
        // cy.get('#selectProductSort').select('In stock').should('have.value', 'name:asc')

    })
    //Caso 6
    it.only('flujo completo', function () {
        cy.get('#search_query_top').type('Blouse')
        cy.get('#searchbox > .btn').click()
        cy.get('.product-container:has(.product-name[title="Blouse"]) .ajax_add_to_cart_button').click()
        cy.get('.button-medium[title="Proceed to checkout"]').click()
        cy.get('tr[id^=product]').find('.product-name > a').should('contain.text', 'Blouse')
        cy.get('tr[id^=product]').find('.price').should('contain.text', '27.00')
        cy.get('.cart_navigation > .button').click()
        cy.get('#email').type('cypress@ateneaconocimientos.net')
        cy.get('#passwd').type('Atenea')
        cy.get('#SubmitLogin').click()
        cy.get('.cart_navigation > .button').click()
        cy.get('#cgv').check().should('be.checked')
        cy.get('.cart_navigation > .button').click()
        cy.get('.bankwire').click()
        cy.get('.cart_navigation > .button').click()
        cy.get('.cheque-indent > .dark').should('contain.text', 'Your order on My Store is complete.')

    })
})



