describe('add product to cart', () => {
  // beforeEach para executar antes de cada teste começar na url direcionada
  // foi adicionado em cypress.config.ts o baseUrl para não precisar repetir a url
  beforeEach(() => {
    cy.visit('/')
  })

  it('deve ser capaz de navegar até a página do produto e adicioná-lo ao carrinho', () => {
    // "a" para procurar link
    // href "^="(começa com)
    // "/product" para procurar href que começa com "/product" tem que estar entre aspas
    cy.get('a[href^="/product"]').first().click()

    // agora estamos validando que na url tenha "/product"
    cy.url().should('include', '/product')

    // outra forma seria com pathname
    // cy.location('pathname').should('include', '/product')

    // buscar o botão com texto "Adicionar ao carrinho" e clicar
    cy.contains('Adicionar ao carrinho').click()

    // buscar o texto "Cart (1)" e verificar se existe
    cy.contains('Cart (1)').should('exist')
  })

  it('não deve contar produtos duplicados no carrinho', () => {
    // "a" para procurar link
    // href "^="(começa com)
    // "/product" para procurar href que começa com "/product" tem que estar entre aspas
    cy.get('a[href^="/product"]').first().click()

    // agora estamos validando que na url tenha "/product"
    cy.url().should('include', '/product')

    // outra forma seria com pathname
    // cy.location('pathname').should('include', '/product')

    // buscar o botão com texto "Adicionar ao carrinho" e clicar
    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Adicionar ao carrinho').click()
    // adicionar o mesmo produto duas vezes para verificar se o carrinho não conta duplicados

    // buscar o texto "Cart (1)" e verificar se existe (deve ser 1 e não 2)
    cy.contains('Cart (1)').should('exist')
  })

  it('deve ser capaz de pesquisar um produto e adicioná-lo ao carrinho', () => {
    // buscar o input com name "q" e digitar "moletom"
    // parent('form') que é o pai do input
    // submit() para enviar o formulário
    cy.get('input[name=q').type('moletom').parent('form').submit()

    // "a" para procurar link
    // href "^="(começa com)
    // "/product" para procurar href que começa com "/product" tem que estar entre aspas
    cy.get('a[href^="/product"]').first().click()

    // agora estamos validando que na url tenha "/product"
    cy.location('pathname').should('include', '/product')

    // buscar o botão com texto "Adicionar ao carrinho" e clicar
    cy.contains('Adicionar ao carrinho').click()

    // buscar o texto "Cart (1)" e verificar se existe (deve ser 1 e não 2)
    cy.contains('Cart (1)').should('exist')
  })
})
