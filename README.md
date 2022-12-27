# Creating React App for rentcar company

This project is longterm order from my friend. He planing to start rentcar buziness. 

### What I`m using:
* React JS
* React Router
* Google Maps
* Firebase Auth
* Material UI
* NodeJS 
* Express
* PostgreSQL
* MongoDB + Mongoose // commented, not used

### How to start project?

1. clone repo in your terminal with command `gh repo clone kaietaie/rentcar`
2. install NodeJS if you don`t have it yet
3. `cd` into `rentcar` folder and type `npm install`
4. run backend-server type `npm run serverStart`
5. run the React project type `npm start`

### Install PostgreSQL
1. Download installation from official website [https://www.postgresql.org/download](https://www.postgresql.org/download/)
2. Create user and database
    * `sudo su - postgres` - login postgres user
    * `psql` go into PostgreSQL terminal
    * `\password postgres` to make password for user postgres
    * `CREATE USER kaieta WITH PASSWORD 'kaieta';` create new user
    * `CREATE DATABASE carrentdb OWNER kaieta;` create new database
    * `\quit` for exit
3. Execute files with SQL script for creating tables and adding data (files located in /server/postgres/)
    1. `sudo psql -U kaieta -d carrentdb -a -f /server/postgres/create.sql`
    2. `sudo psql -U kaieta -d carrentdb -a -f /server/postgres/addcarstodb.sql`
4. Install dependencies (include `pg` module for working with PostgreSQL) `npm i`

## Security file needed:
This file should be in root folder. And looks like this: 
* `.env` with Firebase data connection

```
    REACT_APP_FIREBASE_API_KEY=
    REACT_APP_FIREBASE_AUTH_DOMAIN=
    REACT_APP_FIREBASE_PROJECT_ID=
    REACT_APP_FIREBASE_STORAGE_BUCKET=
    REACT_APP_FIREBASE_MEMESSEGING_SENDER_ID=
    REACT_APP_FIREBASE_APP_ID=
    REACT_APP_FIREBASE_MEASUREMENT_ID=
    REACT_APP_MAP_API_KEY=
```

To get new keys you should make new project in Firebase
