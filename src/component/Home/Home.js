import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Catagory from '../Catagory/Catagory';

const Home = () => {
    const catagoris = useLoaderData();
    console.log(catagoris.data)
    return (
        <div>
            <div>
                <h1>Home</h1>
            </div>
            <div className='grid lg:grid-cols-4 gap-2'>
                {
                    catagoris.data.map(catagory => <Catagory key={catagory.id} catagory={catagory}></Catagory>)
                }
            </div>
        </div>
    );
};

export default Home;