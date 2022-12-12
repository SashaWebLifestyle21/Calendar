import React, {useState} from 'react';
import FormGroup from "../../FormGroup/FormGroup";
import {IEvent} from "../../../redux/actions/eventActionCreator/eventActionCreator";

interface IEventForm {
    event: IEvent
    setEvent: (event: IEvent) => void
}

const EventForm = ({ event, setEvent }: IEventForm) => {

    return (
        <form>
            <FormGroup
                labelName={'title'}
                labelText={'Событие'}
                inputName={'title'}
                inputType={'text'}
                value={event.title}
                onChange={e => setEvent({...event, title: e.currentTarget.value})}
            />
            <FormGroup
                labelName={'guests'}
                labelText={'Гости'}
                inputName={'guests'}
                inputType={'text'}
                value={event.guests}
                onChange={e => setEvent({...event, guests: e.currentTarget.value})}
            />
            <FormGroup
                labelName={'date'}
                labelText={'Дата'}
                inputName={'date'}
                inputType={'date'}
                value={event.date}
                onChange={e => setEvent({...event, date: e.currentTarget.value})}
            />
        </form>
    );
};

export default EventForm;