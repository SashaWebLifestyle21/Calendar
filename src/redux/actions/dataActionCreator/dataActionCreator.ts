import {SET_DATA} from "../action";


export interface IData {
    id: string
    firstName: string
    lastName: string
    email: string
    age: number
    streetAddress: string
    city: string
    state: string
    phoneNumbers: string
    position: string
    office: string
}

export interface ISetData {
    type: typeof SET_DATA
    payload: IData[]
}

export type TDataActionTypes = ISetData

export const setData = (data: IData[]): TDataActionTypes => {
    return {
        type: SET_DATA,
        payload: data
    }
}