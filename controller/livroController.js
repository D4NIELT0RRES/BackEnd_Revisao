/***************************************************************************************
 * OBJETIVO: Controller responsável pelas regras de negócio de LIVROS
 * DATA: 30/10/2025
 * AUTOR: Daniel Torres
 * Versão: 1.0
 ***************************************************************************************/

const livroDAO = require('../model/DAO/livro.js')

const getAllLivros = async function () {
    let dadosLivros = await livroDAO.selectAllLivros()
    
    if (dadosLivros) {
        return { status: 200, message: "Livros encontrados", livros: dadosLivros }
    } else {
        return { status: 404, message: "Nenhum livro encontrado" }
    }
}

const getLivroById = async function (id) {
    if (id == '' || id == undefined || isNaN(id)) {
        return { status: 400, message: "ID inválido" }
    }
    
    let dadosLivro = await livroDAO.selectLivroById(id)
    
    if (dadosLivro) {
        return { status: 200, message: "Livro encontrado", livro: dadosLivro }
    } else {
        return { status: 404, message: "Livro não encontrado" }
    }
}

const createLivro = async function (livro) {
    if (livro.titulo == '' || livro.titulo == undefined) {
        return { status: 400, message: "Título é obrigatório" }
    }
    
    let novoLivro = await livroDAO.insertLivro(livro)
    
    if (novoLivro) {
        return { status: 201, message: "Livro criado com sucesso" }
    } else {
        return { status: 500, message: "Erro interno do servidor" }
    }
}

const updateLivro = async function (livro, id) {
    if (id == '' || id == undefined || isNaN(id)) {
        return { status: 400, message: "ID inválido" }
    }
    
    if (livro.titulo == '' || livro.titulo == undefined) {
        return { status: 400, message: "Título é obrigatório" }
    }
    
    let livroAtualizado = await livroDAO.updateLivro(livro, id)
    
    if (livroAtualizado) {
        return { status: 200, message: "Livro atualizado com sucesso" }
    } else {
        return { status: 500, message: "Erro interno do servidor" }
    }
}

const deleteLivro = async function (id) {
    if (id == '' || id == undefined || isNaN(id)) {
        return { status: 400, message: "ID inválido" }
    }
    
    let livroExcluido = await livroDAO.deleteLivro(id)
    
    if (livroExcluido) {
        return { status: 200, message: "Livro excluído com sucesso" }
    } else {
        return { status: 500, message: "Erro interno do servidor" }
    }
}

const getAllAutores = async function () {
    let dadosAutores = await livroDAO.selectAllAutores()
    
    if (dadosAutores) {
        return { status: 200, message: "Autores encontrados", autores: dadosAutores }
    } else {
        return { status: 404, message: "Nenhum autor encontrado" }
    }
}

const getAllCategorias = async function () {
    let dadosCategorias = await livroDAO.selectAllCategorias()
    
    if (dadosCategorias) {
        return { status: 200, message: "Categorias encontradas", categorias: dadosCategorias }
    } else {
        return { status: 404, message: "Nenhuma categoria encontrada" }
    }
}

module.exports = {
    getAllLivros,
    getLivroById,
    createLivro,
    updateLivro,
    deleteLivro,
    getAllAutores,
    getAllCategorias
}