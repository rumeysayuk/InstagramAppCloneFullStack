const express = require("express")
const dotenv = require("dotenv")
const routes = require("./routes")
// const session = require("express-session")
//const mongoDbStore = require("connect-mongodb-session")(session);
// const cookieParser = require("cookie-parser");
// const morgan =require("morgan")
// const mongoose = require("mongoose");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
dotenv.config({
    path: "./config/environment/config.env",
})
const databaseConnectionHelper = require("./helpers/database/databaseConnectionHelper")
const path = require("path");
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require('./lib/swagger.json');
const customErrorHandler = require("./middlewares/errors/customErrorHandler");

// let store = new mongoDbStore({
//     uri: databaseConnectionHelper,
//     collection: "sessions",
// });
// mongoose.Promise = global.Promise;
// app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))

app.use(cors())
// app.use(cookieParser());
// app.use(
//     session({
//         secret: "keyboard cat",
//         resave: false,
//         saveUninitialized: false,
//         cookie: {
//             maxAge: 3600000,
//         },
//         store: store,
//     })
//  );
// app.use(express.static(path.join(__dirname, "public")));
// app.use((req, res, next) => {
//     if (!req.session.user) {
//         return next();
//     }
//     User.findById(req.session.user._id).then((user) => {
//         req.user = user;
//         next();
//     });
// });
// app.use(csurf());
app.use("/api", routes);
app.use("/swagger", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use(customErrorHandler);
databaseConnectionHelper(app);
