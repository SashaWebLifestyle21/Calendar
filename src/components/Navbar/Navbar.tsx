import React from 'react';
import {Link} from "react-router-dom";
import './Navbar.css'
import {useTypedSelector} from "../../redux/hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import { logout } from '../../redux/actions/authActionCreator/authActionCreator';

const Navbar = () => {
    const { isAuth } = useTypedSelector(state => state.auth)
    const dispatch = useDispatch<any>()
    return (
        <nav className='header__menu'>
            <ul className='menu__list'>
                <li className='menu__item'>
                    <Link className='menu__link' to={'/'}>main</Link>
                </li>
                {isAuth
                    ? <>
                            <li className='menu__item'>
                                <Link className='menu__link' to={'/info'}>info</Link>
                            </li>
                            <li className='menu__item'>
                                <Link className='menu__link' to={'/profile'}>profile</Link>
                            </li>
                            <li className='menu__item'>
                                <Link className='menu__link' to={'/calendar'}>calendar</Link>
                            </li>
                            <li className='menu__item' onClick={() => dispatch(logout())}>
                                <Link className='menu__link' to={'/'}>Выйти</Link>
                            </li>
                        </>
                    :   <li className='menu__item'>
                            <Link className='menu__link' to={'/login'}>login</Link>
                        </li>

                }
            </ul>
        </nav>
    );
};

export default Navbar;