-- SCRIPT SIMPLES PARA TESTE
-- Copie e cole no seu banco de dados

-- 1. Inserir livro de teste
INSERT INTO livros (titulo, categoria_id, isbn, ano_publicacao, preco) VALUES
('Teste do Render', 1, '978-1111111111', 2025, 19.90);

-- 2. Verificar se foi inserido
SELECT * FROM livros WHERE titulo = 'Teste do Render';