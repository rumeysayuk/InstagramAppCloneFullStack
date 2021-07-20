const express = require("express")
const {getAllPosts, addPost, addComment, likeUndoLikeComment} = require("../controllers/postsController");
const router = express.Router();
const postImageUpload = require("../middlewares/libraries/postImageUpload");

router.get("/", getAllPosts);
router.post("/addpost", postImageUpload.single("imageUrl"), addPost);
router.post("/addcomment", addComment);
router.post("/likeundolikecomment", likeUndoLikeComment);

module.exports = router;
