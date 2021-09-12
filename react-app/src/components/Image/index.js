import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DelImgModal from '../DelImgModal';

export default function Image({ image, ind, post }) {
    const sessionUser = useSelector(state => state.session.user)
    const [showDelModal, setShowDelModal] = useState(false)

    return (
        <div key={ind} className="SP__imageDiv" id={`SP__imageDiv${ind}`}>
            <img src={image.imageUrl} className={`SP__image`} />
            {/* <button className="image__delBtn" onClick={!showDelBtn ? openMenu : closeMenu }> */}
            {sessionUser && sessionUser.id === post?.userId &&
                <button className="image__delBtn" onClick={()=> setShowDelModal(!showDelModal)}>
                        <div className="image__delBtnImage" />
                </button>
            }
            {/* {showDelBtn && */}
            {/* } */}
            <DelImgModal
                image={image}
                setShowDelModal={setShowDelModal}
                showDelModal={showDelModal}
            />
        </div>
    )
}
