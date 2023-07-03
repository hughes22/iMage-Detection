describe('template spec', () => {
    beforeEach('LogIn',()=>{
      cy.visit('https://image-matching.amalitech-dev.net/login')
   })

    it('login', () => {
     cy.get('[name="email"]').type("qwammy@gmail.com")
     cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type("qwammy")
     cy.get('.PrivateSwitchBase-input').check()
     cy.get("button[type='submit']").click()
    })
})