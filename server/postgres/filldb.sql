INSERT INTO users (user_name, user_surname, user_password, user_email, phone, authority)           
VALUES
('John', 'Doe', '$2b$05$s.w.MDnH8vHZdQv/aTl//.K5ULFwlA5D9tlxgaylJdp240tx/ONX2', 'doe@gss.com', '+380 067 123 45 67', 5150),
('Ammy', 'Smith', '$2b$05$xGrzeOJodwMQpi0tSI3mK.rdxFzReaZZuDUnq9bnOfb.07RQqsv0O', 'asmith@gss.com', '+380 068 123 45 67', 2001),
('Radzhash', 'Smith', '$2b$05$ICBon8YNe6O7dX58q06htu74Ff6W02v5a/oxoUw/Rn2E1lNaIr7wy', 'radsmith@gss.com', '+380 095 123 45 67', 1984);

INSERT INTO fuel
VALUES 
(1, 'benzin'),
(2, 'diesel');

INSERT INTO transmission
VALUES 
(1, 'manual'),
(2, 'automatic');

INSERT INTO class
VALUES 
(1, 'Economic'),
(2, 'Business');


INSERT INTO cars ( model, make, transmission, fuel, consumption, trunk, class, seats, clima, cruise, available )
VALUES
('Fabia', 'Skoda', '1', '2', '4.7', '330', '1', '5', false, false, true),
('Superb', 'Skoda', '2', '2', '6.2', '625', '2', '5', true, false, true),
('Passat', 'Volkswagen', '2', '2', '5.8', '650', '2', '5', true, true, true),
('Golf', 'Volkswagen', '1', '2', '3.8', '380', '2', '5', true, false, true),
('E-Class', 'Mercedes', '2', '2', '5.8', '540', '2', '5', true, true, true),
('C-Class', 'Mercedes', '1', '2', '5.7', '455', '2', '5', true, false, true);

insert into engine (car_id, engine, power)
values 
(1, '1.4 TDI', '66 kW'),
(2, '2.0 TDI', '115 kW'),
(3,  '2.0 TDI', '130 kW'),
(4,  '1.6 TDI', '85 kW'),
(5,  '1.8 TDI', '130 kW'),
(6,  '1.8 TDI', '120 kW');

insert into addons(title, description, price) 
values 
('GPS', 'It will help you to navigate in new cities', 50), 
('child chair', 'safety for your dear child', 80), 
('CD Verka Serdyuchka', 'Піду я у садочок, наїмся червʼячків', 150);

insert into price(car_id, price) values (1, 32), (2, 36), (3, 37), (4, 40), (5, 50), (6, 55);

insert into locations(state, city, street, street_number, postal_code ) 
values 
('Ukraine', 'Kyiv', 'Sviatoslava Horobrogo', '26', '02000'), 
('Ukraine', 'Lviv', 'Liubinska', '168', '79000'),
('Slovakia', 'Bratislava', 'Pestovatelska', '4', '821 04'),
('Chesko', 'Praha', 'K Letišti', '934', '161 00');