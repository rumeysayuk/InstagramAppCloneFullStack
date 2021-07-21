import React, {useEffect, useState} from 'react';
import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfilePosts from "../../components/profile/ProfilePosts";
import {useSelector} from "react-redux";

const Profile = () => {
   const [posts, setPosts] = useState([])
   const {authData} = useSelector(state => state.auth);

   useEffect(() => {
      // apiye gidip kullanıcının postlşarı alınacak ve state set edilecek.
   }, [authData])

   return (
      <div>
         <ProfileHeader/>
         <ProfilePosts posts={posts}/>
      </div>
   )
}

export default Profile;
