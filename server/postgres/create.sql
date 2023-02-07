CREATE TABLE users (
    user_id         serial PRIMARY KEY,
    user_name       varchar(50) NOT NULL,
    user_surname    varchar(50) NOT NULL,
    user_password   varchar(200) NOT NULL,
    user_email      varchar(30) NOT NULL,
    phone           varchar(30) NOT NULL,
    authority       integer NOT NULL check( authority=1984 or authority=2001 or authority=5150 ),
    refreshtoken    varchar(200),
    enabled         boolean NOT NULL DEFAULT true           
);


CREATE TABLE fuel (
    fuel_id         integer PRIMARY KEY,
    fuel            varchar(10) check ( fuel ='benzin' OR fuel = 'diesel')
);

CREATE TABLE transmission (
    transmission_id integer PRIMARY KEY,
    transmission    varchar(16) NOT NULL
);

CREATE TABLE class (
    class_id        integer PRIMARY KEY,
    class           varchar(32) NOT NULL
);

CREATE TABLE cars (
    car_id          serial PRIMARY KEY,
    model           varchar(32) NOT NULL,
    make            varchar(32) NOT NULL,
    transmission    integer REFERENCES transmission(transmission_id) NOT NULL,
    fuel            integer REFERENCES fuel(fuel_id) NOT NULL,
    consumption     real,
    trunk           integer,
    class           integer REFERENCES class(class_id) NOT NULL,
    seats           integer check( seats=2 OR seats=4 OR seats=5 OR seats=7 OR seats=9),
    clima           boolean,
    cruise          boolean,
    popular         boolean DEFAULT FALSE,
    available       boolean DEFAULT true
    );

CREATE TABLE engine (
    car_id          integer REFERENCES cars(car_id),
    engine          varchar(32) NOT NULL,
    power           varchar(10) 
);

CREATE TABLE locations (
    location_id     serial PRIMARY KEY NOT NULL,
    state           varchar(20),
    city            varchar(20),
    street          varchar(50),
    street_number   varchar(10),
    unit_number     varchar(10),
    postal_code     varchar(10)
);
--qty = quantity
CREATE TABLE car_location (
    car_id          integer REFERENCES cars(car_id),
    location_id     integer REFERENCES locations(location_id),
    qty             integer
);

CREATE TABLE price (
    car_id          integer REFERENCES cars(car_id),
    price           real
);

CREATE TABLE addons (
    addons_id        serial PRIMARY KEY,
    title            varchar(255),
    description      text,
    price            real
);

CREATE TABLE orders (
    order_id        serial PRIMARY KEY,
    user_id         integer REFERENCES users(user_id) NOT NULL,
    car             integer REFERENCES cars(car_id) NOT NULL,
    start_date      DATE NOT NULL,
    end_date        DATE NOT NULL,
    location        integer REFERENCES locations(location_id) NOT NULL,
    price           real NOT NULL CHECK (price > 0),
    total           real,
    archivated      boolean DEFAULT FALSE
);

CREATE TABLE order_addons (
    order_id         integer REFERENCES orders(order_id),
    addons_id        integer REFERENCES addons(addons_id),
    qty              integer 
);
-- SELECT sum(ad.price * oa.qty) as addons_total
-- from orders o
-- inner join order_addons oa
-- on o.id_order = oa.id_order
-- inner join addons ad
-- on oa.id_addons = ad.id_addons

-- update orders
-- set addons_total = <what the above query returns>
-- where id_order = <your order id>