describe('search products', () => {
  it('deve ser capaz de pesquisar um produto', () => {
    // cy.visit('/')
    // buscar o input com name "q" e digitar "moletom"
    // parent('form') que é o pai do input
    // submit() para enviar o formulário
    // cy.get('input[name=q').type('moletom').parent('form').submit()
    // substituído pelo command

    cy.searchByQuery('moletom')

    // agora estamos validando que na url tenha "/product"
    cy.location('pathname').should('include', '/search')

    // validar que na url search tenha "q=moletom"
    cy.location('search').should('include', 'q=moletom')

    // "a" para procurar link
    // href "^="(começa com)
    // should exist para verificar se existe
    cy.get('a[href^="/product"]').should('exist')
  })

  it('não deveria ser possível visitar a página de pesquisa sem uma consulta de pesquisa', () => {
    // desabilitar a exibição de erros no console
    cy.on('uncaught:exception', () => {
      return false
    })

    cy.visit('/search')

    // validar se a url é igual "/"
    cy.location('pathname').should('equal', '/')
  })
})
