import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Post.css'
import EditPost from '../EditPost';
import { delPostThunk } from '../../store/post'

function Post({ post }) {
    const dispatch = useDispatch()
    const [showEditMenu, setShowEditMenu] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)
    const sessionUser = useSelector(state => state.session.user)
    const editMenuRef = useRef()

    useEffect(() => {
        const clickOut = e => {
            if (!editMenuRef?.current?.contains(e.target)) {
                setShowEditMenu(false)
            }
        }
        document.addEventListener("mousedown", clickOut)

        return () => {
            document.removeEventListener("mousedown", clickOut)
        }
    }, [])


    return (
        <div className="post__container">
            {/* <a> */}
                {sessionUser && sessionUser.id === post.userId &&
                    <div className="post__toggleBtn">
                        <button onClick={() => setShowEditMenu(!showEditMenu)} className="post__3dotsBtn">
                            <div atl="You'll never know" className="post__3dotsIcon"/>
                        </button>
                        {showEditMenu &&
                            <div className="post__btnsDiv" ref={editMenuRef}>
                                <button
                                    onClick={() => setShowEditModal(!showEditModal)}
                                >Edit Post</button>
                                <button onClick={() => dispatch(delPostThunk(post))}>Delete</button>
                            </div>
                        }
                        {showEditModal && <EditPost post={post} setShowEditModal={setShowEditModal}/>}
                    </div>
                }
                <Link to={`/posts/${post.id}`}>
                    <div className="post__imageDiv">
                        <img alt="You'll never know" src={post?.images[0]?.imageUrl} className="post__image"/>
                    </div>
                </Link>
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
                    <div className="post__priceDiv">
                        <div>${post?.price}/</div><span>24hrs</span>
                    </div>

                </div>
            {/* </a> */}
        </div>
    )
}
export default Post;
