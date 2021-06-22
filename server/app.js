const express = require("express")
const dotenv = require("dotenv")
const databaseConnectionHelper = require("./helpers/database/databaseConnectionHelper")
const routes = require("./routes")
const session = require("express-session")
//const mongoDbStore = require("connect-mongodb-session")(session);
const cookieParser = require("cookie-parser");
const morgan =require("morgan")
const mongoose = require("mongoose");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
dotenv.config({
    path: "./config/environment/config.env",
})
// let store = new mongoDbStore({
//     uri: databaseConnectionHelper,
//     collection: "sessions",
// });
mongoose.Promise = global.Promise;
app.use(morgan("dev"));
app.use('/uploads', express.static('uploads'))

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

app.use(cors())
app.use(cookieParser());
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

databaseConnectionHelper(app);





