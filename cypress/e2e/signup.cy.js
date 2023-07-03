describe('signup', () => {
  beforeEach('SignUp',()=>{
    cy.visit('/signup')
 })
  it('passes', () => {
   cy.get('[name="name"]').type("Ama Boahene")
   cy.get('[name="email"]').type("amabola20@yahoo.com")
   cy.get('[name="password"]').type("Kansa123%")
   cy.get('[name="passwordConfirmation"]').type("Kansa123%")
   cy.get('[role="button"]').click()
   cy.get('[data-value="Ghana"]').click()
   cy.get('[type="checkbox"]').check()
   cy.get('.MuiButton-contained').click()
  })
})