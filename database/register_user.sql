INSERT INTO tshirtUsers(username, password, firstname, lastname)
VALUES($1, $2, $3, $4);

SELECT * FROM users
WHERE username = $1;