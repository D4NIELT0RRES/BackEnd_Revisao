# 📚 LionBook - API Backend

## 🌐 **URL do Backend (Render)**
**URL Base:** `https://backend-revisao-9qe5.onrender.com`

## 🚀 Como usar no Frontend
```javascript
const API_BASE_URL = 'https://backend-revisao-9qe5.onrender.com'

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
POST https://backend-revisao-9qe5.onrender.com/v1/login
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
GET https://backend-revisao-9qe5.onrender.com/v1/livros
```
**Retorna:** Lista com id, título, categoria, isbn, ano de publicação

#### Excluir um livro
```
DELETE https://backend-revisao-9qe5.onrender.com/v1/livro/{id}
```
**Exemplo:** `DELETE https://backend-revisao-9qe5.onrender.com/v1/livro/123`

---

### ➕ **TELA CADASTRO - Adicionar/Editar Livros**

#### Buscar categorias (para dropdown)
```
GET https://backend-revisao-9qe5.onrender.com/v1/categorias
```
**Retorna:** Lista de categorias disponíveis

#### Cadastrar novo livro
```
POST https://backend-revisao-9qe5.onrender.com/v1/livro
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
GET https://backend-revisao-9qe5.onrender.com/v1/livro/{id}
```

#### Atualizar livro existente
```
PUT https://backend-revisao-9qe5.onrender.com/v1/livro/{id}
```
**Body JSON:** (mesmo formato do POST)

---

### 📦 **TELA ESTOQUE - Controle de Estoque**

#### Buscar livros (para dropdown título)
```
GET https://backend-revisao-9qe5.onrender.com/v1/livros-estoque
```
**Retorna:** Lista de livros para seleção

#### Listar estoque atual
```
GET https://backend-revisao-9qe5.onrender.com/v1/estoque
```
**Retorna:** Lista com livro_id, título, quantidade atual

#### Atualizar quantidade do estoque
```
PUT https://backend-revisao-9qe5.onrender.com/v1/estoque/{id}
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
const API_BASE_URL = 'https://backend-revisao-9qe5.onrender.com'

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

---

## 🚀 **Deploy no Render**

### Passos para hospedar no Render:

1. **Conecte seu repositório GitHub ao Render**
2. **Configure o banco de dados:**
   - Crie um banco MySQL no Render
   - Copie a URL de conexão fornecida pelo Render
   - Cole na variável de ambiente `DATABASE_URL`

3. **Configure as variáveis de ambiente no Render:**
   ```
   DATABASE_URL = sua_url_mysql_do_render
   NODE_ENV = production
   ```

4. **O arquivo `render.yaml` já está configurado**
   - Build automático: `npm install && npx prisma generate`
   - Start automático: `npm start`
   - Health check: `/v1/livros`

5. **Após o deploy, execute o script SQL:**
   - Execute o conteúdo de `database/script.sql` no seu banco MySQL do Render
   - Isso criará as tabelas e dados de exemplo

### ✅ **Backend ativo em:**
`https://backend-revisao-9qe5.onrender.com`