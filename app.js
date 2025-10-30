/*************************************************************************************************
 * OBJETIVO: API responsável pela manipulação de dados
 * DATA: 30/10/2025
 * AUTOR: DANIEL TORRES
 * VERSÃO: 1.0
 *************************************************************************************************/

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const livroController = require('./controller/livroController.js')
const estoqueController = require('./controller/estoqueController.js')
const usuarioController = require('./controller/usuarioController.js')

const app = express()

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    app.use(cors())
    next()
})

app.use(bodyParser.json())

// Rota de health check para o Render
app.get('/health', cors(), async function (request, response) {
    response.status(200).json({ 
        status: "OK", 
        message: "LionBook API está funcionando",
        timestamp: new Date().toISOString()
    })
})

// LOGIN
app.post('/v1/login', cors(), async function (request, response) {
    let { username, password } = request.body
    let resultado = await usuarioController.fazerLogin(username, password)
    response.status(resultado.status)
    response.json(resultado)
})

// LIVROS
app.get('/v1/livros', cors(), async function (request, response) {
    let dadosLivros = await livroController.getAllLivros()
    response.status(dadosLivros.status)
    response.json(dadosLivros)
})

app.get('/v1/livro/:id', cors(), async function (request, response) {
    let id = request.params.id
    let dadosLivro = await livroController.getLivroById(id)
    response.status(dadosLivro.status)
    response.json(dadosLivro)
})

app.post('/v1/livro', cors(), async function (request, response) {
    let dadosBody = request.body
    let novoLivro = await livroController.createLivro(dadosBody)
    response.status(novoLivro.status)
    response.json(novoLivro)
})

app.put('/v1/livro/:id', cors(), async function (request, response) {
    let id = request.params.id
    let dadosBody = request.body
    let livroAtualizado = await livroController.updateLivro(dadosBody, id)
    response.status(livroAtualizado.status)
    response.json(livroAtualizado)
})

app.delete('/v1/livro/:id', cors(), async function (request, response) {
    let id = request.params.id
    let livroExcluido = await livroController.deleteLivro(id)
    response.status(livroExcluido.status)
    response.json(livroExcluido)
})

app.get('/v1/autores', cors(), async function (request, response) {
    let dadosAutores = await livroController.getAllAutores()
    response.status(dadosAutores.status)
    response.json(dadosAutores)
})

app.get('/v1/categorias', cors(), async function (request, response) {
    let dadosCategorias = await livroController.getAllCategorias()
    response.status(dadosCategorias.status)
    response.json(dadosCategorias)
})

// ESTOQUE
app.get('/v1/estoque', cors(), async function (request, response) {
    let dadosEstoque = await estoqueController.getAllEstoque()
    response.status(dadosEstoque.status)
    response.json(dadosEstoque)
})

app.get('/v1/livros-estoque', cors(), async function (request, response) {
    let dadosLivros = await estoqueController.getLivrosParaEstoque()
    response.status(dadosLivros.status)
    response.json(dadosLivros)
})

app.put('/v1/estoque/:id', cors(), async function (request, response) {
    let id = request.params.id
    let quantidade = request.body.quantidade
    let estoqueAtualizado = await estoqueController.updateEstoque(quantidade, id)
    response.status(estoqueAtualizado.status)
    response.json(estoqueAtualizado)
})

app.listen(process.env.PORT || 8080, function () {
    console.log(`API funcionando na porta ${process.env.PORT || 8080}`)
})