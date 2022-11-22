INSERT INTO Boolen
VALUES 
(1, 'TRUE'),
(2, 'FALSE');

INSERT INTO Fuel
VALUES 
(1, 'Diesel'),
(2, 'Benzin');

INSERT INTO Transmission
VALUES 
(1, 'Manual'),
(2, 'Automatic');

INSERT INTO Class
VALUES 
(1, 'Economic'),
(2, 'Business');

INSERT INTO Clima
VALUES 
(1, 1),
(2, 2);

INSERT INTO Cruise
VALUES 
(1, 1),
(2, 2);

INSERT INTO Available
VALUES 
(1, 1),
(2, 2);

INSERT INTO Cars ( Model, Brand, Engine, Transmission, Fuel, Consumption, Trunk, Class, Seats, Clima, Cruise, Available )
VALUES
('Fabia', 'Skoda', '1.4 TDI, 66kW', '1', '1', '4.7', '330', '1', '5', '1', '2', '1'),
('Superb', 'Skoda', '2.0 TDI, 115kW', '2', '1', '6.2', '625', '2', '5', '1', '1', '1'),
('Passat', 'Volkswagen', '2.0 TDI, 130kW', '2', '1', '5.8', '650', '2', '5', '1', '1', '1'),
('Golf', 'Volkswagen', '1.6 TDI, 85 kW', '1', '1', '3.8', '380', '2', '5', '1', '1', '1'),
('E-Class', 'Mercedes', '1.8 TDI, 130 kW', '2', '1', '5.8', '540', '2', '5', '1', '1', '1'),
('C-Class', 'Mercedes', '1.8 TDI, 120 kW', '1', '1', '5.7', '455', '2', '5', '1', '1', '1');
