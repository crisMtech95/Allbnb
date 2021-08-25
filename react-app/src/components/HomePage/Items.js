import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserPostsThunk } from "../../store/post"
import "./Items.css"


const Items = () => {
    const dispatch = useDispatch()

    const posts = useSelector(state => state.posts)
    console.log(posts)
    useEffect(() => {
        dispatch(getUserPostsThunk(2))
    }, [])

    return (
    <div className="homePage__itemsBigContainer">
        <div className="homePage__itemsContainer">
            <h1>Popular Items</h1>
            <div className="Homepage__items">
                <div className="Homepage__item">
                    <div className="Homepage__itemImgDiv">
                        <img src={posts[5]?.images[0].imageUrl}/>
                    </div>
                    <div>
                        <h3>Random Title</h3>
                    </div>
                </div>
                <div className="Homepage__item">
                    <div className="Homepage__itemImgDiv">
                        <img src={posts[6]?.images[0].imageUrl}/>
                    </div>
                    <div>
                        <h3>Random Title</h3>
                    </div>
                </div>
                <div className="Homepage__item">
                    <div className="Homepage__itemImgDiv">
                        <img src={posts[7]?.images[0].imageUrl}/>
                    </div>
                    <div>
                        <h3>Random Title</h3>
                    </div>
                </div>
                <div className="Homepage__item">
                    <div className="Homepage__itemImgDiv">
                        <img src={posts[8]?.images[0].imageUrl}/>
                    </div>
                    <div>
                        <h3>Random Title</h3>
                    </div>
                </div>
                <div className="Homepage__item">
                    <div className="Homepage__itemImgDiv">
                        <img src={posts[9]?.images[0].imageUrl}/>
                    </div>
                    <div>
                        <h3>Random Title</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Items
