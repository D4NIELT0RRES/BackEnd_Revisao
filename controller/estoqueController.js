/***************************************************************************************
 * OBJETIVO: Controller responsável pelas regras de negócio de ESTOQUE
 * DATA: 30/10/2025
 * AUTOR: Daniel Torres
 * Versão: 1.0
 ***************************************************************************************/

const estoqueDAO = require('../model/DAO/estoque.js')

const getAllEstoque = async function () {
    let dadosEstoque = await estoqueDAO.selectAllEstoque()
    
    if (dadosEstoque) {
        return { status: 200, message: "Estoque encontrado", estoque: dadosEstoque }
    } else {
        return { status: 404, message: "Nenhum item no estoque" }
    }
}

const getLivrosParaEstoque = async function () {
    let dadosLivros = await estoqueDAO.selectLivrosParaEstoque()
    
    if (dadosLivros) {
        return { status: 200, message: "Livros encontrados", livros: dadosLivros }
    } else {
        return { status: 404, message: "Nenhum livro encontrado" }
    }
}

const updateEstoque = async function (quantidade, id) {
    if (id == '' || id == undefined || isNaN(id)) {
        return { status: 400, message: "ID inválido" }
    }
    
    if (quantidade == '' || quantidade == undefined || isNaN(quantidade)) {
        return { status: 400, message: "Quantidade inválida" }
    }
    
    let estoqueAtualizado = await estoqueDAO.updateEstoque(quantidade, id)
    
    if (estoqueAtualizado) {
        return { status: 200, message: "Estoque atualizado com sucesso" }
    } else {
        return { status: 500, message: "Erro interno do servidor" }
    }
}

module.exports = {
    getAllEstoque,
    getLivrosParaEstoque,
    updateEstoque
}