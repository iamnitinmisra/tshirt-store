CREATE TABLE tshirtUsers(
    userId SERIAL PRIMARY KEY,
    username VARCHAR(200),
    firstname VARCHAR(200),
    lastname VARCHAR(200),
    password TEXT
);

CREATE TABLE inventory(
    productId SERIAL PRIMARY KEY,
    price DECIMAL(19,4),
    productName VARCHAR(200),
    productDesc VARCHAR(1000)
)