# 🚀 Guia de Deploy no Render

## ✅ Status Atual
Seu backend **já está configurado** para funcionar no Render!

**URL ativa:** https://backend-revisao-9qe5.onrender.com

---

## 📋 Checklist de Deploy

### 1. ✅ Código Preparado
- [x] URLs atualizadas para Render no README.md
- [x] render.yaml configurado corretamente
- [x] package.json com scripts de build e start
- [x] Prisma configurado para build automático

### 2. ✅ GitHub Atualizado
- [x] Código enviado para o repositório
- [x] Branch main com as alterações mais recentes

### 3. 🔄 Configure no Render (se ainda não foi feito)

#### A. Criar o Web Service:
1. Acesse [render.com](https://render.com)
2. Conecte com seu GitHub
3. Selecione o repositório `BackEnd_Revisao`
4. Escolha **Web Service**

#### B. Configurações do Service:
```
Name: backend-revisao
Build Command: npm install && npx prisma generate
Start Command: npm start
```

#### C. Configurar Banco de Dados:
1. Crie um **PostgreSQL** ou **MySQL** database no Render
2. Copie a `DATABASE_URL` fornecida
3. Configure como variável de ambiente no Web Service

#### D. Variáveis de Ambiente:
```
DATABASE_URL = [URL_DO_SEU_BANCO_NO_RENDER]
NODE_ENV = production
```

### 4. 📊 Executar SQL no Banco
Após o deploy, execute no seu banco de dados do Render:
```sql
-- Copie todo o conteúdo do arquivo database/script.sql
-- e execute no console do seu banco no Render
```

---

## 🔧 Troubleshooting

### Se o deploy falhar:
1. Verifique os logs no dashboard do Render
2. Confirme se a `DATABASE_URL` está correta
3. Verifique se o banco está online

### Se retornar 404:
1. Confirme se o banco tem dados (execute o script.sql)
2. Teste o endpoint: `GET /v1/livros`

### Para testar localmente:
```bash
npm install
npx prisma generate
npm start
```

---

## 📱 Endpoints Prontos

Todos os endpoints estão funcionando em:
`https://backend-revisao-9qe5.onrender.com`

- ✅ `GET /v1/livros` - Lista livros
- ✅ `POST /v1/livro` - Criar livro  
- ✅ `PUT /v1/livro/{id}` - Atualizar livro
- ✅ `DELETE /v1/livro/{id}` - Deletar livro
- ✅ `GET /v1/categorias` - Lista categorias
- ✅ `GET /v1/estoque` - Lista estoque
- ✅ `PUT /v1/estoque/{id}` - Atualizar estoque
- ✅ `POST /v1/login` - Login de usuário

---

## 🎯 Próximos Passos

1. **Se já está no Render:** Apenas sincronize o repositório
2. **Se ainda não está:** Siga os passos da seção 3
3. **Configure o banco:** Execute o script SQL
4. **Teste:** Acesse a URL e teste os endpoints

**Seu backend está pronto para produção!** 🚀