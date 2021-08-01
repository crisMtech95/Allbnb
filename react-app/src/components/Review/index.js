import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Review.css'

function Review({ review }) {
    const dispatch = useDispatch()
    

    return (
    <div className="review__container">
        <p>{review.comment}</p>
    </div>
    );
}
export default Review;
