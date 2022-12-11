import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Info from './pages/Info/Info';
import {useTypedSelector} from "./redux/hooks/useTypedSelector";
import authReducer from "./redux/reducers/authReducer/authReducer";
import Registration from "./pages/Registration/Registration";
import RequireAuth from "./hoc/RequireAuth";
import Calendar from './pages/Calendar/Calendar';

function App() {
    const { isAuth } = useTypedSelector(state => state.auth)
  return (
    <div className="App">
        {/*{isAuth*/}
        {/*    ? <Routes>*/}
        {/*        <Route path='/' element={<Main />} />*/}
        {/*        <Route path='/login' element={<Login />} />*/}
        {/*        <RequireAuth>*/}
        {/*            <Route path='/profile' element={<Profile />} />*/}
        {/*        </RequireAuth>*/}

        {/*        <Route path='/info' element={<Info />} />*/}
        {/*        <Route path='/auth' element={<Registration />}/>*/}
        {/*    </Routes>*/}
        {/*    : <Routes>*/}
        {/*        <Route path={'/'} element={<Main />} />*/}
        {/*        <Route path='/login' element={<Login />} />*/}
        {/*        <Route path='/auth' element={<Registration />}/>*/}
        {/*    </Routes>*/}
        {/*}*/}

        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/login' element={<Login />} />
                <Route path='/profile' element={
                    <RequireAuth>
                        <Profile />
                    </RequireAuth>
                } />
            <Route path='/info' element={
                <RequireAuth>
                    <Info />
                </RequireAuth>
            } />
            <Route path='/calendar' element={
                <RequireAuth>
                    <Calendar />
                </RequireAuth>
            } />
            <Route path='/login' element={<Login />} />
            <Route path='/auth' element={<Registration />}/>
        </Routes>

    </div>
  );
}

export default App;
