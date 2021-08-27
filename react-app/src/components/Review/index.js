import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReactStars from 'react-rating-stars-component'
import './Review.css'
import { delReviewThunk, editReviewThunk } from '../../store/reviews'


function Review({ review }) {
    const dispatch = useDispatch()
    const focusTextarea = useRef();
    const [showEditReview, setShowEditReview] = useState(false)
    const [showEditBtn, setShowEditBtn] = useState(false)
    const [disableSubmit, setDisableSubmit] = useState(false)
    const [comment, setComment] = useState(review.comment)
    const [stars, setStars] = useState(review.stars)
    const sessionUser = useSelector(state =>  state.session.user)

    useEffect(() => {
        if(focusTextarea.current) focusTextarea.current.focus();
    }, [focusTextarea, showEditBtn]);

    useEffect(() => {
        if (comment.length) {
            setDisableSubmit(false)
        } else if (!comment.length) {
            setDisableSubmit(true)
        }
    }, [comment])

    return (
        <div className="review__container">
        {sessionUser && sessionUser.id === review.userId &&
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
        <form>
        <ReactStars
            count={5}
            value={stars}
            onChange={(currentStars) => setStars(currentStars)}
            size={30}
            edit={showEditBtn}
            required
            // isHalf={true}
        ></ReactStars>
        <textarea className="review__commentTextArea"
            ref={focusTextarea}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            disabled={!showEditBtn}
            required
            type="text"
            ></textarea>
        {showEditBtn &&
            <div className="review__submitDiv">
                <button disabled={disableSubmit}
                    onClick={() => {
                        if (comment.length) {
                            dispatch(editReviewThunk({
                                "id": review.id,
                                "comment": comment,
                                "stars": stars
                            }))
                        }
                        setShowEditReview(false)
                        setShowEditBtn(false)
                    }}
                >
                    Submit Changes
                </button>
            </div>
        }

        </form>
    </div>
    );
}
export default Review;
