import React, {useState} from 'react';
import './EventCalendar.css'
import {useCalendar} from "../../hooks/useCalendar";
import {checkIsToday} from "../../api/helpers/date/checkIsToday";

interface IEventCalendar {
    locale?: string
    selectedDate: Date
    selectDate: (date: Date) => void
    firstWeekDate?: number
}

const EventCalendar = ({ firstWeekDate = 2, selectDate, selectedDate, locale = 'default' }: IEventCalendar) => {
    const { state, functions } = useCalendar({ locale, selectedDate})

    const [isToday, setIsToday] = useState(false)
    console.log('state ', state)
    return (
        <div className='calendar'>
            <div className='calendar-action-block'>
                <div className='calendar-action-block__btns'>
                    <button className='calendar-action__btn'>Добавить</button>
                    <button className='calendar-action__btn'>Обновить</button>
                </div>
                <div className='calendar-action-block__search'>
                    <input type='text'/>
                </div>
            </div>
            <div className='calendar__header'>
                <div className='calendar__month'>
                    <div
                        className='calendar__direction__btn'
                        onClick={() => functions.onClickArrow('left')}
                    >
                        {'<'}
                    </div>
                    <div>{state.monthesNames[state.selectedMonth.monthIndex].month} {state.selectedYear}</div>
                    <div
                        className='calendar__direction__btn'
                        onClick={() => functions.onClickArrow('right')}
                    >
                        {'>'}
                    </div>
                    <button onClick={() => setIsToday(true)}>Сегодня</button>
                </div>
                <div className='calendar__body'>
                    <div className='calendar__week_names'>
                        {state.weekDaysNames.map(weekDayName => {
                            return <div key={weekDayName.dayShort}>
                                {weekDayName.dayShort}
                            </div>
                        })}
                    </div>
                    <div className='calendar__day-block'>
                        {state.calendarDays.map(day => {
                            if(isToday) {
                                const today = checkIsToday(day.date)
                                return <div key={`${day.dayNumber}-${day.monthIndex}`} className={['calendar__day', today ? 'calendar__today' : ''].join(' ')}>
                                    {day.dayNumber}
                                </div>
                            } else {
                                console.log('day ', day)
                                return <div key={`${day.dayNumber}-${day.monthIndex}`} className='calendar__day'>
                                    {day.dayNumber}
                                </div>
                            }

                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCalendar;