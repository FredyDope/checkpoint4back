-- MySQL Script generated by MySQL Workbench
-- mer. 18 juil. 2018 11:31:46 CEST
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema movies
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema movies
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `movies` DEFAULT CHARACTER SET utf8 ;
USE `movies` ;

-- -----------------------------------------------------
-- Table `movies`.`movieDetail`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `movies`.`movieDetail` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Titre` VARCHAR(45) NULL, 
  `Sortie` DATE NULL,
  `Genre` VARCHAR(45) NULL,
  `Synopsys` TEXT(500) NULL,
  `Affiche` VARCHAR(2000) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

+----------+---------------+------+-----+---------+-------+
| Field    | Type          | Null | Key | Default | Extra |
+----------+---------------+------+-----+---------+-------+
| id       | int(11)       | NO   | PRI | NULL    |       |
| Titre    | varchar(45)   | YES  |     | NULL    |       |
| Sortie   | date          | YES  |     | NULL    |       |
| Genre    | varchar(45)   | YES  |     | NULL    |       |
| Synopsys | text          | YES  |     | NULL    |       |
| Affiche  | varchar(2000) | YES  |     | NULL    |       |
+----------+---------------+------+-----+---------+-------+

SELECT * FROM movieDetail 

SELECT * FROM movieDetail WHERE id =${id}

INSERT INTO movieDetail (Titre, Sortie, Genre, Synopsys, Affiche)
VALUES ('Blade Runner', '1982-09-15', 'Science Fiction', 'Après avoir massacré un équipage et pris le contrôle d\'un vaisseau, quatre androïdes ultra perfectionnés parviennent à s\'introduire dans Los Angeles. Rick Deckard, un agent spécial aussi appelé Blade Runner, est chargé de les éliminer. Officiellement, on ne parle pas d\'exécution, mais de retrait.', 'https://media.senscritique.com/media/000005695693/source_big/Blade_Runner.jpg')

UPDATE movieDetail SET Titre = 'Blade Runner', Sortie = '1982-09-15', Genre = 'Science Fiction', Synopsys = 'près avoir massacré un équipage et pris le contrôle d\'un vaisseau, quatre androïdes ultra perfectionnés parviennent à s\'introduire dans Los Angeles. Rick Deckard, un agent spécial aussi appelé Blade Runner, est chargé de les éliminer. Officiellement, on ne parle pas d\'exécution, mais de retrait.', Affiche = 'https://media.senscritique.com/media/000005695693/source_big/Blade_Runner.jpg'
WHERE id = ${id}

DELETE FROM movieDetail WHERE id =${id}


-- -----------------------------------------------------
-- Table `movies`.`table1`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `movies`.`table1` (
)
ENGINE = MyISAM;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
