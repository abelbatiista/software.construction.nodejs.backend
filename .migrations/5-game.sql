CREATE TABLE game (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    description VARCHAR(500) NOT NULL,
    image VARCHAR(500) NULL,
    franchise_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (franchise_id) REFERENCES franchise(id) ON DELETE RESTRICT ON UPDATE CASCADE
);

INSERT INTO game (name, description, franchise_id) VALUES
('Super Mario Bros.', 'It is the successor to the 1983 arcade game Mario Bros. and the first game in the Super Mario series.', 1),
('Super Mario 64', 'It is the first Super Mario game to feature 3D gameplay, combining traditional Super Mario gameplay, visual style, and characters in a large open world. In the game, Bowser, the primary antagonist of the Super Mario franchise, invades Princess Peach''s castle and hides the castle''s sources of protection, the Power Stars, in many different worlds inside magical paintings.', 1),
('Super Mario Galaxy', 'It is the third 3D platformer game in the Super Mario series. As Mario, the player embarks on a quest to rescue Princess Peach and save the universe from Bowser, after which the player can play the game as Luigi for a more difficult experience.', 1),
('Super Mario 3D World', 'Players control Mario and his friends attempting to rescue fairy-like creatures called Sprixies from Bowser, who invades the realm known as the Sprixie Kingdom.', 1),
('Super Mario Odyssey', 'An entry in the Super Mario series, it follows Mario and his new ally Cappy—a sentient hat—as they journey across various kingdoms to save Princess Peach from Mario''s nemesis Bowser''s plans of forced marriage.', 1),
('Super Mario Bros. Wonder', 'The player controls Mario, Luigi, and their friends as they attempt to stop Bowser, who plots to take over a new land known as the Flower Kingdom after using the magical Wonder Flower to fuse himself with the kingdom''s castle.', 1),
('Pokémon Edición Roja', 'El jugador controla al protagonista desde una perspectiva aérea y recorre la región ficticia de Kanto para dominar las batallas Pokémon.', 2),
('Pokémon Edición Azul', 'El jugador controla al protagonista desde una perspectiva aérea y recorre la región ficticia de Kanto para dominar las batallas Pokémon.', 2),
('Pokémon Edición Oro', 'Los juegos contienen cien nuevos tipos de Pokémon, y ambos siguen la historia que el protagonista tiene en la región ficticia llamada Johto para llegar a ser un Maestro Pokémon.', 2),
('Pokémon Edición Plata', 'Los juegos contienen cien nuevos tipos de Pokémon, y ambos siguen la historia que el protagonista tiene en la región ficticia llamada Johto para llegar a ser un Maestro Pokémon.', 2),
('Pokémon Edición Rubí', 'Rubí y Zafiro, son dos videojuegos del género RPG pertenecientes a la tercera generación de la saga Pokémon, y los primeros en su tipo lanzados para la consola portátil Game Boy Advance de Nintendo. ', 2),
('Pokémon Edición Zafiro', 'Rubí y Zafiro, son dos videojuegos del género RPG pertenecientes a la tercera generación de la saga Pokémon, y los primeros en su tipo lanzados para la consola portátil Game Boy Advance de Nintendo. ', 2),
('Pokémon Edición Oro HeartGold', 'HeartGold y SoulSilver se sitúan en Johto, una de las regiones ficticias de la franquicia.', 2),
('Pokémon Edición Plata SoulSilver', 'HeartGold y SoulSilver se sitúan en Johto, una de las regiones ficticias de la franquicia.', 2),
('Pokémon Edición Negra', 'Al igual que en las entregas anteriores de la serie, los dos juegos siguen el viaje de un joven entrenador de Pokémon a través de la región de Unova.', 2),
('Pokémon Edición Blanca', 'Al igual que en las entregas anteriores de la serie, los dos juegos siguen el viaje de un joven entrenador de Pokémon a través de la región de Unova.', 2),
('The Legend of Zelda: Breath of the Wild', 'Set at the end of the Zelda timeline, the player controls an amnesiac Link as he sets out to save Princess Zelda and prevent Calamity Ganon from destroying the world.', 3),
('The Legend of Zelda: Tears of the Kingdom', 'The player controls Link as he searches for Princess Zelda and fights to prevent Ganondorf from destroying Hyrule.', 3),
('The Legend of Zelda: Ocarina of Time', 'The player controls Link in the realm of Hyrule on a quest to stop the evil king Ganondorf by traveling through time and navigating dungeons and an overworld.', 3),
('The Legend of Zelda: Link''s Awakening', 'ink''s Awakening is one of the few Zelda games not to take place in the land of Hyrule, and it does not feature Princess Zelda, Ganon or the Triforce relic. Instead, the protagonist Link begins the game stranded on Koholint Island, a place guarded by a whale-like deity called the Wind Fish.', 3),
('The Legend of Zelda: Twilight Princess', 'The game takes place over a century after Ocarina of Time and Majora''s Mask, in an alternate timeline from The Wind Waker. Players control Link, who tries to prevent Hyrule from being engulfed by a corrupted parallel dimension, the Twilight Realm.', 3),
('The Legend of Zelda: The Wind Waker', 'The game is set on a group of islands in a vast sea, a departure for the series. The player controls series protagonist Link as he attempts to save his sister from the sorcerer Ganon and becomes embroiled in a struggle for the Triforce, a sacred wish-granting relic.', 3),
('The Legend of Zelda: Majora''s Mask', 'The story takes place months after Ocarina of Time. Link arrives in a parallel world, Termina, and becomes embroiled in a quest to prevent the moon from crashing in three days'' time.', 3),
('Shadow the Hedgehog', 'It is a spin-off from the Sonic the Hedgehog series starring the character Shadow. It follows the amnesiac Shadow''s attempts to learn about his past during an alien invasion.', 4),
('Sonic the Hedgehog Pocket Adventure', 'The game is based on Sonic the Hedgehog 2 (1992) for the Sega Genesis, borrowing much of the stage themes and gameplay elements, but featuring unique stage layouts, elements from other Genesis Sonic the Hedgehog games, and extra game modes.', 4),
('Sonic Advance', 'Controlling a character, players are tasked with completing each level, defeating Eggman and his robot army, and collecting the seven Chaos Emeralds.', 4),
('Sonic Boom: Fire & Ice', 'Discovering an element known as Ragnium, Doctor Eggman begins harnessing it for himself, using it to create robots that can allegedly outrun Sonic and his friends while also damaging the environment in the process.', 4),
('The Murder of Sonic the Hedgehog', 'The player converses with various Sonic the Hedgehog characters to investigate Sonic''s apparent murder on Amy Rose''s birthday.', 4);

DELIMITER $$

CREATE PROCEDURE GetGames()
BEGIN
    SELECT id, name, description, image FROM game;
END $$

DELIMITER ;

DELIMITER $$

CREATE PROCEDURE GetGamesByFranchise(IN p_franchise_id INT)
BEGIN
    SELECT id, name, description, image FROM game WHERE franchise_id = p_franchise_id;
END $$

DELIMITER ;

DELIMITER $$

CREATE PROCEDURE FindGameById(IN p_id INT)
BEGIN
    SELECT id, name, description, image FROM game WHERE id = p_id;
END $$

DELIMITER ;
