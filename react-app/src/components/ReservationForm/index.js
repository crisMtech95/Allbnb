import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import  Calendar from 'react-calendar'
import './ReservationForm.css'
import 'react-calendar/dist/Calendar.css';


function ReservationForm() {
    const dispatch = useDispatch()
    const [date, setDate] = useState();
    console.log(date)

    const formattingDates = (newDate) => {
        var dd = String(newDate.getDate()).padStart(2, '0');
        var mm = String(newDate.getMonth() + 1).padStart(2, '0');
        var yyyy = newDate.getFullYear();
        newDate = mm + '/' + dd + '/' + yyyy;
        return newDate
    }

    date?.forEach(el => {
        console.log(formattingDates(el))
    })


    return (
    <div className="Re__mainContainer">
        <Calendar
            showWeekNumbers={true}
            onChange={setDate}
            value={date}
            selectRange={true}
            // tileDisabled={()=> console.log("funtion to disable dates here!!")}
            minDate={new Date()}
            // formatLongDate={(locale, date) => formatDate(date, 'dd MMM YYYY')}
            />
    </div>
  );
}
export default ReservationForm;
