import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Options = ({ option, correctAnswer }) => {
    // console.log(correctAnswer)
    const handleCorrect = opt => {
        console.log(opt)
        if (opt === correctAnswer) {
            toast("Correct Ans");
        } else {
            toast("Wrong");
        }
    }
    return (
        <div className=''>

            <div className='bg-slate-100 m-3 p-1 sm:p-3 flex items-center '>
                <input onClick={() => handleCorrect(option)} type="radio" name="radio-6" className="radio checked:bg-blue-500   mr-4" />
                <ToastContainer />
                <label className='text-sm sm:text-lg'>{option}</label>
            </div>
        </div>
    );
};

export default Options;