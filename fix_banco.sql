-- SCRIPT COMPLETO PARA RESOLVER O PROBLEMA
-- Execute TUDO de uma vez no seu banco

-- 1. Inserir categoria se não existir
INSERT IGNORE INTO categorias (id, nome, descricao) VALUES (1, 'Teste', 'Categoria de teste');

-- 2. Inserir autor se não existir  
INSERT IGNORE INTO autores (id, nome) VALUES (1, 'Autor Teste');

-- 3. Inserir livro de teste
INSERT INTO livros (titulo, categoria_id, autor_id, isbn, ano_publicacao, preco, ativo) VALUES
('Livro Teste Render', 1, 1, '978-9999999999', 2025, 29.90, true);

-- 4. Verificar resultado
SELECT 
    l.id, 
    l.titulo, 
    c.nome as categoria, 
    l.isbn, 
    l.ano_publicacao,
    l.ativo
FROM livros l 
LEFT JOIN categorias c ON l.categoria_id = c.id 
WHERE l.ativo = true;