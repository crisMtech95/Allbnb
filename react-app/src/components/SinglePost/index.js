import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReservationForm from '../ReservationForm';
import { getReservationsThunk } from '../../store/reservations';
import { getReviewsThunk } from '../../store/reviews';
import './SinglePost.css'


function SinglePost() {
    const dispatch = useDispatch()
    const { postId }  = useParams();
    const [post, setPost] = useState("")

    console.log(post)
    useEffect(async() => {
        if (postId) {
            const res = await fetch(`/api/posts/${postId}`)
            const data = await res.json()
            setPost(data)
            // dispatch(getReservationsThunk(postId))
            // dispatch(getReviewsThunk(postId))
        }

    }, []);


    return (
    <div className="SP__mainContainer">
        <div className="SP__container">
            <div className="SP__imagesBigCon">
                {post?.images?.map((image, ind) => (
                    <div key={ind} className="SP__imageDiv">
                        <img src={image.imageUrl} className="SP__image"></img>/>
                    </div>
                ))}
            </div>
            <div className="SP__splittingCon">
                <div className="SP__infoCon">
                    <h1>{post?.state}</h1>
                    <h3>{post?.city}</h3>
                    <p>{post?.address}</p>
                    <p>{post?.content}</p>
                </div>

                <div className="SP__resFormCon">
                    <div>Click twice for start and ending date</div>
                    <ReservationForm />
                    <button>New Reservation</button>
                </div>
            </div>
        {/* <div>
        <strong>User Id</strong> {userId}
        <strong>Username</strong> {user.username}
        <strong>Email</strong> {user.email}
        </div> */}

        </div>
    </div>
    );
}
export default SinglePost;
