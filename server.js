//import important libs
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//import Routes
const StationRoute = require("./src/routes/station.routes");
const evCarRoute = require("./src/routes/evCar.routes");

//create server
const app=express();

//use these with app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

//setHeaders
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept,Authorization");
    res.setHeader("Access-Control-Allow-Methods",
        "GET,POST,PATCH,DELETE");
    next();
});


//use routes
app.use("/api/station", StationRoute);
app.use("/api/evCar", evCarRoute);



const dbURL = "mongodb+srv://mohitsharma:RawatMohit@cluster0.znkojoa.mongodb.net/evApi";
// const dbURL = "mongodb://127.0.0.1:27017/evApi";

//connect to mongoose
mongoose
    .connect(dbURL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => {
        console.log("Connected to server || Server has Started");
        app.listen(process.env.PORT || 5000);
    })
    .catch(err => {
        console.log(err);
    });
