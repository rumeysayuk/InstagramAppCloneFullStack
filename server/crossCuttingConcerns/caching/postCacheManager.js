const NodeCache = require("node-cache");
const myCache = new NodeCache({checkperiod: 86400});
const Post = require("../../models/Post")

const setPostsToCache = async (req, res, next) => {
   if (!myCache.get("posts")) {
      const posts = await getAllPosts();
      myCache.set("posts", [...posts]);
   }
   next();
}

const getPostsFromCache = async (req, res, next) => {
   const posts = myCache.get("posts");
   if (posts) {
      return res.status(200).json({
         success: true,
         data: posts
      })
   }
   next();
}

const removePostsFromCache = async (req, res, next) => {
   if (myCache.get("posts")) {
      myCache.del("posts");
   }
   next();
}

const getAllPosts =  async () => {
   return await Post.find()
      .populate("postedBy")
      .populate("comments.postedBy")
      .populate("comments.likes.likedBy")
}

module.exports = {
   setPostsToCache,
   removePostsFromCache,
   getPostsFromCache
}
