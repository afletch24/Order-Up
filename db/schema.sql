DROP TABLE IF EXISTS order_up;

CREATE DATABASE order_up_db;

USE order_up_db;

CREATE TABLE order_up (
	`id` INTEGER(11) AUTO_INCREMENT NOT NULL,
	`foodorder` VARCHAR(140) NOT NULL,
	`ready` BOOLEAN DEFAULT false,
	PRIMARY KEY(`id`)
);