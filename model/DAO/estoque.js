/***************************************************************************************
 * OBJETIVO: Model responsável pelo CRUD de dados referente ao ESTOQUE no BANCO DE DADOS.
 * DATA: 30/10/2025
 * AUTOR: Daniel Torres
 * Versão: 1.0
 ***************************************************************************************/

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const selectAllEstoque = async function () {
    try {
        let sql = `SELECT 
                            e.id,
                            e.livro_id, 
                            l.titulo, 
                            e.quantidade_atual 
                            FROM estoque e 
                            INNER JOIN livros l ON e.livro_id = l.id
                            WHERE l.ativo = true
                            ORDER BY l.titulo`;
        let result = await prisma.$queryRawUnsafe(sql);
        return result.length > 0 ? result : null;
    } catch (error) {
        return null;
    }
}

const selectLivrosParaEstoque = async function () {
    try {
        let sql = `SELECT id, titulo FROM livros WHERE ativo = true ORDER BY titulo`;
        let result = await prisma.$queryRawUnsafe(sql);
        return result.length > 0 ? result : null;
    } catch (error) {
        return null;
    }
}

const updateEstoque = async function (quantidade, id) {
    try {
        let sql = `UPDATE estoque SET quantidade_atual = ${quantidade} WHERE id = ${id}`;
        let result = await prisma.$executeRawUnsafe(sql);
        return result ? true : false;
    } catch (error) {
        return false;
    }
}

module.exports = {
    selectAllEstoque,
    selectLivrosParaEstoque,
    updateEstoque
}