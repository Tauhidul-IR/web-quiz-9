import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quizs = () => {
    const quizs = useLoaderData()
    // console.log(quizs.data)
    const { name, id, questions, logo } = quizs.data
    return (
        <div className='bg-white text-black '>
            <div>
                <h1 className='text-5xl'>Quiz of {name}</h1>
            </div>
            <div>
                {
                    questions.map(qst => <Questions key={qst.id} qst={qst}></Questions>)
                }
            </div>
        </div>
    );
};

export default Quizs;