const mongoose = require("mongoose");

const databaseConnectionHelper = () => {
   mongoose
      .connect(process.env.MONGO_URL, {
         useNewUrlParser: true,
         useFindAndModify: false,
         useCreateIndex: true,
         useUnifiedTopology: true,
      })
      .then(() => {
         console.log("mongodb connection successful");
      })
      .catch((err) => {
         console.error(err);
      });
}

module.exports = databaseConnectionHelper;
