# 📚 LionBook - API Backend

## 🌐 **URL do Backend (Local)**
**URL Base:** `http://localhost:8080`

## 🚀 Como usar no Frontend
```javascript
const API_BASE_URL = 'http://localhost:8080'

// Exemplo de uso:
fetch(`${API_BASE_URL}/v1/login`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({username: 'admin', password: '123456'})
})
```

---

## 🔐 **LOGIN - Autenticação**

#### Fazer login
```
POST /v1/login
```
**Body JSON:**
```json
{
    "username": "admin",
    "password": "123456"
}
```
**Resposta de Sucesso:**
```json
{
    "status": 200,
    "message": "Login realizado com sucesso",
    "usuario": {
        "id": 1,
        "username": "admin"
    }
}
```

---

## 📱 Endpoints por Tela

### 🏠 **TELA PRINCIPAL - Lista de Livros**

#### Listar todos os livros
```
GET http://localhost:8080/v1/livros
```
**Retorna:** Lista com id, título, categoria, isbn, ano de publicação

#### Excluir um livro
```
DELETE http://localhost:8080/v1/livro/{id}
```
**Exemplo:** `DELETE http://localhost:8080/v1/livro/123`

---

### ➕ **TELA CADASTRO - Adicionar/Editar Livros**

#### Buscar categorias (para dropdown)
```
GET http://localhost:8080/v1/categorias
```
**Retorna:** Lista de categorias disponíveis

#### Cadastrar novo livro
```
POST http://localhost:8080/v1/livro
```
**Body JSON:**
```json
{
    "titulo": "Nome do Livro",
    "categoria_id": 1,
    "isbn": "978-1234567890",
    "ano_publicacao": 2025
}
```

#### Buscar livro para editar
```
GET http://localhost:8080/v1/livro/{id}
```

#### Atualizar livro existente
```
PUT http://localhost:8080/v1/livro/{id}
```
**Body JSON:** (mesmo formato do POST)

---

### 📦 **TELA ESTOQUE - Controle de Estoque**

#### Buscar livros (para dropdown título)
```
GET http://localhost:8080/v1/livros-estoque
```
**Retorna:** Lista de livros para seleção

#### Listar estoque atual
```
GET http://localhost:8080/v1/estoque
```
**Retorna:** Lista com livro_id, título, quantidade atual

#### Atualizar quantidade do estoque
```
PUT http://localhost:8080/v1/estoque/{id}
```
**Body JSON:**
```json
{
    "quantidade": 50
}
```

---

## 📋 **Exemplos de Resposta**

### Lista de Livros:
```json
{
    "status": 200,
    "message": "Livros encontrados",
    "livros": [
        {
            "id": 123,
            "titulo": "A Volta do Mundo em 80 Dias",
            "categoria": "Aventura",
            "isbn": "978-1234567890",
            "ano_publicacao": 2020
        }
    ]
}
```

### Lista de Categorias:
```json
{
    "status": 200,
    "message": "Categorias encontradas",
    "categorias": [
        {
            "id": 1,
            "nome": "Aventura"
        },
        {
            "id": 2,
            "nome": "Romance"
        }
    ]
}
```

### Estoque:
```json
{
    "status": 200,
    "message": "Estoque encontrado",
    "estoque": [
        {
            "id": 1,
            "livro_id": 123,
            "titulo": "A Volta do Mundo em 80 Dias",
            "quantidade_atual": 25
        }
    ]
}
```

---

## ⚠️ **Campos Obrigatórios**

- **Login:** `username` e `password` são obrigatórios
- **Cadastro de Livro:** Apenas `titulo` é obrigatório
- **Atualização de Estoque:** `quantidade` é obrigatória

---

## 👤 **Usuário de Teste**
- **Username:** `admin`
- **Password:** `123456`

---

## 💻 **Para o Frontend**

### Configuração básica:
```javascript
const API_BASE_URL = 'http://localhost:8080'

// Headers padrão para requisições
const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
}
```

### Exemplos de uso:
```javascript
// Login
const login = async (username, password) => {
    const response = await fetch(`${API_BASE_URL}/v1/login`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ username, password })
    })
    return response.json()
}

// Listar livros
const getLivros = async () => {
    const response = await fetch(`${API_BASE_URL}/v1/livros`)
    return response.json()
}

// Cadastrar livro
const createLivro = async (livro) => {
    const response = await fetch(`${API_BASE_URL}/v1/livro`, {
        method: 'POST',
        headers,
        body: JSON.stringify(livro)
    })
    return response.json()
}
```

---

## 🎯 **Códigos de Status**
- **200:** Sucesso
- **201:** Criado com sucesso  
- **400:** Dados inválidos
- **404:** Não encontrado
- **500:** Erro do servidor