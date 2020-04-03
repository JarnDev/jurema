[:arrow_left: Voltar](../README.md)
# A)

```
SELECT * FROM users JOIN groups ON users.id = Orders.users_id WHERE groups.name IN (15,40) AND YEAR(created)=2013 AND MONTH(created)=1;

```

# B)

```
SELECT * FROM users WHERE login = 'inputLogin' AND password_= SHA1('inputPassword')
```

# C)

```
BEGIN TRANSACTION;
    INSERT INTO users(login, password_, name, created) VALUES (jarn, SHA1('Senha'), Alfredo, '2020-04-02')
    INSERT INTO groups(users_id, name, description) VALUES ( (SELECT id FROM users WHERE login=jarn), 20, '...' ) 
    INSERT INTO groups(users_id, name, description) VALUES ( (SELECT id FROM users WHERE login=jarn), 33, '...' ) 
COMMIT
```

# D)

```
SELECT * FROM users 
JOIN groups ON users.id = groups.users_id 
JOIN permission ON groups.id = permission.groups_id
WHERE permission.name IN (55, 80, 48)
```