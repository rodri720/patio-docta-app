CREATE DATABASE patio_docta;

\c patio_docta;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email VARCHAR(255) NOT NULL
);

INSERT INTO users (name, email) VALUES ('John Doe', 'j@j.com');
