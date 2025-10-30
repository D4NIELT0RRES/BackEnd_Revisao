/***************************************************************************************
 * OBJETIVO: Model responsável pelo LOGIN de usuários no BANCO DE DADOS.
 * DATA: 30/10/2025
 * AUTOR: Daniel Torres
 * Versão: 1.0
 ***************************************************************************************/

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const loginUsuario = async function (username, password) {
    try {
        let sql = `SELECT id, username FROM usuario WHERE username = '${username}' AND password = '${password}'`;  
        let Usuario = await prisma.$queryRawUnsafe(sql);
        return Usuario.length > 0 ? Usuario[0] : null;
    } catch (error) {
        return null;
    }
}

module.exports = {
    loginUsuario
}
