import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Modal from 'react-modal'
import { delResThunk } from "../../store/reservations";

export default function CanResModal ({ reservation, showDelResModal, setShowDelResModal}) {
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
            isOpen={showDelResModal}
            onRequestClose={()=> setShowDelResModal(false)}
            style={customModalStyles}
        >
            <form>
                <div className="postForm__labelsDiv">
                    <label>Are you sure you want to cancel your reservation?</label>
                </div>
                <div className="image__delBtnsContainer">
                    <div className="postForm__btnDiv">
                        <button
                            // className="image__submitDelImg"
                            onClick={(e)=> {
                                dispatch(delResThunk({id: reservation.id}))
                                setShowDelResModal(false)
                            }}
                            >Remove reservation
                        </button>
                    </div>
                    <div className="image__cancelDelImgDiv">
                        <button
                            onClick={(e)=> {
                                setShowDelResModal(false)
                            }}
                        >Cancel</button>
                    </div>
                </div>
            </form>
        </Modal>
    )
}
