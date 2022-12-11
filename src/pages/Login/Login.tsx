import React, {useCallback, useEffect, useState} from 'react';
import Header from "../../containers/Header/Header";
import FormGroup from "../../components/FormGroup/FormGroup";
import './Login.css'
import { validOnlyLetter, validPassword } from '../../api/validation/validation';
import {useDispatch} from "react-redux";
import {login, setError} from "../../redux/actions/authActionCreator/authActionCreator";
import {useTypedSelector} from "../../redux/hooks/useTypedSelector";
import {register} from "../../redux/actions/usersActionCreator/usersActionCreator";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const dispatch = useDispatch<any>()
    const { users } = useTypedSelector(state => state.users)
    const { error, isAuth } = useTypedSelector(state => state.auth)

    const navigate = useNavigate()

    const [username, setUsername] = useState({
        username: '',
        error: true,
        dirty: false
    })
    const [password, setPassword] = useState({
        password: '',
        error: true,
        dirty: false
    })

    const blurHandler = (e: any) => {
        switch (e.target.name) {
            case 'username':
                setUsername({...username, dirty: true})
                break
            case 'password':
                setPassword({...password, dirty: true})
                break
        }
    }

    const handleUsername = useCallback((event: React.FormEvent<HTMLInputElement>) => {
        !validOnlyLetter(event.currentTarget.value)
            ? setUsername({...username, username: event.currentTarget.value, error: true})
            : setUsername({...username, username: event.currentTarget.value, error: false})
    }, [username])

    const handlePassword = useCallback((event: React.FormEvent<HTMLInputElement>) => {
        !validPassword(event.currentTarget.value)
            ? setPassword({...password, password: event.currentTarget.value, error: true})
            : setPassword({...password, password: event.currentTarget.value, error: false})
    }, [username])

    const handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        console.log('submit')
        console.log('username ', username)
        console.log('pass ', password)
        dispatch(login(username.username, password.password, users))
        navigate('/profile')
    }

    useEffect(() => {
        dispatch(setError(''))
    },[])
    return (
        <div>
            <Header />
            <div className='login__container'>
                <form action="" className='login__form'>
                    <h2 className='login__title'>Войти в аккаунт</h2>
                    <FormGroup
                        labelName={'username'}
                        labelText={'Username'}
                        inputName={'username'}
                        inputType={'text'}
                        error={'Имя должно содержать только буквы'}
                        onBlur={blurHandler}
                        onChange={handleUsername}
                        displayError={username.error && username.dirty}
                    />
                    <FormGroup
                        labelName={'password'}
                        labelText={'Password'}
                        inputName={'password'}
                        inputType={'text'}
                        error={'пароль должен содержать только цифры в кол-ве 8 символов'}
                        onBlur={blurHandler}
                        onChange={handlePassword}
                        displayError={password.error && password.dirty}
                    />

                    <div className='login__btn_wrapper'>
                        <button className='login__btn' onClick={handleLogin}>Войти</button>
                    </div>
                    {error && <p style={{color: 'red'}}>{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default Login;