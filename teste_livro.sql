-- Script para inserir livro de teste
-- Execute este script no seu banco de dados para testar

INSERT INTO livros (titulo, categoria_id, isbn, ano_publicacao, autor_id, preco, ativo) VALUES
('Livro de Teste - API', 1, '978-0000000001', 2025, 1, 25.90, true);

-- Criar estoque para o livro de teste
INSERT INTO estoque (livro_id, quantidade_atual, quantidade_minima, quantidade_maxima, localizacao) 
SELECT id, 10, 5, 50, 'Teste-A1' FROM livros WHERE titulo = 'Livro de Teste - API';

-- Verificar se foi inserido
SELECT 
    l.id,
    l.titulo,
    c.nome as categoria,
    l.isbn,
    l.ano_publicacao,
    l.preco,
    e.quantidade_atual
FROM livros l 
LEFT JOIN categorias c ON l.categoria_id = c.id
LEFT JOIN estoque e ON l.id = e.livro_id
WHERE l.titulo = 'Livro de Teste - API';