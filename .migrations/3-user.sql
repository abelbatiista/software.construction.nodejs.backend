CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE RESTRICT ON UPDATE CASCADE
);

DELIMITER $$

CREATE PROCEDURE CreateUser(
    IN p_username VARCHAR(50),
    IN p_email VARCHAR(100),
    IN p_password_hash VARCHAR(255),
    IN p_role_id INT
)
BEGIN
    INSERT INTO user (username, email, password_hash, role_id)
    VALUES (p_username, p_email, p_password_hash, p_role_id);
END $$

DELIMITER ;

DELIMITER $$

CREATE PROCEDURE GetUsers()
BEGIN
    SELECT * FROM user;
END $$

DELIMITER ;

DELIMITER $$

CREATE PROCEDURE FindUserById(IN p_id INT)
BEGIN
    SELECT * FROM user WHERE id = p_id;
END $$

DELIMITER ;

DELIMITER $$

CREATE PROCEDURE UpdateUser(
    IN p_id INT,
    IN p_username VARCHAR(50),
    IN p_email VARCHAR(100),
    IN p_password_hash VARCHAR(255),
    IN p_role_id INT
)
BEGIN
    UPDATE user
    SET
        username = p_username,
        email = p_email,
        password_hash = p_password_hash,
        role_id = p_role_id,
        updated_at = NOW()
    WHERE id = p_id;
END $$

DELIMITER ;

DELIMITER $$

CREATE PROCEDURE DeleteUser(IN p_id INT)
BEGIN
    DELETE FROM user WHERE id = p_id;
END $$

DELIMITER ;
