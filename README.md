# Creating React App for rentcar company

This is our trainee project for improve skills.
This is the website of rent car company 

### What I`m using:
* NodeJS 
* Express
* React
* React Router
* PostgreSQL
* Authentication with JWT 
* Google Maps
* Material UI

## How to start project?

1. clone repo in your terminal 
2. install [NodeJS](https://nodejs.org/) if you don`t have it yet
3. `cd` into `rentcar` folder and type `npm install`
4. run backend-server type `npm run server`
5. run the React project type `npm start`

## Install PostgreSQL
1. Download installation from official website [https://www.postgresql.org/download](https://www.postgresql.org/download/)
2. Create user and database
    * `sudo su - postgres`
    * `psql` go into PostgreSQL terminal
    * `\password postgres` to make password for user postgres
    * `CREATE USER kaieta WITH PASSWORD 'kaieta';` create new user
    * `CREATE DATABASE carrentdb OWNER kaieta;` create new database
    * `\q` for exit
3. Execute files with SQL script for creating DB and adding data (files located in /server/postgres/). `cd` to `server/postgres/` and run this commands:
    1. `sudo psql -U kaieta -d carrentdb -a -f ./server/postgres/create.sql` (1st pass your sudo, 2nd pass `kaieta`)
    2. `sudo psql -U kaieta -d carrentdb -a -f ./server/postgres/filldb.sql` (1st pass your sudo, 2nd pass `kaieta`)

    If you have a problem "Peer authentication failed" go to [stackoverflow 1st answer](https://stackoverflow.com/questions/18664074/getting-error-peer-authentication-failed-for-user-postgres-when-trying-to-ge)
4. Install dependencies (include `pg` module for working with PostgreSQL) `npm i`

## Hiden files needed:
This files should be in root folder. And looks like this: 
* `.env`

```
    REACT_APP_MAP_API_KEY=
    HOST=
    PORT=
    POSTGRES_PORT=
    POSTGRES_DB=
    POSTGRES_USER=
    POSTGRES_PASS=
```
Enter here yours values.
