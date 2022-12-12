import React, {Dispatch} from 'react';
import './ItemCalendar.css'
import {IEvent} from "../../../redux/actions/eventActionCreator/eventActionCreator";

interface IItemCalendar {
    events?: IEvent[]
    day: number
    isToday?: boolean
}

const ItemCalendar = ({ events, day, isToday, }: IItemCalendar) => {

    return (
        <div className={`calendar__day ${isToday ? 'calendar__today' : ''}`} >
            <p>{day}</p>
            {events && events.map((event, index) => {
                 return <div className='calendar__event'>
                     <h2 className='calendar__event__title'>{index+1}. {event.title}</h2>
                     <p className='calendar__event__text'>{event.guests}</p>
                 </div>
                })}
        </div>

    );
};

export default ItemCalendar;