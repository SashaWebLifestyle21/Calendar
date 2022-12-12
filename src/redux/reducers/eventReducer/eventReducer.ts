import {IEvent, IEventState, TEventsActionTypes} from "../../actions/eventActionCreator/eventActionCreator";
import {SET_EVENTS} from "../../actions/action";


const initialState: IEventState = {
    events: [] as IEvent[]
}

const eventReducer = (state = initialState, {payload, type}: TEventsActionTypes): IEventState=> {
    switch (type){
        case SET_EVENTS:
            return {...state, events: payload}
        default:
            return state
    }
}

export default eventReducer