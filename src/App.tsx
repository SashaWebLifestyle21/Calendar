import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Info from './pages/Info/Info';
import Registration from "./pages/Registration/Registration";
import RequireAuth from "./hoc/RequireAuth";
import Calendar from './pages/Calendar/Calendar';
import Data from "./pages/Data/Data";

function App() {
  return (
    <div className="App">
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
            <Route path='/data' element={
                <RequireAuth>
                    <Data />
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
