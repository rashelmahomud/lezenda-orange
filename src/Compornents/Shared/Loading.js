import React from 'react';
import { PropagateLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='text-center my-96'>
            <PropagateLoader color="#36d7b7" />
        </div>
    );
};

export default Loading;