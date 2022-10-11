import React from 'react';
import Options from '../Options/Options';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Questions = ({ qst }) => {
    const { correctAnswer, options, question, id } = qst;

    const handleEyeCorrect = () => {
        toast.success(correctAnswer);
    }
    // console.log(qst)

    return (
        <div className='w-3/4 mx-auto border bg-cyan-100 rounded mt-3'>
            <div>
                <h1 className='text-2xl mb-3'>Question : {question}</h1>
                <button onClick={() => handleEyeCorrect()}><ToastContainer /><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button>
            </div>
            <div>
                {
                    options.map(option => <Options option={option} correctAnswer={correctAnswer}></Options>)
                }
            </div>
        </div>
    );
};

export default Questions;