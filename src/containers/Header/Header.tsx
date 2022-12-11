import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import './Header.css'
import {useTypedSelector} from "../../redux/hooks/useTypedSelector";

const Header = () => {
    const { user } = useTypedSelector(state => state.auth)
    return (
        <div className='header'>
            <div className='header__container'>
                <h2 className='header__title'>{`Welcome ${user.username ? user.username : ''} `}</h2>
                <Navbar />
            </div>

        </div>
    );
};

export default Header;