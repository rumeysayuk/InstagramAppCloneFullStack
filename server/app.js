const express = require("express")
const dotenv = require("dotenv")
const databaseConnectionHelper = require("./helpers/database/databaseConnectionHelper")
const routes = require("./routes")
const cors = require("cors")
const bodyParser = require("body-parser")
const session =require("express-session")
//const  path=require("path")

const app = express();

dotenv.config({
    path: "./config/environment/config.env",
})

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))

app.use(cors())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))
app.use("/api", routes);

databaseConnectionHelper(app);

