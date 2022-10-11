import React from 'react';

const Options = (option) => {
    console.log(option)
    return (
        <div>
            <input type="checkbox" id='opn' className="checkbox checkbox-xs" /> <span>{option.option}</span>
        </div>
    );
};

export default Options;