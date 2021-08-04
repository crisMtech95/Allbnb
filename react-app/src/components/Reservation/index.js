import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Reservation.css'

export default function Reservation() {
    const dispatch = useDispatch()
    const { userId }  = useParams();

    // useEffect(async() => {

    // }, [])

    return (
    <div className="reservation__mainContainer">
        <div className="">

        </div>
    </div>
    );
}
