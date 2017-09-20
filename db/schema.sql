CREATE DATABASE orderUp_db;

USE orderUp_db;

CREATE TABLE orderUp (
	`id` INTEGER(11) AUTO_INCREMENT NOT NULL,
	`order` VARCHAR(140) NOT NULL,
	`ready` BOOLEAN DEFAULT false,
	`date` TIMESTAMP,
	PRIMARY KEY(`id`)
);