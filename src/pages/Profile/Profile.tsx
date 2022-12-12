import React, {useEffect} from 'react';
import Header from "../../containers/Header/Header";
import './Profile.css'
import {useTypedSelector} from "../../redux/hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchEvents} from "../../redux/actions/eventActionCreator/eventActionCreator";

const Profile = () => {
    const {user} = useTypedSelector(state => state.auth)
    const {events} = useTypedSelector(state => state.events)
    const dispatch = useDispatch<any>()

    useEffect(() => {
        dispatch(fetchEvents(user.username))
        console.log('profileevent', events)
    }, [])
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
            <div className='profile-events-wrapper'>
                <p className='profile-event-text'>Ваши события: </p>
                {events.map(ev => {
                    return <div className='profile__event'>
                        <p className='event-text'>{ev.date}</p>
                        <h3 className='event-title'>{ev.title}</h3>
                        <p className='event-text'>{ev.guests}</p>
                    </div>
                })}
            </div>
        </div>
    );
};

export default Profile;