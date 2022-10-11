import React from 'react';
import Options from '../Options/Options';

const Questions = ({ qst }) => {
    // console.log(qst)
    const { correctAnswer, options, question, id } = qst;
    return (
        <div className='w-1/2 mx-auto border bg-cyan-100 rounded mt-3'>
            <div>
                <h1 className='text-2xl'>Question : {question}</h1>
            </div>
            <div>
                {
                    options.map(option => <Options option={option}></Options>)
                }
            </div>
        </div>
    );
};

export default Questions;