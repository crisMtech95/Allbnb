import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  Calendar from 'react-calendar'
import {  addResThunk } from '../../store/reservations'
import './ReservationForm.css'
import 'react-calendar/dist/Calendar.css';


function ReservationForm({ postId, price }) {
    const dispatch = useDispatch()
    const [dates, setDates] = useState();
    const sessionUser = useSelector(state => state.session.user)
    const reservations = useSelector(state => Object.values(state.reservations))
    let [total, setTotal] = useState(price ? price : 0)

    const fillDate = (startDay, endDay) => {
        // console.log(startDay)
        // console.log(endDay)
        if (endDay < startDay) return;
        let newStart = startDay
        let output = []
        while (newStart <= endDay) {
            output.push(new Date(newStart));
            newStart.setDate(newStart.getDate() + 1)
        }
        // console.log(output)
        return output
    }
    const datesReservations = reservations?.map(el => {
            let { startTime } = el
            let { endTime } = el
            let formattedStart = new Date(startTime)
            let formattedEnd = new Date(endTime)
            return fillDate(formattedStart, formattedEnd)
    }).flat()

    const formattingDates = (newDate) => {
        var dd = String(newDate.getDate()).padStart(2, '0');
        var mm = String(newDate.getMonth() + 1).padStart(2, '0');
        var yyyy = newDate.getFullYear();
        newDate = mm + '/' + dd + '/' + yyyy;
        return newDate
    }

    useEffect(() => {
        if (dates && dates.length > 1) {
            if (dates[0] !== dates[1]) {
                let resDates = fillDate(new Date(dates[0]), new Date(dates[1]))
                setTotal((resDates.length) * total)
                console.log(resDates)
                console.log(dates)
            }
        }
    }, [dates])


    return (
    <div className="Re__mainContainer">
        {datesReservations &&
            <Calendar
                // showWeekNumbers={false}
                onChange={setDates}
                value={dates}
                selectRange={true}
                tileDisabled={({date, view}) =>
                        datesReservations.some(disabledDate =>
                        date.getFullYear() === disabledDate.getFullYear() &&
                        date.getMonth() === disabledDate.getMonth() &&
                        date.getDate() === disabledDate.getDate()
                        )}

                minDate={new Date()}
                // formatLongDate={(locale, date) => formatDate(date, 'dd MMM YYYY')}
                />
        }
        <div className="SP__resBottomDiv">
            <button
                className="SP__cancelBtn"
                onClick={()=> {
                    setDates(null)
                    setTotal(price)
                }}>
                Cancel
            </button>
            <button className="SP__resBtn"
                onClick={() => {
                    dispatch(addResThunk({
                        "userId": sessionUser.id,
                        "postId": postId,
                        "startTime": formattingDates(dates[0]),
                        "endTime": formattingDates(dates[1])
                    }))
                }}
            >New Reservation</button>
            <div className="SP__resTotalDiv">
                <div className="SP__resTotal">Total :</div>
                {/* {date && date.length < 1 ?
                    <div className="SP__resPrice">${total}</div> :
                    <div className="SP__resPrice">
                        {date[0] === date[1] ? "$" + total : "$" + date.length * total}
                    </div>
                } */}

                <div className="SP__resPrice">
                    ${total}
                </div>

            </div>
        </div>
    </div>
  );
}
export default ReservationForm;
