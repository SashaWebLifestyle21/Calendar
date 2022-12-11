import React from 'react';
import Header from "../../containers/Header/Header";
import './Main.css'

const Main = () => {
    return (
        <div>
            <Header />
            <h2 className='main__title'>This is Main Page</h2>
        </div>
    );
};

export default Main;