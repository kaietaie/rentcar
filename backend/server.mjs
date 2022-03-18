import express from "express";
import hello from "./hello.mjs";
import mongoCars from "./mongo.mjs";


const port = 5000;
const app = express();

app.get('/hello', (req, res) => {
    res.send (hello())
}); 

app.get('/mongo', (req, res) => {
    res.send(mongoCars())
});

app.listen(port, () => {
    console.log(`Server is working on localhost:${port}`)
})