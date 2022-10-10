import React from 'react';

const Catagory = ({ catagory }) => {
    const { logo, name, id } = catagory;
    return (
        <div>
            <div>
                <img className='w-64' src={logo} alt="" ></img>
                <h3>{name}</h3>
            </div>
        </div>
    );
};

export default Catagory;