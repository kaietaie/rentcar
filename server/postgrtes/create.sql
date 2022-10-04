CREATE TABLE Boolen (
    Id_B integer PRIMARY KEY NOT NULL,
    Boolen boolean
);
CREATE TABLE Clima (
    Id_Cl integer PRIMARY KEY NOT NULL,
    Id_B integer REFERENCES Boolen(Id_B) NOT NULL
);
CREATE TABLE Fuel (
    Id_F integer PRIMARY KEY NOT NULL,
    Fuel varchar(32) NOT NULL
);
CREATE TABLE Transmission (
    Id_T integer PRIMARY KEY NOT NULL,
    Transmission varchar(32) NOT NULL
);
CREATE TABLE Cruise (
    Id_Cr integer PRIMARY KEY NOT NULL,
    Id_B integer REFERENCES Boolen(Id_B) NOT NULL
);
CREATE TABLE Class (
    Id_C integer PRIMARY KEY NOT NULL,
    Class varchar(32) NOT NULL
);
CREATE TABLE Available (
    Id_Av integer PRIMARY KEY NOT NULL,
    Id integer REFERENCES Boolen(Id_B) NOT NULL
);
CREATE TABLE Cars (
    Id              serial PRIMARY KEY,
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