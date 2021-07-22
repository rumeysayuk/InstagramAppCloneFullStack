const express = require("express")
const {getAllPosts, addPost, addComment, likeUndoLikeComment} = require("../controllers/postsController");
const router = express.Router();
const postImageUpload = require("../crossCuttingConcerns/middlewares/libraries/postImageUpload");
const {
   setPostsToCache,
   removePostsFromCache,
   getPostsFromCache
} = require("../crossCuttingConcerns/caching/postCacheManager");

router.get("/", setPostsToCache, getPostsFromCache, getAllPosts);

router.use(removePostsFromCache)
router.post("/addpost", postImageUpload.single("imageUrl"), addPost);
router.post("/addcomment", addComment);
router.post("/likeundolikecomment", likeUndoLikeComment);

module.exports = router;
