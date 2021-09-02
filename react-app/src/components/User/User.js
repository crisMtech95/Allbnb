import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserPostsThunk } from '../../store/post'
// import { getReviewsThunk } from '../../store/reviews';
import { getUserReservationsThunk } from '../../store/reservations';
import Reservation from '../Reservation'
import './User.css'
import Post from '../Post';
import ReactStars from 'react-rating-stars-component'


function User() {
  const dispatch = useDispatch()
  const [user, setUser] = useState({});
  // const [userPost, setUserPost] = useState({});
  const [contentShow, setContentShow] = useState("content")
  const { userId }  = useParams();
  const userPosts = useSelector(state => Object.values(state.posts))
  const userRes = useSelector(state => Object.values(state.reservations))
  const [rating, setRating] = useState(null)
  const [uniqueType, setUniqueType] = useState([])

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

  useEffect(() => {
    if (userPosts.length) {
      let length = 0;
      let total = 0;
      userPosts.forEach(post => {
        if (!uniqueType.includes(post.category.type)) {
            uniqueType.push(post.category.type)
        }
        post.reviews.forEach(el => {
          total += el.stars
          length++
        })
      })
      setRating(total / length)
      // console.log(rating)
    }
  }, [userPosts])

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
            <div>
            {rating &&
              <ReactStars
                count={5}
                value={rating}
                size={24}
                edit={false}/>
            }
            </div>
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
      {contentShow === "content" && user.content &&
        <div>
          <div className="user__contentMainDiv">
            <div className="user__contentDiv">
              <div className="user__bioIconDivbg">
                <div className="user__bioIconDiv">
                  <div className="user__bioIconImg user__contentImg"></div>
                </div>
              </div>
              <div className="user__content">
                <div className="user__contentTitleDiv">
                  <div className="user__contentTitle">Description</div>
                </div>
                <div className="user__pTagDiv">

                  <p>
                    {user.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="user__contentMainDiv">
            <div className="user__contentDiv">
              <div className="user__bioIconDivbg">
                <div className="user__bioIconDiv">
                  <div className="user__bioIconImg user__typeImg"></div>
                </div>
              </div>
              <div className="user__content">
                <div className="user__contentTitleDiv">
                  <div className="user__contentTitle">Items types</div>
                </div>
                <div className="user__pTagDiv">
                  {userPosts && uniqueType.length > 0 && uniqueType.map((type, i) => (
                    <div key={i} className="user__postTypes">
                      <p>{type}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="user__contentMainDiv">
            <div className="user__contentDiv">
              <div className="user__bioIconDivbg">
                <div className="user__bioIconDiv">
                  <div className="user__bioIconImg user__userImg"></div>
                </div>
              </div>
              <div className="user__content">
                <div className="user__contentTitleDiv">
                  <div className="user__contentTitle">Contact</div>
                </div>
                <div className="user__pTagDiv">
                  <strong>email :</strong> <p>{user.email}</p>
                  <strong>phone Number :</strong><p>N/A</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      {contentShow === "reservations" &&
        <div className="user__reservationsBigContainer">
          {userRes?.map(reservation => (
            <Reservation key={reservation.id} reservation={reservation}/>
          ))}
        </div>
      }
      {contentShow === "items" &&
        <div className="user__postsBigContainer">
          {userPosts?.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      }
    </div>



  );
}
export default User;


