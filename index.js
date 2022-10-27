//Entry point
const path = require("path")
require("dotenv").config()

const bodyParser = require("body-parser")
const db = require('./db.connection')
const express = require("express");
const app = express();
const Pages__router = require('./routes/pages')


app.use(bodyParser.json())
app.use(express.json())
app.use("/dist", express.static(path.join("front-end", "dist")))
app.use('/', Pages__router)

try {
    db.authenticate();
    console.log('Connection to database has been established successfully.');
    app.listen(process.env.PORT, () => {
        console.log("Server is started")
    })
} catch (error) {
    console.log("Sorry, but we have trouble with db", error);
    process.exit();
}
