import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import  Calendar from 'react-calendar'
import './ReservationForm.css'
import 'react-calendar/dist/Calendar.css';
import { addResThunk } from '../../store/reservations'

function ReservationForm({ postId }) {
    const dispatch = useDispatch()
    const [date, setDate] = useState();
    const sessionUser = useSelector(state => state.session.user)
    const reservations = useSelector(state => Object.values(state.reservations))

    const fillDate = (startDay, endDay) => {
        if (endDay < startDay) return;
        let newStart = startDay
        let output = []
        while (newStart <= endDay) {
            output.push(new Date(newStart));
            newStart.setDate(newStart.getDate() + 1)
        }
        return output
    }
    const datesReservations = reservations?.map(el => {
            let { startTime } = el
            let { endTime } = el
            let newstartTime = new Date(startTime)
            let newendTime = new Date(endTime)
            return fillDate(newstartTime, newendTime)
    }).flat()


    // useEffect(() => {
    //     console.log(datesReservations)
    //     // datesReservations.forEach(el => {
    //     //     console.log("I AM ALL THE DATES FILLED", el)
    //     // })
    //     // reservations.forEach(el => {
    //     //     console.log(el)
    //     // })
    // }, [reservations])

    const formattingDates = (newDate) => {
        var dd = String(newDate.getDate()).padStart(2, '0');
        var mm = String(newDate.getMonth() + 1).padStart(2, '0');
        var yyyy = newDate.getFullYear();
        newDate = mm + '/' + dd + '/' + yyyy;
        return newDate
    }

    // useEffect(() => {
    //     if (date) {
    //         console.log("DATE FLAG", date)
    //         console.log("Date start formatted", formattingDates(date[0]))
    //         console.log("Date end formatted", formattingDates(date[1]))
    //     }
    // }, [date])



    return (
    <div className="Re__mainContainer">
        {datesReservations &&
            <Calendar
                // showWeekNumbers={false}
                onChange={setDate}
                value={date}
                selectRange={true}
                // tileDisabled={({newDate, view }) =>
                //     newDate.getDate()===5 && newDate.getMonth()===7 && newDate.getFullYear()===2021}
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
        <button className="SP__resBtn"
            onClick={() => {
                dispatch(addResThunk({
                    "userId": sessionUser.id,
                    "postId": postId,
                    "startTime": formattingDates(date[0]),
                    "endTime": formattingDates(date[1])
                }))
            }}
        >New Reservation</button>
    </div>
  );
}
export default ReservationForm;
