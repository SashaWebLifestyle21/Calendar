import { IUsersState, TUsersActionTypes} from "../../actions/usersActionCreator/usersActionCreator";
import {IUser} from "../../actions/authActionCreator/authActionCreator";
import {ADD_USER, SET_ERROR, SET_ERROR_REGISTER} from "../../actions/action";


const initialStateUser = {
    users: [],
    error: ''
} as IUsersState

// const initialStateUser = [] as IUser[]

const usersReducer = (state = initialStateUser, { payload, type }: TUsersActionTypes): IUsersState => {
    switch (type) {
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, {username: payload.username, password: payload.password}]
            }
        case SET_ERROR_REGISTER:
            return {...state, error: payload as ''}
        default:
            return state
    }
}

export default usersReducer