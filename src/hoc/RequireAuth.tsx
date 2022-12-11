import React from 'react';
import {useTypedSelector} from "../redux/hooks/useTypedSelector";
import {Navigate, useLocation} from "react-router-dom";

interface IRequireAuth {
    children: JSX.Element,
}

const RequireAuth = ({children}: IRequireAuth) => {
    const location = useLocation()
    const {isAuth} = useTypedSelector(state => state.auth)

    if(!isAuth) {
        return <Navigate to={'/auth'} state={{from: location}} />
    }
    return children
};

export default RequireAuth;