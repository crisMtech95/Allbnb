import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function Post({ post }) {
    const dispatch = useDispatch()
    console.log(post)

    return (
    <div className="post__bigContainer">
        <div className="post__container">

        </div>
    </div>
    );
}
export default Post;
