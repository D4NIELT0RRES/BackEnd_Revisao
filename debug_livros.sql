-- TESTE DE DIAGNÓSTICO
-- Execute uma query por vez para encontrar o problema

-- 1. Verificar se os livros existem
SELECT COUNT(*) as total_livros FROM tbl_livros;

-- 2. Verificar status do campo ativo
SELECT id, titulo, ativo FROM tbl_livros LIMIT 5;

-- 3. Testar query simples sem JOIN
SELECT id, titulo FROM tbl_livros WHERE ativo = true;

-- 4. Testar query com JOIN (a mesma do DAO)
SELECT l.id, l.titulo, c.nome as categoria, l.isbn, l.ano_publicacao 
FROM tbl_livros l 
LEFT JOIN tbl_categorias c ON l.categoria_id = c.id 
WHERE l.ativo = true 
ORDER BY l.titulo;

-- 5. Se não aparecer nada, force o ativo = true
UPDATE tbl_livros SET ativo = true WHERE ativo IS NULL OR ativo = false;