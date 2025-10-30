/***************************************************************************************
 * OBJETIVO: Model responsável pelo CRUD de dados referente a LIVROS no BANCO DE DADOS.
 * DATA: 30/10/2025
 * AUTOR: Daniel Torres
 * Versão: 1.0
 ***************************************************************************************/

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const insertLivro = async function (livro) {
    try {
        let sql = `INSERT INTO tbl_livros (
                                        titulo, categoria_id, isbn, ano_publicacao, autor_id, preco
                                       ) VALUES (
                                        '${livro.titulo}', 
                                        ${livro.categoria_id || 1}, 
                                        '${livro.isbn || ''}',
                                        ${livro.ano_publicacao || new Date().getFullYear()},
                                        ${livro.autor_id || 1}, 
                                        ${livro.preco || 0}
                                        )`;
        let result = await prisma.$executeRawUnsafe(sql);
        return result ? true : false;
    } catch (error) {
        return false;
    }
}

const selectAllLivros = async function () {
    try {
        let sql = `SELECT l.id, l.titulo, c.nome as categoria, l.isbn, l.ano_publicacao 
                   FROM tbl_livros l 
                   LEFT JOIN tbl_categorias c ON l.categoria_id = c.id 
                   WHERE l.ativo = true 
                   ORDER BY l.titulo`;
        let result = await prisma.$queryRawUnsafe(sql);
        return result.length > 0 ? result : null;
    } catch (error) {
        return null;
    }
}

const selectLivroById = async function (id) {
    try {
        let sql = `SELECT * FROM tbl_livros WHERE id = ${id}`;
        let result = await prisma.$queryRawUnsafe(sql);
        return result.length > 0 ? result[0] : null;
    } catch (error) {
        return null;
    }
}

const updateLivro = async function (livro, id) {
    try {
        let sql = `UPDATE tbl_livros SET 
                   titulo = '${livro.titulo}', 
                   categoria_id = ${livro.categoria_id || 1}, 
                   isbn = '${livro.isbn || ''}',
                   ano_publicacao = ${livro.ano_publicacao || new Date().getFullYear()}
                   WHERE id = ${id}`;
        let result = await prisma.$executeRawUnsafe(sql);
        return result ? true : false;
    } catch (error) {
        return false;
    }
}

const deleteLivro = async function (id) {
    try {
        let sql = `UPDATE tbl_livros SET ativo = false WHERE id = ${id}`;
        let result = await prisma.$executeRawUnsafe(sql);
        return result ? true : false;
    } catch (error) {
        return false;
    }
}

const selectAllAutores = async function () {
    try {
        let sql = `SELECT id, nome FROM tbl_autores`;
        let result = await prisma.$queryRawUnsafe(sql);
        return result.length > 0 ? result : null;
    } catch (error) {
        return null;
    }
}

const selectAllCategorias = async function () {
    try {
        let sql = `SELECT id, nome FROM tbl_categorias ORDER BY nome`;
        let result = await prisma.$queryRawUnsafe(sql);
        return result.length > 0 ? result : null;
    } catch (error) {
        return null;
    }
}

module.exports = {
    insertLivro,
    selectAllLivros,
    selectLivroById,
    updateLivro,
    deleteLivro,
    selectAllAutores,
    selectAllCategorias
}
