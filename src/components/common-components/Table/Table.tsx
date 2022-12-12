import React, {useEffect} from 'react';
import data from '../../../api/data/data.json'

const Table = () => {
    useEffect(() => {
        console.log(data)
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Table;