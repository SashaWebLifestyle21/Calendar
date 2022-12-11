import React from 'react';
import Header from "../../containers/Header/Header";
import './Profile.css'
import {useTypedSelector} from "../../redux/hooks/useTypedSelector";

const Profile = () => {
    const {user} = useTypedSelector(state => state.auth)
    return (
        <div>
            <Header />
            <h2 className='profile__title'>This is Profile Page</h2>
            <p className='profile__text'>
                Пользователь:
                <span className='profile__span'>
                    {user.username}
                </span>
            </p>
            <p className='profile__text'>
                Пароль:
                <span className='profile__span'>
                    {user.password.slice(0,4)}...
                </span>
            </p>
        </div>
    );
};

export default Profile;