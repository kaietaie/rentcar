CREATE TABLE users (
    username        varchar(50) PRIMARY KEY NOT NULL,
    userpassword    varchar(200) NOT NULL,
    userEmail       varchar(30) NOT NULL,
    authority       varchar(20) NOT NULL,
    refreshtoken    varchar(200),
    Enabled         boolean NOT NULL DEFAULT true           
);

CREATE TABLE clima (
    id_cl           integer PRIMARY KEY NOT NULL,
    clima           boolean
);
CREATE TABLE Fuel (
    id_f            integer PRIMARY KEY NOT NULL,
    fuel            varchar(32) NOT NULL
);
CREATE TABLE Transmission (
    id_t            integer PRIMARY KEY NOT NULL,
    transmission    varchar(32) NOT NULL
);
CREATE TABLE Cruise (
    id_cr           integer PRIMARY KEY NOT NULL,
    cruise          boolean
);
CREATE TABLE Class (
    id_c            integer PRIMARY KEY NOT NULL,
    class           varchar(32) NOT NULL
);
CREATE TABLE Available (
    id_av           integer PRIMARY KEY NOT NULL,
    available       boolean
);
CREATE TABLE Cars (
    id_car          serial PRIMARY KEY,
    model           varchar(32) NOT NULL,
    brand           varchar(32) NOT NULL,
    engine          text,
    transmission    integer REFERENCES transmission(id_t) NOT NULL,
    fuel            integer REFERENCES fuel(id_f) NOT NULL,
    consumption     real,
    trunk           integer,
    class           integer REFERENCES class(id_c) NOT NULL,
    seats           integer,
    clima           integer  REFERENCES clima(id_cl) NOT NULL,
    cruise          integer  REFERENCES cruise(id_cr) NOT NULL,
    available       integer REFERENCES available(id_av) NOT NULL
    );


CREATE TABLE tel (
    username        varchar(50) REFERENCES users(username) NOT NULL,
    number          varchar(16)
);

CREATE TABLE place (
    id_pl           serial PRIMARY KEY NOT NULL,
    state           varchar(100),
    city            varchar(100),
    adress          varchar(100)
);

CREATE TABLE price (
    id_price         serial PRIMARY KEY NOT NULL,
    id_car           integer REFERENCES Cars(id_car) NOT NULL,
    price            real
);

CREATE TABLE addons (
    id_addons        serial PRIMARY KEY NOT NULL,
    title            varchar(255),
    price            real
);

CREATE TABLE orders (
    id_order        serial PRIMARY KEY NOT NULL,
    username        varchar REFERENCES Users(username) NOT NULL,
    car             integer REFERENCES Cars(id_car) NOT NULL,
    date_start      DATE NOT NULL,
    date_end        DATE NOT NULL,
    place           integer REFERENCES place(id_pl) NOT NULL,
    price           real NOT NULL
);

CREATE TABLE order_addons (
    id_order         integer REFERENCES orders(id_order),
    id_addons        integer REFERENCES addons(id_addons)
);