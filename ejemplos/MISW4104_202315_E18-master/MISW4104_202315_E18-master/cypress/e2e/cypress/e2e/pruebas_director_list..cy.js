///<reference types="cypress"/>/// 
import paginaInicioSesion from "../integration/PageObject/paginaInicioSesion"

describe("'Realizar ingreso a Movie ART a listar a Actores'", function () {
    const login = new paginaInicioSesion();
    const title = '';
    const description = '';


    beforeEach('Realizar ingreso a Movie ART a listar a Actores', () => {
        login.navegate();
        
        // Ingresar a la sección Post
        
        //Then location is Post
        cy.url().then(url => {
            if (url.includes('actor')) {


                // La URL actual contiene "actor"
                console.log("La URL actual contiene actor");
            } else {
                // La URL actual no contiene "actor"
                console.log("La URL actual no contiene actor");
            }
        })


    });

    



describe("Cypress POM Test Suite", function () {
  const login = new paginaInicioSesion();
  it("Then I Iniciar sesión con credenciales válidas",function ()  {
    
    login.navegate();
    
  });

  it('Then I get a Director', () => {
    
    login.navegate();
    cy.visit('http://localhost:4200/director')
    cy.get('.p-paginator-current').should('contain','100')
    cy.get('.p-datatable-thead > .ng-star-inserted > :nth-child(1)').should('contain','Foto')

  });

  it('Validar si existe el botón de Asociar pelicula',()=>{
    login.navegate();
    cy.get('.p-datatable-tbody > :nth-child(1) > :nth-child(3)').should ('contain', 'Asociar Pelicula')

  })
  




});

})