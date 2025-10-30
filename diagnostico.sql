-- DIAGNÓSTICO DO BANCO
-- Execute estas queries para verificar o que está acontecendo

-- 1. Verificar se as tabelas existem
SHOW TABLES;

-- 2. Verificar estrutura da tabela livros
DESCRIBE livros;

-- 3. Contar quantos livros existem
SELECT COUNT(*) as total_livros FROM livros;

-- 4. Verificar todos os livros (incluindo inativos)
SELECT id, titulo, ativo FROM livros;

-- 5. Verificar categorias
SELECT * FROM categorias;

-- 6. Verificar autores
SELECT * FROM autores;

-- 7. Query que a API está executando
SELECT l.id, l.titulo, c.nome as categoria, l.isbn, l.ano_publicacao 
FROM livros l 
LEFT JOIN categorias c ON l.categoria_id = c.id 
WHERE l.ativo = true 
ORDER BY l.titulo;