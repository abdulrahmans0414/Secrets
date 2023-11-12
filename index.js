//To see how the final website should work, run "node index.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveCoding

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { config } from "dotenv";
config();


const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();


var userIsAuthorised = false;

// Apply the middleware 
app.use(bodyParser.urlencoded({ extended: true }));

 // Middleware to check the password
function passwordCheck(req, res, next) {
    const password = req.body["password"];
    if (password === "ILoveCoding") {
        userIsAuthorised = true;
    }
    next();
}
app.use(passwordCheck);


// fetch data from server
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// sent to server
app.post("/check", (req, res) => {
    if (userIsAuthorised) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.sendFile(__dirname + "/public/index.html");
        //Alternatively res.redirect("/");
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});