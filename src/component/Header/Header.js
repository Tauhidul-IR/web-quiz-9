import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='py-5 bg-slate-500'>

            <div className='flex sm:flex-row flex-col  justify-between container mx-auto'>
                <div>
                    <h1 className='text-4xl text-black'>Web-Quiz</h1>
                </div>
                <div className='text-black text-xl flex sm:flex-row flex-col'>
                    <NavLink className={'mr-3'} NavLink to={'/'} > Home</NavLink >
                    <NavLink className={'mr-3'} to={'/about'}>About</NavLink>
                    <NavLink className={'mr-3'} to={'/statistics'}>Statistics</NavLink>
                    <NavLink className={'mr-3'} to={'/blogs'}>Blogs</NavLink>

                </div>
            </div>
        </div >
    );
};

export default Header;