import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserPostsThunk } from '../../store/post'
import './User.css'
import Post from '../Post';

function User() {
  const dispatch = useDispatch()
  const [user, setUser] = useState({});
  const [userPost, setUserPost] = useState({});
  const { userId }  = useParams();
  const userPosts = useSelector(state => Object.values(state.posts))
  console.log(userPosts)

  useEffect(() => {
    if (!userId) return;

    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      dispatch(getUserPostsThunk(userId))
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <div className="mainContainer">
      <div>
        <strong>User Id</strong> {userId}
        <strong>Username</strong> {user.username}
        <strong>Email</strong> {user.email}
      </div>
      <div className="user__postsBigContainer">
        {userPosts?.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>



  );
}
export default User;
