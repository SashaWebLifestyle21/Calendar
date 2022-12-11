import React from 'react';
import './Info.css'
import Header from "../../containers/Header/Header";
const Info = () => {
    return (
        <div>
            <Header />
            <h2 className='main__title'>This is Info Page</h2>
            <p className='info__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet atque consequatur dolorem eos est fuga impedit laboriosam maiores optio quas repellendus veritatis, vero. Accusantium aperiam ipsum officiis. Eveniet, quaerat!</p>
        </div>
    );
};

export default Info;