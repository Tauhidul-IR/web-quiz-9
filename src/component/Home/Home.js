import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Catagory from '../Catagory/Catagory';
import img from '../../image/quiz.png'

const Home = () => {
    const catagoris = useLoaderData();
    // console.log(catagoris.data)
    return (
        <div className='container mx-auto b'>
            <div className='bg-white flex mb-5'>
                <div>
                    <img className='h-80' src={img} alt="" ></img>
                </div>
                <div className='text-black p-4'>
                    <h4 className='text-4xl '>This is Home page of WEB-QUIZ</h4>
                    <h4 className='text-lg'>You Can find all web related quiz here. There are different type of topic and different type of quiz.</h4>
                    <h3 className='text-2xl'>Choose your topic and practice it.</h3>
                </div>
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