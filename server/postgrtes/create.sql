CREATE TABLE Cars (
    Id  serial,
    Model   varchar(64) NOT NULL,
    Brand   varchar(64) NOT NULL,
    Engine  text,
    Consumption integer,
    Trunk   integer,
    Seats   integer
    );

ALTER TABLE Cars ADD CONSTRAINT pkCars PRIMARY KEY (Id);

CREATE UNIQUE INDEX akCars ON Cars (Model);