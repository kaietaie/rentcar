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

-- bellow not realised yet
-- table with addons to order, like navigator, child chair, additional bag on roof, etc.
-- CREATE TABLE Addons (
--     Id_Ad           serial PRIMARY KEY NOT NULL,
--     Addon           text
-- );

-- CREATE TABLE Users (
--     Id_Us           serial PRIMARY KEY NOT NULL,
--     UserName        text NOT NULL,
--     Email           text NOT NULL,
--     Phone           text NOT NULL,
--     UserPassword    text NOT NULL
-- );

-- CREATE TABLE Order (
--     Id_Or           serial PRIMARY KEY NOT NULL,
--     Id_Us           integer REFERENCES Users(Id_Us) NOT NULL,
--     Id_Car          integer REFERENCES Cars(Id_Car) NOT NULL,
-- );