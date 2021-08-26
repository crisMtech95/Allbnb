import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserPostsThunk } from "../../store/post"
import "./Items.css"


const Items = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => Object.values(state.posts))
    const [current, setCurrent] = useState(0)

    const nextImg = () => {
        setCurrent(current === posts.length - 1 ? 0 : current + 1)
    }

    const prevImg = () => {
        setCurrent(current === 0 ? posts.length - 1 : current - 1)
    }
    console.log(current)

    useEffect(() => {
        dispatch(getUserPostsThunk(2))
    }, [])

    return (
        <div className="homePage__itemsBigContainer">
        <div className="homePage__itemsContainer">
            <h1>Popular Items</h1>
            <div className="Homepage__items">
                <div className="HomePage__itemsLeftArrowDiv HomePage__itemsArrows">
                    <div className="HomePage__itemsLeftArrow" onClick={prevImg} />
                </div>
                <div className="HomePage__itemsRightArrowDiv HomePage__itemsArrows">
                    <div className="HomePage__itemsRightArrow" onClick={nextImg} />
                </div>
                {posts && posts.map((post, i) => {
                    if (current === i) {
                    return (
                        <div className="Homepage__item" key={post.id}>
                            <div className="Homepage__itemImgBigDiv">
                                {current == 0 ?
                                <div>
                                    <Link to={`/posts/${posts[posts.length-1].id}`}>
                                        <div className="homepage__itemImgDiv">
                                            <img src={posts[posts.length - 1].images[0].imageUrl}/>
                                        </div>
                                    </Link>
                                    <div>
                                        <h3>{posts[posts.length-1].title}</h3>
                                    </div>
                                </div>
                                :
                                <div>

                                    <Link to={`/posts/${posts[i-1].id}`}>
                                        <div className="homepage__itemImgDiv">
                                            <img src={posts[i-1].images[0].imageUrl}/>
                                        </div>
                                    </Link>

                                    <div>
                                        <h3>{posts[i-1].title}</h3>
                                    </div>
                                </div>
                                }
                            </div>
                            <div className="Homepage__itemImgDiv">
                                <Link to={`/posts/${post.id}`}>
                                    <div className="homepage__itemImgDiv">
                                        <img src={post.images[0].imageUrl}/>
                                    </div>
                                </Link>
                                <div>
                                    <h3>{post.title}</h3>
                                </div>
                            </div>
                            <div className="Homepage__itemImgDiv">
                                {i == posts.length - 1?
                                <div>
                                    <Link to={`/posts/${posts[0].id}`}>
                                        <div className="homepage__itemImgDiv">
                                            <img src={posts[0].images[0].imageUrl}/>
                                        </div>
                                    </Link>
                                    <div>
                                        <h3>{posts[0].title}</h3>
                                    </div>
                                </div>
                                :
                                <div>
                                    <Link to={`/posts/${posts[i+1].id}`}>
                                        <div className="homepage__itemImgDiv">
                                            <img src={posts[i+1].images[0].imageUrl}/>
                                        </div>
                                    </Link>
                                    <div>
                                        <h3>{posts[i+1].title}</h3>
                                    </div>
                                </div>
                                }
                            </div>
                        </div>
                        )
                    }
                    })}

            </div>
        </div>
    </div>
    )
}

export default Items
