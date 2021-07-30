import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Post.css'
import EditPost from '../EditPost';
import { delPostThunk } from '../../store/post'

function Post({ post }) {
    const dispatch = useDispatch()
    const [showEditMenu, setShowEditMenu] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)
    const sessionUser = useSelector(state => state.session.user)

    return (
        <div className="post__container">
            {/* <a> */}
                {sessionUser.id === post.userId &&
                    <div className="post__toggleBtn">
                        <button onClick={() => setShowEditMenu(!showEditMenu)} className="post__3dotsBtn">
                            <div atl="You'll never know" className="post__3dotsIcon"/>
                        </button>
                        {showEditMenu &&
                            <div className="post__btnsDiv">
                                <button
                                    onClick={() => setShowEditModal(!showEditModal)}
                                >Edit Post</button>
                                <button onClick={() => dispatch(delPostThunk(post))}>Delete</button>
                                {showEditModal && <EditPost post={post}/>}
                            </div>
                        }
                    </div>
                }
                <div className="post__imageDiv">
                    <img alt="You'll never know" src={post?.images[0]?.imageUrl} className="post__image"/>
                </div>
                <div className="post__contentContainer">
                    <div className="post__h3Div">
                        <h3>{post?.state}</h3>
                    </div>
                    <div className="post__pDiv">
                        <p>{post?.content}</p>
                    </div>
                    <div className="post__h4Div">
                        <h4>{post?.city}</h4>
                    </div>
                    <div className="post__h4Div">
                        <h4>{post?.address}</h4>
                    </div>
                    <div className="post__h4Div">
                        <h4>{post?.price}</h4>
                    </div>

                </div>
            {/* </a> */}
        </div>
    )
}
export default Post;
