import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReservationForm from '../ReservationForm';
import { getReservationsThunk } from '../../store/reservations';
import { getReviewsThunk } from '../../store/reviews';
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
    const { postId }  = useParams();
    // const [post, setPost] = useState()
    const post = useSelector(state => {
        console.log(state.posts)
        console.log("POST ID", postId)
        // debbuger
       return  state.posts && state.posts[postId]
    })
    const [comment, setComment] = useState("")

    useEffect(async() => {
            await dispatch(getSinglePostThunk(postId))
            // setPost(postsList[postId])
            dispatch(getReservationsThunk(postId))
            dispatch(getReviewsThunk(postId))
            dispatch(getImagesThunk(postId))
        }, []);

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
                    {sessionUser.id === post?.userId &&
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
                                "postId": postId,
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
