import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReservationForm from '../ReservationForm';
import { getReservationsThunk } from '../../store/reservations';
import { getReviewsThunk } from '../../store/reviews';
import Review from '../Review'
import './SinglePost.css'
import Map from '../Map';
import ReactStars from 'react-rating-stars-component';
import { addReviewThunk } from '../../store/reviews'

function SinglePost() {
    const dispatch = useDispatch()
    const [starsCount, setStarsCount] = useState(0)
    const sessionUser = useSelector(state => state.session.user)
    const reviewsList = useSelector(state => Object.values(state.reviews))
    // const reservationsList = useSelector(state => Object.values(state.reservation))
    const { postId }  = useParams();
    const [post, setPost] = useState("")
    const [comment, setComment] = useState("")
    // console.log("AMOUNT OF STARS SELECTED", starsCount)
    // console.log(post)
    useEffect(async() => {
        if (postId) {
            const res = await fetch(`/api/posts/${postId}`)
            const data = await res.json()
            setPost(data)
            // dispatch(getReservationsThunk(postId))
            dispatch(getReviewsThunk(postId))
        }

    }, []);


    useEffect(() => {
        console.log(starsCount)
    }, [starsCount])

    return (
    <div className="SP__mainContainer">
        <div className="SP__container">
            <div className="SP__imagesBigCon">
                    {sessionUser.id === post?.userId &&
                    <button className="SP__addImgDiv">
                        <div className="SP__addImgIcon"/>
                    </button>
                    }
                {post?.images?.map((image, ind) => (
                    <div key={ind} className="SP__imageDiv" id={`SP__imageDiv${ind}`}>
                        <img src={image.imageUrl} className={`SP__image`} />
                    </div>
                ))}
            </div>
            <div className="SP__splittingCon">
                <div className="SP__infoCon">
                    <h2>{post?.title}</h2>
                    <div className="SP__imgagesDiv" id="SP__imgsfirstDiv">
                        <div className="SP__stateImg SP__images"></div>
                        <h2>{post?.state}</h2>
                    </div>
                    <div className="SP__imgagesDiv">
                        <div className="SP__addressImg SP__images"></div>
                        <p>{post?.address + " - " }</p>
                        <h3>{"  " + post?.city}</h3>
                    </div>
                    <div className="SP__imgagesDiv">
                        <div className="SP__contentImg SP__images"></div>
                        <p>{post?.content}</p>
                    </div>
                </div>

                <div className="SP__resFormCon">
                    <div>Click twice for start and ending date</div>
                    <ReservationForm />
                    <button className="SP__resBtn">New Reservation</button>
                </div>
            </div>
        {/* <div>
        <strong>User Id</strong> {userId}
        <strong>Username</strong> {user.username}
        <strong>Email</strong> {user.email}
        </div> */}
            <div className="SP__reviewsMainCon">
                <div className="SP__reviewH2Div">
                    <h2>Reviews</h2>
                </div>
                <div className="SP__reviewFormDiv">
                <div className="SP__reviewFormDiv2">
                    <ReactStars
                        count={5}
                        size={30}
                        edit={true}
                        value={starsCount}
                        onChange={(newRating) => {
                            setStarsCount(newRating)
                        }}
                    />
                    <textarea
                        className="SP__reviewTextA"
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        >
                    </textarea>
                    <button
                        onClick={() => {
                            dispatch(addReviewThunk({
                                "userId": sessionUser.id,
                                "postId": post.id,
                                "comment": comment,
                                "stars": starsCount}))
                            setStarsCount(0)
                            setComment("")
                            }}
                    >Leave a Review!</button>
                </div>
                </div>
                <div className="SP__reviewContainer">
                    {reviewsList?.map(el => (
                        <Review key={el.id} review={el}/>
                    ))}
                </div>
            </div>
                <Map />

        </div>
    </div>
    );
}
export default SinglePost;
