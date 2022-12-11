import {AuthState, IUser, TAuthActionTypes} from "../../actions/authActionCreator/authActionCreator";
import {SET_AUTH, SET_ERROR, SET_USER} from "../../actions/action";


export const initialState: AuthState = {
    isAuth: false,
    user: {} as IUser,
    error: ''
}

const authReducer =(state = initialState, { payload, type }: TAuthActionTypes) => {
    switch (type) {
        case SET_AUTH:
            return {...state, isAuth: payload}
        case SET_USER:
            return {...state, user: payload}
        case SET_ERROR:
            return {...state, error: payload}
        default:
            return state
    }
}

export default authReducer