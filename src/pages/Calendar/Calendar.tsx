import React, { useState } from 'react';
import './Calendar.css'
import Header from "../../containers/Header/Header";
import EventCalendar from "../../containers/EventCalendar/EventCalendar";
import { formatDate } from '../../api/helpers/date/formateDate';

const Calendar = () => {

    const [selectedDate, selectDate] = useState(new Date())

    return (
        <div>
            <Header />
            <h2 className='main__title cal-title'>This is Calendar Page</h2>
            <EventCalendar  selectDate={selectDate} selectedDate={selectedDate}/>
        </div>
    );
};

export default Calendar;