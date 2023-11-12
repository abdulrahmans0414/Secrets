//To see how the final website should work, run "node index.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveCoding

import express from "express";


const app = express();
const port = 3000;


app.get("/", (req, res) => {
    res.json("success");
  });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});