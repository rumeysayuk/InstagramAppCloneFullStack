const multer = require("multer");
const path = require("path");
const CustomError = require("../../helpers/error/CustomError");

const fileFilter = (req, file, cb) => {
   let allowedMimeTypes = ["images/jpg", "image/gif", "image/jpeg", "image/png"];
   if (!allowedMimeTypes.includes(file.mimetype)) {
      return cb(
         new CustomError("Please Provide a Valid Image File!", 415),
         false
      );
   }
   return cb(null, true);
};

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      const rootDir = path.dirname(require.main.filename);
      cb(null, path.join(rootDir, "/public/postImages"));
   },
   filename: function (req, file, cb) {
      const extension = file.mimetype.split("/")[1];
      req.savedPostImage = `image_${Math.random().toString(36).substr(2, 9)}.${extension}`;
      cb(null, req.savedPostImage);
   },
});

const postImageUpload = multer({ storage, fileFilter });

module.exports = postImageUpload;
