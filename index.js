//To see how the final website should work, run "node index.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveCoding

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";


const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


// fetch data from server
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// sent to server
app.post("/check", (req, res) => {

});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});