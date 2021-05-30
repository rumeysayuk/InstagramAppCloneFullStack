const express= require("express")
const mongoose=require("mongoose")
const app=express()
const dotenv=require("dotenv")
const databaseConnectionHelper=require("./helpers/database/databaseConnectionHelper")
const routers=require("./routes")
const cors=require("cors")

dotenv.config({
path:"./Config/environment/config.env",
})
app.use(cors())
app.use("/api",routers);
databaseConnectionHelper(app);
