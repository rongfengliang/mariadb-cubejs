CREATE DATABASE `demo`;

use `demo`;

CREATE TABLE `userapps` (
  `username` varchar(100) DEFAULT NULL,
  `userage` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO demo.userapps
(username, userage)
VALUES('dalong', '1111');
