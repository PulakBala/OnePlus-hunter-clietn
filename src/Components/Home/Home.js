import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const phones = useLoaderData();
    return (
        <div>
            <h2>Show me all the phones you have</h2>
            <h5>I got : {phones.length}</h5>
            {
                phones.map(ph => <li><Link to={`/phones/${ph.id}`}>{ph.name}</Link></li> )
            }
        </div>
    );
};

export default Home;