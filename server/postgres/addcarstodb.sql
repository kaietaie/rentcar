INSERT INTO users (username, userpassword, userEmail, authority, refreshtoken, Enabled)           
VALUES
('john Doe', '$2b$05$s.w.MDnH8vHZdQv/aTl//.K5ULFwlA5D9tlxgaylJdp240tx/ONX2', 'doe@gss.com', 5150, '', 1),
('Ammy Smith', '$2b$05$xGrzeOJodwMQpi0tSI3mK.rdxFzReaZZuDUnq9bnOfb.07RQqsv0O', 'asmith@gss.com', 2001, '', 1),
('Radzhash Smith', '$2b$05$ICBon8YNe6O7dX58q06htu74Ff6W02v5a/oxoUw/Rn2E1lNaIr7wy', 'radsmith@gss.com', 1984, '', 1);

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
(1, True),
(2, False);

INSERT INTO Cruise
VALUES 
(1, True),
(2, False);

INSERT INTO Available
VALUES 
(1, True),
(2, False);

INSERT INTO Cars ( Model, Brand, Engine, Transmission, Fuel, Consumption, Trunk, Class, Seats, Clima, Cruise, Available )
VALUES
('Fabia', 'Skoda', '1.4 TDI, 66kW', '1', '1', '4.7', '330', '1', '5', '1', '2', '1'),
('Superb', 'Skoda', '2.0 TDI, 115kW', '2', '1', '6.2', '625', '2', '5', '1', '1', '1'),
('Passat', 'Volkswagen', '2.0 TDI, 130kW', '2', '1', '5.8', '650', '2', '5', '1', '1', '1'),
('Golf', 'Volkswagen', '1.6 TDI, 85 kW', '1', '1', '3.8', '380', '2', '5', '1', '1', '1'),
('E-Class', 'Mercedes', '1.8 TDI, 130 kW', '2', '1', '5.8', '540', '2', '5', '1', '1', '1'),
('C-Class', 'Mercedes', '1.8 TDI, 120 kW', '1', '1', '5.7', '455', '2', '5', '1', '1', '1');