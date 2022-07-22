import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './Loader.css';
const Loader = () => {
    return (
        <div className='outer-loader-div'>
            <div className='loader'>
                <CircularProgress color='secondary'/>
            </div>
        </div>
    )
}

export default Loader;