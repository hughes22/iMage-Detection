describe('dashboard', () => {
   beforeEach('',()=>{
     cy.visit('/login')
  })
     it('passes', () => {
    //Dashboard section done
    cy.get('[name="email"]').type("qwammy@gmail.com")
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type("qwammy")
    cy.get('.PrivateSwitchBase-input').check()
    cy.get("button[type='submit']").click()
    cy.get('[href="/dashboard"] > .MuiTypography-root').click()
    cy.get('.MuiGrid2-container > :nth-child(1)').should('be.visible')
    cy.get('.MuiGrid2-container > :nth-child(2)').should('be.visible')
    cy.get('.MuiGrid2-container > :nth-child(3)').should('be.visible')
    cy.get('.MuiGrid2-container > :nth-child(4)').should('be.visible')
    cy.get('.MuiGrid2-container > :nth-child(5)').should('be.visible')
    cy.get('.MuiGrid2-container > :nth-child(6)').should('be.visible')
    cy.wait(1000);
    //Analytics section
    cy.get(':nth-child(3) > :nth-child(2) > .MuiButtonBase-root').click()
    cy.get(':nth-child(3) > :nth-child(2) > .MuiButtonBase-root').should('be.visible')
    cy.get('.rs-picker-toggle-textbox').click()
    cy.get('[index="0"] > .rs-calendar-body').should('be.visible')
    cy.get('[aria-label="02 Jul 2023"] > .rs-calendar-table-cell-content > .rs-calendar-table-cell-day').click()
    cy.get('.rs-calendar-table-cell-is-today > .rs-calendar-table-cell-content > .rs-calendar-table-cell-day').click()
    cy.get('.rs-picker-toolbar-right > .rs-btn').click()
    cy.get('canvas').should('be.visible')
    cy.get('.MuiTablePagination-actions > [tabindex="0"]').click()
    cy.get('.css-12c6kn2').should('be.visible')
    cy.get('.css-4nq9cg').should('be.visible')
    cy.get('.css-o6l5fu').should('be.visible')
    cy.get('.MuiDataGrid-root').should('be.visible')
    cy.wait(1000);
    //Report Section done
    cy.get('[d="M4 9h4v11H4zm12 4h4v7h-4zm-6-9h4v16h-4z"]').click()
    cy.get('.MuiTabsList-root').should('be.visible')
    cy.get(':nth-child(1) > .css-riwjq3 > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
    cy.get('#demo-customized-button').click()
    cy.get('#demo-customized-menu > .MuiPaper-root > .MuiList-root > :nth-child(2)').click()
    cy.get('.MuiTablePagination-root > .MuiToolbar-root').should('be.visible')
    cy.wait(2000);
    cy.get('[aria-label="Show/Hide search"]').click({force: true})
    cy.get('[placeholder="Search"]').click({force: true})
    cy.get('[placeholder="Search"]').type("qwammy",{force: true})
    cy.get('.MuiInputAdornment-root > span').click({force: true})
    cy.get('.css-1cjiko4 > .MuiBox-root > :nth-child(2)').click({force: true})
    cy.get('.css-1cjiko4 > .MuiBox-root > :nth-child(2)').click({force: true})
    cy.get('[aria-label="Show/Hide columns"]').click({force: true})
    cy.wait(3000);
    cy.get('.css-1crctjg > [tabindex="0"]').click()
    cy.get('.css-1crctjg > :nth-child(2)').click()
    cy.get('[aria-label="Toggle density"]').click({force: true})
    cy.get('.MuiBox-root > :nth-child(5)').click({force: true})
    cy.get('.MuiBox-root > :nth-child(5)').click()
    cy.wait(4000);
    cy.get('.MuiTabsList-root').should("be.visible")
    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > main:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > button:nth-child(2)").click()
    cy.get(".MuiBox-root.css-mro3c9").should('be.visible')
    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > main:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > button:nth-child(3)").click()
    cy.get(".MuiBox-root.css-mro3c9").should('be.visible')
    cy.wait(5000);
    cy.get('[aria-label="Go to last page"]').click()
    cy.get('[aria-label="Go to first page"]').click()
    cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > main:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1)').click()
    cy.get('[data-value="5"]').click()
    cy.get('.css-16gz4ab > .Mui-TableHeadCell-Content > .Mui-TableHeadCell-Content-Actions').click()
    cy.get('[tabindex="0"][role="menuitem"] > .MuiBox-root').click()
    cy.get('[data-testid="ArrowDownwardIcon"]').click({multiple: true})
    cy.wait(5000);
    //Manage users 
    cy.get(':nth-child(4) > .MuiButtonBase-root').click({force: true})
    cy.wait(2000);
    cy.get('.css-mro3c9').should('be.visible')
    cy.get('.css-cbt3u2').should('contain', "Manage Users from This Interface")
    cy.get(':nth-child(1) > .css-1fsjtgg').should('be.visible')
    cy.get('.MuiTableContainer-root').should('be.visible')
    cy.get(':nth-child(1) > .css-10f0txy > .MuiBox-root > #basic-button > svg').click({force: true})
    cy.get('[role="menuitem"]').should('be.visible')
    cy.wait(5000);
    //Upload section
    cy.get(':nth-child(3) > :nth-child(5) > .MuiButtonBase-root').click({force: true})
    cy.get('.MuiButton-contained').click()
    cy.get('.MuiButton-text').click()
    cy.get('.css-gnrpkp').should('be.visible')
    cy.get(':nth-child(5) > .MuiListItem-root > .MuiButtonBase-root').click()
    
    })
})