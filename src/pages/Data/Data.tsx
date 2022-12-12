import React from 'react';
import Header from "../../containers/Header/Header";
import './Data.css'
import Table from "../../components/common-components/Table/Table";

const Data = () => {
    return (
        <div>
            <Header />
            <h2 className='main__title'>This is Data Page</h2>
            <div className='_container data__container'>
                <Table/>
            </div>
        </div>
    );
};

export default Data;