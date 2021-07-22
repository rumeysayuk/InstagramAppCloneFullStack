const CustomError = require("../../helpers/error/CustomError");
const customErrorHandler = (err, req, res, next) => {
   let customError = err;

   if (err.status === 400){
      customError = new CustomError(err.message, 400);
   }
   if (err.code === 11000) {
      //Duplicate Key
      customError = new CustomError("Duplicate Key Found : Check Your İnput",400);
   }
   if (err.name === "SyntaxError") {
      customError = new CustomError("Unexpected Syntax", 400);
   }
   if (err.name === "ValidationError") {
      customError = new CustomError(err.message, 400);
   }
   if (err.name === "CastError") {
      customError = new CustomError("Please Provide a Valid id", 400);
   }

  res.status(customError.status || 500).send({
      success: false,
      message: customError.message,
   });
};

module.exports = customErrorHandler;
