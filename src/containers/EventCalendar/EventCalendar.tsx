import React, {useEffect, useState} from 'react';
import './EventCalendar.css'
import {useCalendar} from "../../hooks/useCalendar";
import {checkIsToday} from "../../api/helpers/date/checkIsToday";
import Modal from "../../components/common-components/Modal/Modal";
import EventForm from "../../components/common-components/EventForm/EventForm";
import {changeEvent, createEvent, fetchEvents, IEvent} from "../../redux/actions/eventActionCreator/eventActionCreator";
import {useTypedSelector} from "../../redux/hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import { formatDate } from '../../api/helpers/date/formateDate';
import ItemCalendar from "../../components/common-components/ItemCalendar/ItemCalendar";

interface IEventCalendar {
    locale?: string
    selectedDate: Date
    selectDate: (date: Date) => void
    firstWeekDate?: number
}

const EventCalendar = ({ firstWeekDate = 2, selectDate, selectedDate, locale = 'default' }: IEventCalendar) => {
    const { state, functions } = useCalendar({ locale, selectedDate})
    const [isToday, setIsToday] = useState(false)

    const [activeEvent, setActiveEvent] = useState<IEvent>({} as IEvent)

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [modalChangeIsOpen, setModalChangeIsOpen] = useState(false)

    const { user } = useTypedSelector(state => state.auth)
    const events = useTypedSelector(state => state.events)

    const dispatch = useDispatch<any>()

    const [event, setEvent] = useState<IEvent>({
        author: '',
        date: '',
        guests: '',
        title: ''
    } as IEvent)

    useEffect(() => {
        dispatch(fetchEvents(user.username))
    }, [])


    const handleAddEvent = () => {
        dispatch(createEvent({...event, author: user.username}, user.username))
        dispatch(fetchEvents(user.username))
        setModalIsOpen(false)
        setEvent({
            author: '',
            date: '',
            guests: '',
            title: ''
        })
    }

    const handleChangeEvent = () => {
        console.log('activeEvent ', activeEvent)
        dispatch(changeEvent(activeEvent, user.username))
        dispatch(fetchEvents(user.username))
        setModalChangeIsOpen(false)
        setActiveEvent({} as IEvent)
    }
    return (
        <div className='calendar'>
            <Modal title={'Добавить событие'} isOpen={modalIsOpen} onCancel={() => setModalIsOpen(false)} onSubmit={handleAddEvent}>
                <EventForm event={event} setEvent={setEvent} />
            </Modal>
            <Modal title={'Обновить событие'} isOpen={modalChangeIsOpen} onCancel={() => setModalChangeIsOpen(false)} onSubmit={handleChangeEvent}>
                <EventForm event={activeEvent} setEvent={setActiveEvent} />
            </Modal>
            <div className='calendar-action-block'>
                <div className='calendar-action-block__btns'>
                    <button
                        className='calendar-action__btn'
                        onClick={() => setModalIsOpen(true)}
                    >
                        Добавить
                    </button>
                    <button
                        className='calendar-action__btn'
                        onClick={() => setModalChangeIsOpen(true)}
                    >
                        Обновить</button>
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
                            const listEvents = events.events.filter(event => event.date === formatDate(day.date, 'YYYY-MM-DD'))
                            if(isToday) {
                                return <ItemCalendar key={`${day.dayNumber}-${day.monthIndex}`} day={day.dayNumber} isToday={checkIsToday(day.date)} events={listEvents} />
                            } else {
                                return <ItemCalendar key={`${day.dayNumber}-${day.monthIndex}`} day={day.dayNumber} events={listEvents} />
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCalendar;