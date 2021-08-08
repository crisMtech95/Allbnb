import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Reservation.css'
import Modal from 'react-modal'
import CanResModal from '../CancelResModal';

export default function Reservation({ reservation }) {
    const dispatch = useDispatch()
    const { userId }  = useParams();
    const [showDelResModal, setShowDelResModal] = useState(false)
    // useEffect(async() => {

    // }, [])

    return (
    <div className="reservation__mainContainer">
        <div className="reservation__con">
                <div className="reservation__cityDiv">
                    <span>{reservation.post.city}</span>
                </div>
                <div className="reservation__timeDiv">
                    <div className="reservation__calendarImg"/>
                    <span>{reservation.startTime} - </span>
                    <span>{reservation.endTime}</span>
                </div>
                <div className="reservation__priceDiv">
                    <div className="reservation__priceImg"/>
                    <span>${reservation.post.price} per day</span>
                </div>
                <div className="reservation__titleDiv">
                    <span>{reservation.post.title}</span>
                </div>
                <div className="reservation__cancelBtnDiv">
                    <button
                        onClick={() => setShowDelResModal(true)}
                    >Cancel Reservation</button>
                </div>
                <CanResModal
                    reservation={reservation}
                    showDelResModal={showDelResModal}
                    setShowDelResModal={setShowDelResModal}
                    />
                {/* <div className="reservation__imageDiv">
                    <img alt="You'll never know" src={reservation.post.images[0].imageUrl}/>
                </div> */}
        </div>
    </div>
    );
}
