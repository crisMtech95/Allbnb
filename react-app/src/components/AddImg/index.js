import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Modal from "react-modal"
import { addImageThunk } from '../../store/images';


const AddImg = ({ postId, showAddImgModal, setShowAddImgModal, customModalStyles }) => {
  const [errors, setErrors] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    let obj = {
      postId: postId,
      imageUrl: imageUrl,
    }
    dispatch(addImageThunk(obj))
    setShowAddImgModal(false)
  };

  return (
    <Modal
      isOpen={showAddImgModal}
      onRequestClose={()=> setShowAddImgModal(false)}
      style={customModalStyles}
      >

      <form onSubmit={onSubmit} className="itemForm__form">
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className="postForm__labelsDiv">
          <label>Image Url</label>
        </div>
          <input
            name='Image-Url'
            type='text'
            placeholder='Image Url'
            value={imageUrl}
            onChange={(e)=> setImageUrl(e.target.value)}
          />
          <div className="postForm__btnDiv">
            <button type='submit'>Add Image!</button>
          </div>
      </form>
    </Modal>
  );
};

export default AddImg;
