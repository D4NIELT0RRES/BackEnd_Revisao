/***************************************************************************************
 * OBJETIVO: Controller responsável pelas regras de negócio de LOGIN
 * DATA: 30/10/2025
 * AUTOR: Daniel Torres
 * Versão: 1.0
 ***************************************************************************************/

const usuarioDAO = require('../model/DAO/usuario.js')

const fazerLogin = async function (username, password) {
    if (username == '' || username == undefined ||
        password == '' || password == undefined) {
        return { status: 400, message: "Username e password são obrigatórios" }
    }
    
    let usuario = await usuarioDAO.loginUsuario(username, password)
    
    if (usuario) {
        return { 
            status: 200, 
            message: "Login realizado com sucesso", 
            usuario: {
                id: usuario.id,
                username: usuario.username
            }
        }
    } else {
        return { status: 401, message: "Username ou password incorretos" }
    }
}

module.exports = {
    fazerLogin
}