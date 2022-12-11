import {ADD_USER, SET_ERROR, SET_ERROR_REGISTER} from "../action";
import {IUser, setAuth, setError, setUser} from "../authActionCreator/authActionCreator";
import {AppDispatch} from "../../reducers";


export interface IUsersState {
    users: IUser[]
    error: ''
}

export interface IAddUser {
    type: typeof ADD_USER
    payload: IUser
}

export interface ISetError {
    type: typeof SET_ERROR_REGISTER
    payload: string
}

export type TUsersActionTypes =
    IAddUser |
    ISetError


export const addUser = (user: IUser): TUsersActionTypes => {
    return {
        type: ADD_USER,
        payload: {
            ...user
        }
    }
}

export const serErrorUsers = (error: string): TUsersActionTypes => {
    return {
        type: SET_ERROR_REGISTER,
        payload: error
    }
}

export const register = (username: string, password: string, users: IUser[]) => (dispatch: AppDispatch) => {
    try {
        const candidate = users.find(user => user.username === username)
        if(!candidate){
            dispatch(addUser({
                username,
                password
            }))
            dispatch(setAuth(true))
            dispatch(setUser({username, password}))
        } else {
            dispatch(serErrorUsers('Пользователь с таким именем уже существует'))
        }
    } catch (e) {
        console.log('error')
    }
}