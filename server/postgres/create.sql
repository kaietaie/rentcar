CREATE TABLE Users (
    UserName        varchar(50) PRIMARY KEY NOT NULL,
    UserPassword    varchar(70) NOT NULL,
    authority       varchar(20) NOT NULL,
    Enabled         integer NOT NULL DEFAULT 1           
);

CREATE TABLE Clima (
    Id_Cl           integer PRIMARY KEY NOT NULL,
    Clima           boolean
);
CREATE TABLE Fuel (
    Id_F            integer PRIMARY KEY NOT NULL,
    Fuel            varchar(32) NOT NULL
);
CREATE TABLE Transmission (
    Id_T            integer PRIMARY KEY NOT NULL,
    Transmission    varchar(32) NOT NULL
);
CREATE TABLE Cruise (
    Id_Cr           integer PRIMARY KEY NOT NULL,
    Cruise          boolean
);
CREATE TABLE Class (
    Id_C            integer PRIMARY KEY NOT NULL,
    Class           varchar(32) NOT NULL
);
CREATE TABLE Available (
    Id_Av           integer PRIMARY KEY NOT NULL,
    Available       boolean
);
CREATE TABLE Cars (
    Id_Car          serial PRIMARY KEY,
    Model           varchar(32) NOT NULL,
    Brand           varchar(32) NOT NULL,
    Engine          text,
    Transmission    integer REFERENCES Transmission(Id_T) NOT NULL,
    Fuel            integer REFERENCES Fuel(Id_F) NOT NULL,
    Consumption     real,
    Trunk           integer,
    Class           integer REFERENCES Class(Id_C) NOT NULL,
    Seats           integer,
    Clima           integer  REFERENCES Clima(Id_Cl) NOT NULL,
    Cruise          integer  REFERENCES Cruise(Id_Cr) NOT NULL,
    Available       integer REFERENCES Available(Id_Av) NOT NULL
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