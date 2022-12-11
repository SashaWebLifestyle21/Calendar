import React from 'react';
import './Calendar.css'
import Header from "../../containers/Header/Header";

const Calendar = () => {
    return (
        <div>
            <div>
                <Header />
                <h2 className='main__title'>This is Calendar Page</h2>
            </div>
        </div>
    );
};

export default Calendar;