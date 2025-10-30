CREATE DATABASE db_lionbook_revisao;

USE db_lionbook_revisao;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
	password VARCHAR(255) NOT NULL
);

-- Tabela de categorias dos livros
CREATE TABLE categorias (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de autores
CREATE TABLE autores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(200) NOT NULL,
    biografia TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela principal de livros
CREATE TABLE livros (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(300) NOT NULL,
    autor_id INT,
    categoria_id INT,
    isbn VARCHAR(20) UNIQUE,
    preco DECIMAL(10,2) NOT NULL,
    descricao TEXT,
    paginas INT,
    editora VARCHAR(200),
    ano_publicacao YEAR,
    imagem_url VARCHAR(500),
    ativo BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (autor_id) REFERENCES autores(id),
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

-- Tabela de estoque
CREATE TABLE estoque (
    id INT PRIMARY KEY AUTO_INCREMENT,
    livro_id INT NOT NULL,
    quantidade_atual INT DEFAULT 0,
    quantidade_minima INT DEFAULT 5,
    quantidade_maxima INT DEFAULT 100,
    localizacao VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (livro_id) REFERENCES livros(id) ON DELETE CASCADE
);

-- Tabela de movimentações de estoque
CREATE TABLE movimentacoes_estoque (
    id INT PRIMARY KEY AUTO_INCREMENT,
    livro_id INT NOT NULL,
    tipo_movimentacao ENUM('ENTRADA', 'SAIDA') NOT NULL,
    quantidade INT NOT NULL,
    motivo VARCHAR(200),
    observacoes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (livro_id) REFERENCES livros(id)
);

-- Inserindo dados de exemplo

-- Categorias
INSERT INTO categorias (nome, descricao) VALUES
('Ficção', 'Livros de ficção e literatura'),
('Técnico', 'Livros técnicos e educacionais'),
('Romance', 'Livros de romance'),
('Aventura', 'Livros de aventura'),
('Biografia', 'Biografias e autobiografias');

-- Autores
INSERT INTO autores (nome, biografia) VALUES
('Machado de Assis', 'Escritor brasileiro, considerado um dos maiores da literatura nacional'),
('Clarice Lispector', 'Escritora brasileira, uma das mais importantes do século XX'),
('Robert C. Martin', 'Engenheiro de software e autor de livros técnicos'),
('Agatha Christie', 'Escritora britânica de romances policiais'),
('J.K. Rowling', 'Escritora britânica, autora da série Harry Potter');

-- Livros
INSERT INTO livros (titulo, autor_id, categoria_id, isbn, preco, descricao, paginas, editora, ano_publicacao) VALUES
('Dom Casmurro', 1, 1, '978-8525406583', 29.90, 'Romance clássico da literatura brasileira', 208, 'Globo Livros', 2008),
('A Hora da Estrela', 2, 1, '978-8520925065', 24.90, 'Último romance de Clarice Lispector', 87, 'Francisco Alves', 1998),
('Clean Code', 3, 2, '978-0132350884', 89.90, 'Manual de boas práticas para desenvolvimento de software', 464, 'Prentice Hall', 2008),
('Assassinato no Expresso do Oriente', 4, 1, '978-8525432704', 34.90, 'Romance policial clássico', 256, 'Globo Livros', 2017),
('Harry Potter e a Pedra Filosofal', 5, 4, '978-8532511010', 39.90, 'Primeiro livro da série Harry Potter', 264, 'Rocco', 2000);

-- Estoque inicial
INSERT INTO estoque (livro_id, quantidade_atual, quantidade_minima, quantidade_maxima, localizacao) VALUES
(1, 25, 5, 50, 'Estante A-1'),
(2, 15, 3, 30, 'Estante A-2'),
(3, 40, 10, 100, 'Estante B-1'),
(4, 20, 5, 40, 'Estante A-3'),
(5, 60, 15, 120, 'Estante C-1');

-- Movimentações iniciais de entrada
INSERT INTO movimentacoes_estoque (livro_id, tipo_movimentacao, quantidade, motivo, observacoes) VALUES
(1, 'ENTRADA', 25, 'Estoque inicial', 'Cadastro inicial do sistema'),
(2, 'ENTRADA', 15, 'Estoque inicial', 'Cadastro inicial do sistema'),
(3, 'ENTRADA', 40, 'Estoque inicial', 'Cadastro inicial do sistema'),
(4, 'ENTRADA', 20, 'Estoque inicial', 'Cadastro inicial do sistema'),
(5, 'ENTRADA', 60, 'Estoque inicial', 'Cadastro inicial do sistema');

-- Usuario para teste de login
INSERT INTO usuario (username, password) VALUES
('admin', '123456');

INSERT INTO livros (titulo, categoria_id, isbn, ano_publicacao, preco) VALUES
('Teste do Render', 1, '978-1111111111', 2025, 19.90);
