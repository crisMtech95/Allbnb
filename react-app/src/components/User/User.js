import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserPostsThunk } from '../../store/post'
// import { getReviewsThunk } from '../../store/reviews';
import { getUserReservationsThunk } from '../../store/reservations';
import Reservation from '../Reservation'
import './User.css'
import Post from '../Post';


function User() {
  const dispatch = useDispatch()
  const [user, setUser] = useState({});
  // const [userPost, setUserPost] = useState({});
  const [contentShow, setContentShow] = useState("content")
  const { userId }  = useParams();
  const userPosts = useSelector(state => Object.values(state.posts))
  const userRes = useSelector(state => Object.values(state.reservations))

  useEffect(() => {
    document.title = "Allbnb - user"
  }, [])

  useEffect(() => {
    // if (!userId) return;

    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      dispatch(getUserPostsThunk(userId))
      dispatch(getUserReservationsThunk(userId))
      // dispatch(getReviewsThunk({"postId": 1}))
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }



  return (
    <div className="mainContainer">
      <div className="user__upperContainer">
        <div className="user__upperGlass">
          <div className="user__upperInfo">
            <img className="user__upperImg" src={user.imageUrl}/>
            <div>{user.fullName}</div>
            <div className="user__upperShowMenu">
              <div
                onClick={() => setContentShow("content")}
                className="user__btnsDiv"
                >
                <div>Content</div>
                <div className={contentShow === "content" ? "user__btnsUnderlines" : "" }></div>
              </div>
              <div
                onClick={() => setContentShow("items")}
                className="user__btnsDiv"
                >
                <div>Items</div>
                <div className={contentShow === "items" ? "user__btnsUnderlines" : "" }></div>
              </div>
              <div
                onClick={() => setContentShow("reservations")}
                className="user__btnsDiv"
                >
                <div>Reservations</div>
                <div className={contentShow === "reservations" ? "user__btnsUnderlines" : "" }></div>
              </div>
            </div>
          </div>
          <div className="user__upperCircle circle2"></div>
          <div className="user__upperCircle circle1"></div>
        </div>

      </div>
      <div className="user__reservationsBigContainer">
        {userRes?.map(reservation => (
          <Reservation key={reservation.id} reservation={reservation}/>
        ))}
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
