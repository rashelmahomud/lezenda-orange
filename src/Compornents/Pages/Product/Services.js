import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [service,setService] = useState([]);
    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setService(data))
    } ,[])
    return (
        <div>
            <h1>helo</h1>
            {
                service.map(s => <Service key={s.id} s={s}></Service>)
            }
        </div>
    );
};

export default Services;