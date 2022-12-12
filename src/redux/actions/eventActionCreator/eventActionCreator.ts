import {CREATE_EVENT, SET_EVENTS} from "../action";
import {AppDispatch} from "../../reducers";


export interface IEventState {
    events: IEvent[]
}

export interface IEvent {
    title: string
    guests: string
    author: string
    date: string
}


export interface ISetEvents {
    type: typeof SET_EVENTS
    payload: IEvent[]
}

export interface ICreateEvents {
    type: typeof CREATE_EVENT
    payload: IEvent
}

export type TEventsActionTypes = ISetEvents | ICreateEvents

export const setEvents = (events: IEvent[]): TEventsActionTypes => {
    return {
        type: SET_EVENTS,
        payload: events
    }

}

export const createEvent = ( event: IEvent, username: string ) => (dispatch: AppDispatch) => {
    try {
        const events = localStorage.getItem("events") || '[]'
        const json = JSON.parse(events) as IEvent []
        json.push(event)
        dispatch(setEvents(json))
        localStorage.setItem("events", JSON.stringify(json))

    } catch (e) {
        console.log('error')
    }
}

export const changeEvent = ( event: IEvent, username: string ) => (dispatch: AppDispatch) => {
    try {
        const events = localStorage.getItem("events") || '[]'
        const json = JSON.parse(events) as IEvent []
        json.forEach(ev => {
            if (ev.date === event.date){
                ev.guests = event.guests
                ev.title = event.title
            }
        })
        dispatch(setEvents(json))
        localStorage.setItem("events", JSON.stringify(json))
    } catch (e) {
        console.log('error')
    }
}

export const fetchEvents = ( username: string ) => (dispatch: AppDispatch) => {
    try {
        // const events = localStorage.getItem("events") || '[]'
        // const json = JSON.parse(events) as IEvent []
        // const currentUserEvents = json.filter(event => event.author === username)
        // dispatch(setEvents(currentUserEvents))

        const events = localStorage.getItem("events") || '[]'
        const json = JSON.parse(events) as IEvent []
        const currentUserEvents = json.filter(event => event.author === username)
        console.log('curev',currentUserEvents)
        dispatch(setEvents(currentUserEvents))
    } catch (e) {
        console.log('error')
    }
}