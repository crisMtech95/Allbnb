import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReactStars from 'react-rating-stars-component'
import './Review.css'
import { delReviewThunk, editReviewThunk } from '../../store/reviews'


function Review({ review }) {
    const dispatch = useDispatch()
    const [showEditReview, setShowEditReview] = useState(false)
    const [showEditBtn, setShowEditBtn] = useState(false)
    const [comment, setComment] = useState(review.comment)
    const [stars, setStars] = useState(review.stars)
    const sessionUser = useSelector(state =>  state.session.user)


    return (
    <div className="review__container">
        {sessionUser.id === review.userId &&
                    <div className="review__toggleBtn">
                        <button onClick={() => setShowEditReview(!showEditReview)} className="post__3dotsBtn">
                            <div atl="You'll never know" className="post__3dotsIcon"/>
                        </button>
                        {showEditReview &&
                            <div className="review__editForm">
                                <button
                                    onClick={() => {
                                        setShowEditBtn(true)
                                        setShowEditReview(false)
                                    }}
                                    >Edit Review</button>
                                <button
                                    onClick={() => {
                                        dispatch(delReviewThunk({"id": review.id}))
                                        setShowEditReview(false)
                                    }}
                                >Delete Review</button>
                            </div>
                        }
                    </div>
                }
        <ReactStars
            count={5}
            value={stars}
            onChange={(currentStars) => setStars(currentStars)}
            size={30}
            edit={showEditBtn}
            // isHalf={true}
        ></ReactStars>
        <textarea className="review__commentTextArea"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            disabled={!showEditBtn}
            ></textarea>
        {showEditBtn &&
            <div className="review__submitDiv">
                <button
                    onClick={() => {
                        dispatch(editReviewThunk({
                            "id": review.id,
                            "comment": comment,
                            "stars": stars
                        }))
                        setShowEditReview(false)
                        setShowEditBtn(false)
                    }}
                >
                    Submit Changes
                </button>
            </div>
        }
    </div>
    );
}
export default Review;