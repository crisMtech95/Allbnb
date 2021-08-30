import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReservationForm from '../ReservationForm';
import { getReservationsThunk } from '../../store/reservations';
import reviewsReducer, { getReviewsThunk } from '../../store/reviews';
import { getSinglePostThunk } from '../../store/post';
import { getImagesThunk } from '../../store/images';
import Review from '../Review'
import './SinglePost.css'
import Map from '../Map';
import ReactStars from 'react-rating-stars-component';
import { addReviewThunk } from '../../store/reviews'
import AddImg from '../AddImg';
import Modal from 'react-modal'
import { delImageThunk } from '../../store/images'
import Image from '../Image';
import DelImgModal from '../DelImgModal';

function SinglePost() {
    const dispatch = useDispatch()
    const [starsCount, setStarsCount] = useState(0)
    const [showAddImgModal, setShowAddImgModal] = useState(false)
    const [showDelModal, setShowDelModal] = useState(false)
    const sessionUser = useSelector(state => state.session.user)
    const reviewsList = useSelector(state => Object.values(state.reviews))
    const imagesList = useSelector(state => Object.values(state.images))
    const reservations = useSelector(state => Object.values(state.reservations))
    const { postId }  = useParams();
    const [foundRes, setFoundRes] = useState(false)
    const [reviewAvg, setReviewAvg] = useState(0)
    const post = useSelector(state => state.posts && state.posts[postId])
    const [comment, setComment] = useState("")

    useEffect(async() => {
            await dispatch(getSinglePostThunk(postId))
            await dispatch(getReservationsThunk(postId))
            await dispatch(getReviewsThunk(postId))
            await dispatch(getImagesThunk(postId))
        }, []);

    useEffect(() => {
        if (reservations && sessionUser) {
            reservations.forEach(obj =>{
                if (obj.userId === sessionUser.id) {
                    setFoundRes(true)
                } else {
                    setFoundRes(false)
                }

            })
        }
    },  [reservations])

    useEffect(() => {
        if (reviewsList.length) {
            let total = reviewsList.reduce((acc, el) => {
                return acc + el.stars
            }, reviewsList[0].stars)
            let average = Math.floor(total / reviewsList.length - 1)

            setReviewAvg(average)
            console.log(reviewAvg)
        }
    }, [reviewsList])

    const customModalStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
        };

    return (
    <div className="SP__mainContainer">
        <div className="SP__container">
            <div className="SP__imagesBigCon">
                    {sessionUser && sessionUser.id === post?.userId &&
                    <button
                        className="SP__addImgDiv"
                        onClick={() => setShowAddImgModal(!showAddImgModal)}
                        >
                        <div className="SP__addImgIcon" />
                    </button>
                    }
                    {showAddImgModal &&
                        <AddImg postId={postId}
                                showAddImgModal={showAddImgModal}
                                setShowAddImgModal={setShowAddImgModal}
                                customModalStyles={customModalStyles}/>
                    }
                {imagesList?.map((image, ind) => (
                    <Image key={ind} ind={ind} image={image} post={post}/>
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
                    <ReservationForm postId={postId} />
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
                    {reviewAvg > 0 &&
                        <ReactStars
                            count={5}
                            size={30}
                            edit={false}
                            value={reviewAvg}

                            />
                    }
                </div>
                {foundRes && reservations.length > 0 &&
                <div className="SP__reviewFormDiv">
                <div className="SP__reviewFormDiv2">
                    <form className="SP__reviewForm">
                        <h5>How was this experience?</h5>
                        <div className="SP_reviewStarsDiv">
                            <ReactStars
                                count={5}
                                size={30}
                                edit={true}
                                value={starsCount}
                                onChange={(newRating) => {
                                    setStarsCount(newRating)
                                }}
                                />{"(required)"}
                        </div>
                        <textarea
                            className="SP__reviewTextA"
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                            required
                            >
                        </textarea>
                        <button className="SP__resBtn"
                            onClick={(e) => {
                                if (comment.length > 0 && starsCount > 0) {
                                    e.preventDefault()
                                    dispatch(addReviewThunk({
                                        "userId": sessionUser.id,
                                        "postId": postId,
                                        "comment": comment,
                                        "stars": starsCount}))
                                        setStarsCount(0)
                                        setComment("")
                                        }
                                    }
                                }
                        >Leave a Review!</button>
                    </form>
                </div>
                </div>
                }
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
