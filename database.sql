-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE groceries (
	id SERIAL PRIMARY KEY,
	name VARCHAR(80) NOT NULL,
	quantity FLOAT(20) NOT NULL,
	unit INT NOT NULL,
	purchased BOOLEAN default false
);

INSERT INTO groceries(name, quantity, unit)
VALUES ('tomatoes', 4.3, 2),('bread',5, 2);

SELECT * FROM groceries;

DROP TABLE groceries;