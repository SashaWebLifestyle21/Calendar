import {IData, TDataActionTypes} from "../../actions/dataActionCreator/dataActionCreator";
import {SET_DATA} from "../../actions/action";


const initialState = [] as IData[]

const dataReducer = (state = initialState, { payload, type }: TDataActionTypes): IData[] => {
    switch (type) {
        default:
            return state
    }
}