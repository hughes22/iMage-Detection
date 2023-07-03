describe('Search', () => {
it( 'Seach for image',()=>{
    cy.visit('/login')
    cy.viewport(1920, 1080);
    cy.get('[name="email"]').type("qwammy@gmail.com")
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type("qwammy")
    cy.get('.PrivateSwitchBase-input').check()
    cy.get("button[type='submit']").click()
    //cy.get('[type="button"]').click()
    cy.get('.MuiButton-sizeSmall').click()
    cy.get('.Mui-selected').click()
    cy.get('.MuiTabs-flexContainer').should('be.visible')
    cy.get('[style="cursor: pointer;"]').click()
      const filePath = 'money.jpg'
    cy.get('[role="group"]').click({force: true})
    cy.get('input[type="file"]').attachFile(filePath)
    cy.get('button.MuiTab-root').contains('Crop your image').click()
    cy.get('button.MuiTab-root').contains('Preview image').click()
    cy.get('button.MuiTab-root').contains('Select Image').click()
    cy.wait(5000);
    cy.get('[style="max-width: 694px; background-color: rgb(255, 255, 255); border-radius: 12px; display: flex; flex-direction: column; align-items: center; padding: 24px; gap: 48px; box-sizing: border-box; margin: 10% auto; box-shadow: rgba(16, 24, 40, 0.08) 0px 20px 24px -4px, rgba(16, 24, 40, 0.03) 0px 8px 8px -4px; top: 254.5px; left: 373px;"]').should('be.visible')
    cy.get('button.MuiButton-root').contains('Crop').click()
    cy.get('button.MuiButton-root').contains('Back').click()
    cy.contains('Search').click()
    cy.get('.MuiGrid2-container > .MuiGrid2-root').should('be.visible')
    cy.get('[aria-label="pagination navigation"]').should('be.visible')
    cy.wait(5000);
    cy.get('[data-testid="NavigateNextIcon"]').click()
    cy.screenshot('screenshot-my-element')
    cy.get('.MuiGrid-container').screenshot()
    cy.screenshot('my-screenshot');
    cy.get("li:nth-of-type(3) [tabindex]").click()
    cy.get("li:nth-of-type(8) [focusable]").click()
    cy.get('.MuiSelect-select').click()
    cy.get('#menu- > .MuiPaper-root > .MuiList-root').should('be.visible')
    cy.get('[data-value="newest"]').click()
    cy.get('[data-value="oldest"]').click()
})
})