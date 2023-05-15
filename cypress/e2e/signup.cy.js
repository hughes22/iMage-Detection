describe('template spec', () => {
  beforeEach('',()=>{
    cy.visit('https://image-matching.amalitech-dev.net/')
    cy.viewport("macbook-15")
 })

  it('passes', () => {
   cy.get('[href="/signup"] > .MuiButtonBase-root').click()
   cy.get('[name="name"]').type("Ama Boahene")
   cy.get('[name="email"]').type("amabola20@yahoo.com")
   cy.get('[name="password"]').type("Kansa123%")
   cy.get('[name="passwordConfirmation"]').type("Kansa123%")
   cy.get('[role="button"]').click()
   cy.get('[data-value="Ghana"]').click()
   cy.get('[type="checkbox"]').click()
   cy.get('.MuiButton-contained').click()
   
    

  
  


    


  






    //Report section
    //cy.get(':nth-child(3) > .MuiButtonBase-root').click()
  








  })
})