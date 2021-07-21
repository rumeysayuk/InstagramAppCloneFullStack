import React from 'react';
import ProfilePost from "./ProfilePost";

const ProfilePosts = ({posts}) => {
   return (
      <div>
         Profile Posts
         {posts.map((post, index) => (
            <ProfilePost key={index} post={post}/>
         ))}
      </div>
   )
}

export default ProfilePosts;
