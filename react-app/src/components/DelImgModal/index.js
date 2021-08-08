import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Modal from 'react-modal'
import { delImageThunk } from "../../store/images";

export default function DelImgModal ({ image, showDelModal, setShowDelModal }) {
    const dispatch = useDispatch()


    const customModalStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

    return (
        <Modal
            isOpen={showDelModal}
            onRequestClose={()=> setShowDelModal(false)}
            style={customModalStyles}
            >
            <form>
                <div className="postForm__labelsDiv">
                    <label>Are you sure you want to remove this Image?</label>
                </div>
                <div className="image__delBtnsContainer">
                    <div className="postForm__btnDiv">
                        <button
                            // className="image__submitDelImg"
                            onClick={(e)=> {
                                dispatch(delImageThunk({id: image.id}))
                                setShowDelModal(false)
                            }}
                            >Remove image
                        </button>
                    </div>
                    <div className="image__cancelDelImgDiv">
                        <button
                            onClick={(e)=> {
                                setShowDelModal(false)
                            }}
                        >Cancel</button>
                    </div>
                </div>
            </form>
        </Modal>
    )
}
