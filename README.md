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
* MongoDB + Mongoose

### How to start project?

1. clone repo in your terminal with command `gh repo clone kaietaie/rentcar`
2. `cd` into the new folder and type `npm install`
3. run backend-server type `npm run serverStart`
4. run the React project type `npm start`

## Security files needed:
* `.env` with Firebase data and MongoDB connection
* `mongo api key.md` with MongoDB keys

This files should be in root folder. And looks like this: 

`.env`
```
    REACT_APP_FIREBASE_API_KEY=
    REACT_APP_FIREBASE_AUTH_DOMAIN=
    REACT_APP_FIREBASE_PROJECT_ID=
    REACT_APP_FIREBASE_STORAGE_BUCKET=
    REACT_APP_FIREBASE_MEMESSEGING_SENDER_ID=
    REACT_APP_FIREBASE_APP_ID=
    REACT_APP_FIREBASE_MEASUREMENT_ID=
    REACT_APP_MAP_API_KEY=
    EXPRESS_NODE_ATLAS_URI=
```

`mongo api key.md`

```
    ## Public Key
    your key here
    
    ## Private Key
    your key here
```

To get new keys you should make new project in Firebase and MongoDB 
