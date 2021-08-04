import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Modal from "react-modal"
import { addImageThunk } from '../../store/images';


const AddImg = ({ postId, setShowAddImgModal }) => {
  const [errors, setErrors] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const [showModal, setShowModal] = useState(true)
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
    <Modal isOpen={showModal} onRequestClose={()=> setShowModal(false)}>

      <form onSubmit={onSubmit}>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div>
          <label>Image Url</label>
          <input
            name='Image-Url'
            type='text'
            placeholder='Image Url'
            value={imageUrl}
            onChange={(e)=> setImageUrl(e.target.value)}
          />
        </div>
          <button type='submit'>Add Image!</button>
      </form>
    </Modal>
  );
};

export default AddImg;
