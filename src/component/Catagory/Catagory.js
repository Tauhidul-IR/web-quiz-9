import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Catagory = ({ catagory }) => {
    const { logo, name, id } = catagory;
    return (
        <div className='bg-white p-5 text-black mb-8'>
            <div>
                <img className='w-64 bg-slate-400 mr-0 mb-2' src={logo} alt="" ></img>
                <div className='flex w-full flex-col sm:flex-row lg:flex-col justify-between text-left'>
                    <h3 className='text-2xl'>{name}</h3>
                    <Link to={`/${id}`}>
                        <button className='bg-blue-600 px-3 py-2 rounded-lg text-lg cursor-pointer'>Start Practice <span><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></span></button></Link>

                </div>
            </div>
        </div>
    );
};

export default Catagory;