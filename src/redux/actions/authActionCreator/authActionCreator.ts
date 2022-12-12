import {SET_AUTH, SET_ERROR, SET_USER} from "../action";
import {ActionCreator} from "redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import { AppDispatch } from "../../reducers";

export interface IUser {
    username: string
    password: string
}

export interface AuthState {
    isAuth: boolean
    user: IUser
    error: string
}

interface ISetAuth {
    type: typeof SET_AUTH
    payload: boolean
}

interface ISetUser {
    type: typeof SET_USER
    payload: IUser
}

interface ISetError {
    type: typeof SET_ERROR
    payload: string
}


export type TAuthActionTypes =
    ISetAuth |
    ISetUser |
    ISetError

export const setAuth: ActionCreator<TAuthActionTypes> = (auth: boolean) => ({
    type: SET_AUTH,
    payload: auth
})

export const setError: ActionCreator<TAuthActionTypes> = (error: string) => ({
    type: SET_ERROR,
    payload: error
})

export const setUser: ActionCreator<TAuthActionTypes> = (user: IUser) => ({
    type: SET_USER,
    payload: user
})

export const login = ( username: string, password: string, users: IUser[] ) => (dispatch: AppDispatch) => {
    try {
        const candidate = users.find(user => user.username === username && user.password === password)
        if(candidate) {
            localStorage.setItem('auth', 'true')
            localStorage.setItem('username', candidate.username)
            dispatch(setUser(candidate))

            dispatch(setAuth(true))
        } else {
            dispatch(setError('Имя пользователя или пароль введены неверно'))
        }
    } catch (e) {
        console.log('error')
    }
}

export const logout = () => (dispatch: AppDispatch) => {
    try {
        localStorage.removeItem('auth')
        localStorage.removeItem('username')
        dispatch(setUser({} as IUser))
        dispatch(setAuth(false))
    } catch (e) {
        console.log('error')
    }
}