import React from 'react';
import Options from '../Options/Options';

const Questions = ({ qst }) => {
    // console.log(qst)
    const { correctAnswer, options, question, id } = qst;
    return (
        <div>
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