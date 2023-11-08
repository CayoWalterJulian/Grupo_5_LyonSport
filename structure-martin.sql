-- MySQL Script generated by MySQL Workbench
-- Sun Oct 29 11:16:21 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema lyonsport_db
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `lyonsport_db` ;

-- -----------------------------------------------------
-- Schema lyonsport_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `lyonsport_db` DEFAULT CHARACTER SET utf8mb4 ;
USE `lyonsport_db` ;

-- -----------------------------------------------------
-- Table `lyonsport_db`.`images`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lyonsport_db`.`images` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `central_image` VARCHAR(45) NULL DEFAULT NULL,
  `image_angle1` VARCHAR(45) NULL DEFAULT NULL,
  `image_angle2` VARCHAR(45) NULL DEFAULT NULL,
  `image_angle3` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `lyonsport_db`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lyonsport_db`.`products` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `price` DECIMAL(10,0) UNSIGNED NOT NULL DEFAULT 0,
  `name` VARCHAR(45) NOT NULL,
  `id_image` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `id_image`
    FOREIGN KEY (`id_image`)
    REFERENCES `lyonsport_db`.`images` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 13
DEFAULT CHARACTER SET = utf8mb4;

CREATE INDEX `id_image` ON `lyonsport_db`.`products` (`id_image` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `lyonsport_db`.`related`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lyonsport_db`.`related` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `image` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `price` DECIMAL(10,0) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `lyonsport_db`.`products_related`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lyonsport_db`.`products_related` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `id_product` INT(11) NOT NULL,
  `id_related` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `id_product`
    FOREIGN KEY (`id_product`)
    REFERENCES `lyonsport_db`.`products` (`id`),
  CONSTRAINT `id_related`
    FOREIGN KEY (`id_related`)
    REFERENCES `lyonsport_db`.`related` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

CREATE INDEX `id_product` ON `lyonsport_db`.`products_related` (`id_product` ASC) VISIBLE;

CREATE INDEX `id_related` ON `lyonsport_db`.`products_related` (`id_related` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `lyonsport_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lyonsport_db`.`users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(200) NOT NULL,
  `profile_img` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;