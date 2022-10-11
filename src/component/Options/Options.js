import React from 'react';

const Options = (option) => {
    console.log(option)
    return (
        <div className=''>

            <div className='bg-slate-100 m-6 p-5 flex items-center '>
                <input type="radio" name="radio-6" className="radio checked:bg-blue-500  mr-4" checked />
                <label>{option.option}</label>
            </div>
        </div>
    );
};

export default Options;