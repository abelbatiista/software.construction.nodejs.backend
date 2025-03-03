CREATE TABLE franchise (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    description VARCHAR(500) NOT NULL,
    image VARCHAR(500) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO franchise (name, description) VALUES
('Super Mario', 'Super Mario is a platform game series created by Nintendo starring their mascot, Mario. It is the central series of the greater Mario franchise.'),
('Pokémon', 'Pokémon es una franquicia de medios que originalmente comenzó como un videojuego RPG, pero debido a su popularidad ha logrado expandirse a otros medios de entretenimiento como series de televisión, películas, juegos de cartas, ropa, entre otros, convirtiéndose en una marca que es reconocida en el mercado mundial.'),
('The Legend of Zelda', 'The Legend of Zelda is a video game series created by the Japanese game designers Shigeru Miyamoto and Takashi Tezuka. It is primarily developed and published by Nintendo; some portable installments and re-releases have been outsourced to Flagship, Vanpool, Grezzo, and Tantalus Media.'),
('Sonic the Hedgehog', 'Sonic the Hedgehog is a video game series and media franchise created by the Japanese developers Yuji Naka, Naoto Ohshima, and Hirokazu Yasuhara for Sega. The franchise follows Sonic, an anthropomorphic blue hedgehog who battles the evil Doctor Eggman, a mad scientist.');

DELIMITER $$

CREATE PROCEDURE GetFranchises()
BEGIN
    SELECT id, name, description, image FROM franchise;
END $$

DELIMITER ;

DELIMITER $$

CREATE PROCEDURE FindFranchiseById(IN p_id INT)
BEGIN
    SELECT id, name, description, image FROM franchise WHERE id = p_id;
END $$

DELIMITER ;
