describe('home spec', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  context("Seccion inicial", () => {
    it('passes', () => {
      cy.getByData("hero-heading").contains("Testing Next.js Applications with Cypress")
    })

    it('verificamos las caracteristicas', () => {
      cy.wait(500)
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })
  })

  context("Seccion Curso", () => {
    it("Curso:Testing your first next", () => {
      cy.getByData("course-0").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/testing-your-first-application")
    })
 
     it("Curso:Testing your Second next", () => {
      cy.getByData("course-1").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/testing-foundations")
  })

      it("Curso:Testing your third next", () => {
      cy.getByData("course-2").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/cypress-fundamentals")
  })
})
})

class GenerateBookingRequest {
    
    /////////////////////////Generate paso 1/////////////////

    getCheckGenerate(){
        return cy.get('#mat-slide-toggle-1-input');
    }
    getCheckPo() {
        return cy.get('[type="checkbox"]');
    }
    getSelectBusinnessUnitSodimac() {
        return cy.get('#business-unit').select('Sodimac');
    }
    getSelectBusinnessUnitFalabella() {
        return cy.get('#business-unit').select('Falabella');
    }
    getSelectBusinnessUnitTottus() {
        return cy.get('#business-unit').select('Tottus');
    }
    getSelectBusinnessUnitIkea() {
        return cy.get('#business-unit').select('Ikea');
    }
    getInputFolderNumber(){
        return cy.get('#folderNumber');
    }
    getVendorCorporate(){
        return cy.get('#corporate-vendor').select('64 - Plasticos rimax s.a.s.');
    }
    getSelectFreightMode() {
        return cy.get('#transport-way').select('Sea');
    }
    getSelectCountryOfLoading() {
        return cy.get('#COL').select('(CL) Chile');
    }
    getSelectCountryDestiny() {
        return cy.get('#POD').select('(CL) Chile');
    }
    getSelectPortOfLoading() {
        return cy.get('#portPOL').select('(VAP) Valparaiso');
    }
    getSelectPortOfDestiny() {
        return cy.get('#portPOD').select('(SAI) San Antonio');
    }
    getInputCOLCambioPol(){
        return cy.get('#mat-input-1').click().clear().type('chile');
    }
    getInputCOLCambioPolReturn(){
        return cy.get('#mat-input-3').click().clear();
    }
    getClearInputCol(){
        return cy.xpath('(//input[@type="text"])[5]').click().clear().tab();    
    }
    getInputPOLCambioPol(){
        return cy.xpath('(//input[@type="text"])[6]').click().clear().tab();
    }
    getSeleccionDeCol(){
        return cy.xpath('//span[contains(text(),"(CL) Chile")]').click();
    }
    getSeleccionDePol(){
        return cy.xpath('//span[contains(text(),"(CO) Colombia")]').click();
    }
    requiredBu(){
         return cy.get('.mb-2 > :nth-child(1) > div.ng-tns-c174-1 > .mb-0').should('be.visible');
    }  
    getPurchaseOrderNumberLabel() {
        return cy.xpath('(//app-search-purchase-order-details/div/div/div/div/div/label)[1]');
    }
    getPurchaseOrderNumberInput() {
        return cy.get('#poListSelected');
    }
    getBookingRequestStatusSelect() {
        return cy.xpath('//app-filter-search-booking-request/div/div/div/div/div/shipment-multi-select-dropdown');
    }
   
    /////////////////////////Generate paso 2/////////////////

    getInputInformedQuantity1() {
        return cy.xpath('(//app-input-informed-quantity/div/input)[1]');
    }
     getInputInformedQuantity2() {
        return cy.xpath('(//app-input-informed-quantity/div/input)[2]');
    }
    getInputInformedQuantity3() {
        return cy.xpath('(//app-input-informed-quantity/div/input)[3]');
    }
    getInputInformedQuantity4() {
        return cy.xpath('(//app-input-informed-quantity/div/input)[4]');
    } 
    getCargaDocument() {
        return cy.get('input[type=file]').selectFile('cypress/fixtures/carga-informed-Quantity.xls', { force: true })
    }


    /////////////////////////Generate paso 3/////////////////

    getGoodsDescription(){
        return cy.get('input[name="description"]');
    }
    getContainer40STD(){
        return cy.get('input[id="40STD"]');
    }
    getContainer20STD(){
        return cy.get('input[id="20STD"]');
    }
    getSelectPackageType(){
        return cy.get('#packageType').select('Cartons');
    }
    getHsCode(){
        return cy.get('#mat-input-0')
    }
    getModalRequiredGoodsDescription() {
        return cy.get('div > h6').should('contain.text', "- Goods Description");
    }
    getModalRequiredInvalidPackageQuantity() {
        return cy.get('div > h6').should('contain.text', "- Invalid Package Quantity");
    }
    getModalRequiredInvalidPackageType() {
        return cy.get('div > h6').should('contain.text', "- Invalid Package Type");
    }
    getModalRequiredInvalidContainerQuantity() {
        return cy.get('div > h6').should('contain.text', "- At least one Container Quantity");
    }
    getModalRequiredInvalidHsCode() {
        return cy.get('div > h6').should('contain.text', "- HS Code");
    }
    getModalHsCodeMasivo() {
        return cy.xpath('//textarea');
    }
    getEliminarIndividual(){
        return cy.get('td > span').should('contain.text', "delete_outline");
    }

     /////////////////////////Metodos Generate paso 1/////////////////
    
    inputPo(){
        this.getPurchaseOrderNumberInput().type('7001');
    }
    inputPoInformed(){
        this.getPurchaseOrderNumberInput().type('4547');
    }
    clearInputPo(){
        this.getPurchaseOrderNumberInput().clear();
    }
    inputPoMultiples(){
        this.getPurchaseOrderNumberInput().type('7001 4547');
    }
    inputPoInvalid(){
        this.getPurchaseOrderNumberInput().type('374637');
    }
    inputPoInvalidMultiple(){
        this.getPurchaseOrderNumberInput().type('7001,44712226');
    }
    inputFolder(){
        this.getInputFolderNumber().type('03743CLIK/7001IKE');
    }
    inputFolderMultiple(){
        this.getInputFolderNumber().type('03743CLIK/7001IKE 01217CLIK/21IKE');
    }
    filtersByPo() {
        this.getPurchaseOrderNumberInput().clear();
        this.getPurchaseOrderNumberInput().type(332);
        this.getSearchButton().click();
    }
    cardImports() {
        this.getCardImports().should('be.visible');
    }
    nextButton() {
        this.getNextButton().should('be.visible').click({ force: true });
    }
    nextButton(){
        this.getNextButtonPass2
    }
    getSaveModalPol(){
        this.getSave().click({ force: true });
    }
    // checkPo(){
    //     this.getCheckPo().check().click({ force: true });
    // }
    getOkModal(){
        this.getBookingModalOk().click({ force: true });
    }
    getOkModalConsignee(){
        this.getBookingModalOkConsignee().click({ force: true });
    }
    getModalOkConfirmBr(){
        this.getBookingModalOkConfirmacionBR().click({ force: true });
    }

  
    /////////////////////////Metodos Generate paso 2/////////////////
    
    inputInformedQuantity1() {
        this.getInputInformedQuantity1().type(5);
    }
     inputInformedQuantity2() {
        this.getInputInformedQuantity2().type(5);
    }
    inputInformedQuantity3() {
        this.getInputInformedQuantity3().type(5);
    }
    inputInformedQuantity4() {
        this.getInputInformedQuantity4().type(5);
    } 
     /////////////////////////Metodos Generate paso 3/////////////////
     
     inputGoodsDescription(){
        this.getGoodsDescription().type('prueba regresion automatizada');
    }
    inputContainer40STD(){
        this.getContainer40STD().type(2);
    }
    inputContainer20STD(){
        this.getContainer20STD().type(1);
    }
    inputHsCode(){
        this.getHsCode().type(820320);
    }
    seleccionHsCode(){
        return cy.xpath('//span[contains(text()," 820320 ")]').should('be.visible').click();
    }
    getEliminarHsCode(){
        this.getEliminarIndividual().click();
    }

    /////////////////////////Modales/////////////////

     getMessageModalPurchaseInvalid() {
        return cy.get('div > h6').should('contain.text', "Purchase Order List Not Found");
    }
    getMessageModal() {
        return cy.get('div > h6').should('contain.text', "Purchase Order List Not Found");
    }
    getModalConsigneeSinSeleccionPo(){
        return cy.get('div > h6').should('contain.text','There are no purchase orders selected');
    }
    getModalConsigneeMultiplePo(){
        return cy.get('div > p').should('contain.text',' Here you can update the consignee of the Purchase Order number 7001, 4547 ');
    }
    getBookingModalOk() {
        return cy.xpath('//button[text()=" OK "]');
    }
    getBookingModalOkConsignee() {
        return cy.xpath('//button[text()="Ok"]');
    }
    getBookingModalOkConfirmacionBR() {
        return cy.xpath('//button[text()=" Ok "]');
    }
    getModalPolCancel() {
        return cy.xpath('//button[text()=" Cancel "]').click();
    }
    getModalPolClose() {
        return cy.xpath('//button[text()=" Close "]').click();
    }
    getMessageModalCreateBooking() {
        return cy.get('div > p').should('contain.text', "Booking Request has been created successfully! Booking Request");
    }
     btnCloseModalPurchaseInvalid(){
        this.getBtnCloseModal().click();
    }
    getModalUpdatePol(){
        return cy.get('div > h4').should('contain.text', "Update Port Of Loading (POL)");
    }
    getModalPoNoSelected(){
        return cy.get('div > h6').should('contain.text', "There are no purchase orders selected.");
    }
    getModalDiferentesPoCompany(){
        return cy.xpath('(//h6[@class="mb-0 p-1 ng-star-inserted"])[1]').should('contain.text', '- Company').should('be.visible');
    }
    getModalDiferentesPoPod(){
        return cy.xpath('(//h6[@class="mb-0 p-1 ng-star-inserted"])[2]').should('contain.text', '- Port Of Destiny').should('be.visible');
    }
    getModalDiferentesPoPol(){
        return cy.xpath('(//h6[@class="mb-0 p-1 ng-star-inserted"])[3]').should('contain.text', '- Port Of Loading').should('be.visible');
    }
    getModalDiferentesPoVendor(){
        return cy.xpath('(//h6[@class="mb-0 p-1 ng-star-inserted"])[4]').should('contain.text', '- Vendor Local Code').should('be.visible');
    }
    getModalIQSumaryOk(){
        return cy.get('div > span').should('contain.text', "OK").should('be.visible');
    }
    getModalIQSumaryOknumber(){
        return cy.get('div > span').should('contain.text', "1").should('be.visible');
    }
    getModalIQSumaryOkError(){
        return cy.get('div > span').should('contain.text', "ERROR").should('be.visible');
    }
    getModalIQSumaryOkErrorNumber(){
        return cy.get('div > span').should('contain.text', "2").should('be.visible');
    }
    getModalIQSumaryOkNotInformed(){
        return cy.get('div > span').should('contain.text', "Not Informed").should('be.visible');
    }
    getModalIQSumaryOkErrorNotInformedNumber(){
        return cy.get('div > span').should('contain.text', "1").should('be.visible');
    }
    getMessageModalSinCantidadesInformadas() {
        return cy.get('div > h6').should('contain.text', "There are no informed products.");
    }
    getHsCodeMasivo() {
        return cy.xpath('//label[contains(.,"add  Add bulk HS Code")]').should('contain.text', " add ").click();
    }
    getMessageModalConfirmacionBooking() {
        return cy.get('div > h6').should('contain.text', "Are you sure you want to create the Booking Request?").should('be.visible');
    }
    getMessageModalExitoBooking() {
        return cy.get('div > span').should('contain.text', "check_circle_outline").should('be.visible');
    }
    getModalBackPass3(){
        return cy.get('div > h6').should('contain', 'If you go back to the previous step, loaded information in Confirm Container Quantity  will not be saved. Are you sure?').should('be.visible');
    } 
    getModalBackPass2(){
        return cy.get('div > h6').should('contain', 'If you go back to the previous step, loaded information in Confirm Quantity will not be saved. Are you sure?').should('be.visible');
    }  
    getModalBackPass1(){
        return cy.get('div > h6').should('contain', 'If you exit now, loaded information will not be saved. Are you sure?').should('be.visible');
    }                                            
   
    
    
    /////////////////////////Validaciones Grilla/////////////////
    getGrillaPol() {
        return cy.get('app-link-port-of-loading-quantity > a').should('contain.text', 'CL-VAP').should('be.visible');
    }
    getGrillaPolReturn() {
        return cy.get('app-link-port-of-loading-quantity > a').should('contain.text', 'CO-BUN').should('be.visible');
    }
    getGrillaPod() {
        return cy.get('app-link-port-of-destiny > a').should('contain.text', 'CL-SAI').should('be.visible');
    }
    getCambioPol() {
        return cy.get('app-link-port-of-loading-quantity > a').should('contain.text', 'CO-BUN').should('be.visible').click();
    }
    getCambioPolReturn() {
        return cy.get('app-link-port-of-loading-quantity > a').should('contain.text', 'CL-VAP').should('be.visible').click();
    }
    getBuGrillaCompany(){
        return cy.xpath('//span[contains(text(),"SODIMAC")]').should('be.visible');
    }
    getBuGrillaPurchase(){
        return cy.xpath('//span[contains(text(),"7001")]').should('be.visible');
    }
    getBuGrillaFolder(){
        return cy.xpath('//span[contains(text(),"03743CLIK/7001IKE")]').should('be.visible');
    }
    getBuGrillaFreightMode(){
        return cy.xpath('//span[contains(text(),"Sea")]').should('be.visible');
    }
    requiredBuModalCol(){
        return cy.xpath('(//mat-error[contains(@aria-atomic,"true")])[1]').should('be.visible');
    }
    requiredBuModalPol(){
        return cy.xpath('(//mat-error[contains(@aria-atomic,"true")])[2]').should('be.visible');
    }
    getConsigneeGrilla(){
        return cy.get('app-link-update-consignee.ng-star-inserted > a').should('contain.text', 'SODIMAC S.A.').click();
    } 
    getClearInputConsignee(){
        return cy.xpath('(//input[@type="text"])[5]').click();    
    } 
    getSeleccionConsignee(){
        return cy.xpath('//span[contains(text()," prueba-automatizada ")]').click();
    }
    getConsigneeGrillaReturn(){
        return cy.get('app-link-update-consignee.ng-star-inserted > a').should('contain.text', 'prueba-automatizada').should('be.visible').click({ force: true });
    } 
    getClearInputConsignee(){
        return cy.xpath('(//input[@type="text"])[5]').click();    
    } 
    getSeleccionConsigneeReturn(){
        return cy.xpath('//span[contains(text()," SODIMAC S.A. ")]').click({ force: true });;
    }
    getScrollHorizontal(){
        return cy.get('.getag-body-horizontal-scroll-viewport');
    }
    
    /////////////////////////Botones/////////////////

    getSearchButton() { 
        return  cy.get('#btn-search')
    }
    getClearButton() {
        return cy.get('#btn-clear');
    }
    getBtnCloseModal(){
        return cy.get('#btn-close-success')
    }
    getExitButton() {
        return cy.xpath('//button[text()="Exit"]');
    }
    getConfirmButton() {
        return cy.xpath('//button[text()="Confirm"]');
    }
    getSave() {
        return cy.xpath('//button[text()=" Save "]').eq(0);
    }
     getNextButton() {
        return cy.get('.btn-success').eq(0).should('contain.text', 'Next').click();
    }
    getNextButtonPass2() {
        return cy.get('.btn-success').eq(1).should('contain.text', 'Next');
    }
    getNextButtonPass3() {
        return cy.get('.btn-success').eq(2).should('contain.text', ' Confirm ').click();
    }
    getNextButtonGenerate() {
        return cy.xpath('//button[text()="Next"]').click();
    }
    getNextButtonGeneratePass2() {
        return cy.xpath('//button[@class="btn btn-success btn-sm btn-common-size h-btn-48 position-relative order-3 btn-responsive-w mb-2 mb-md-0"][contains(.,"Next")]').click({ force: true });
    }
    getButtonUpdateConsignee() {
        return cy.xpath('//button[text()=" Update Consignee "]').click();
    }
    getButtonInformedQuantity(){
        return cy.get('#dropdownForm1').click();
    }
    getDownloadInformedQuantity(){
        return cy.xpath('//button[text()=" Download "]').click();
    }
    getBotonBack(){
        cy.get('.overflow-auto > .btn-group-responsive > .btn-back').click();
    }
    getBotonPass2(){
        cy.get('#cdk-step-content-0-1 > .ng-submitted > .btn-group-responsive > .btn-back').click();
    }
    getBotonPass1(){
        cy.get('#cdk-step-content-0-0 > .h-100.ng-untouched > .btn-group-responsive > .btn-back').click();
    }

    

    /////////////////////////Acceso Home/////////////////

    getTitle() {
        return cy.xpath('//app-search-booking-request/div/div/div/div/label');
    }
    getTabShipment(){
        return cy.xpath('(//vts-text[@type="displayMedium"])[1]');
    }
    getEnterGenerate(){
         return cy.get(':nth-child(1) > .padding-card');
    }
    getCardEnterLink() {  
        return cy.get('#btn-enter-generate-booking-request'); 
    }
    getCardImports() {
        return cy.get('.MuiCardMedia-root');
    }
    verifyItLoadsCorrectly() {
        this.getFreightModeHeader().should('be.visible');
        this.getPortOfLoadingHeader().should('be.visible');
        this.getPortOfDestinyHeader().should('be.visible');
        this.getVendorNameHeader().should('be.visible');
        //this.getCoordinatorHeader().should('be.visible');
        this.getForwarderHeader().should('be.visible');
        this.getBookingRequestDateHeader().should('be.visible');
        this.getActionsHeader().should('be.visible');
        this.getPurchaseOrderNumberLabel().should('contain', 'Purcharse Order Number');
        this.getBookingRequestNumberLabel().should('contain', 'Booking Request Number');
        this.getBookingRequestCommercialInvoiceLabel().should('contain', 'Commercial Invoice');
        
    }

    //***********Boton Back *****************/



    //**************Alertas**************** */
    getAlertCargaArchivo() {
        return cy.get('.show > .toast-body').invoke('attr', 'style', 'display:block');
    }
    getDownloadInformedQuantitystep2() {
        this.getAlertCargaArchivo().should('contain', 'Download Saved Successfully');
    }
    getModalInformedQuantitystep2Error() {
        this.getAlertCargaArchivo().should('contain', 'Please check the errors generated, press download');
    }
    getModalInformedQuantitystep2SaveOk() {
        this.getAlertCargaArchivo().should('contain', 'Save Success');
    }
    getAlertaInformedQuantityValid() {
        this.getAlertCargaArchivo().should('contain', 'Valid Informed Quantity');
    }
    getAlertaInformedQuantityRounded() {
        this.getAlertCargaArchivo().should('contain', 'Rounded Informed Quantity');
    }
    getAlertaInformedQuantityNotValid() {
        this.getAlertCargaArchivo().should('contain', 'Not valid informed Quantity');
    }
    getAlertaHsCodeIndividual() {
        this.getAlertCargaArchivo().should('contain', 'HS Code add success').should('be.visible');
    }
    getTextAreaHscode(){
        this.getModalHsCodeMasivo().type("01 0101 010129 010130 010190 0102 010221 010231 0105 0106 0201");
    }
    getBorradoIndividualHscode(){
        this.getAlertCargaArchivo().should('contain', 'HS Code 820320 Deleted Successfully').should('be.visible');
    }

    //*************Esperas********** */
    waitButtonGenerate(){
        cy.waitUntil(function() {
            return cy.get("#btn-enter-generate-booking-request").should('exist');
       })
    }
    waitTableInfo(info){
        cy.waitUntil(() => cy.window().then(win => win.document.getElementById("gridBooking").innerHTML.indexOf(info) !== -1));
    }
    getUpdateConsigneeButton(){
        cy.waitUntil(function() {
            return cy.xpath('//button[text()=" Update Consignee "]').should('exist');
       })
    }
    waitInformedQuantity1(){
        cy.waitUntil(function() {
            return cy.xpath('(//app-input-informed-quantity/div/input)[2]').should('exist');
       })
    }
}

export default GenerateBookingRequest


