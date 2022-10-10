import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='py-5 bg-slate-500'>
            <div onClick={() => setOpen(!open)} className="h-7 w-7 md:hidden">
                {
                    open ? <XMarkIcon /> : <Bars3Icon />
                }
            </div>
            <div className='flex justify-between container mx-auto'>
                <div>
                    <h1 className='text-4xl text-white'>Web-Quiz</h1>
                </div>
                <div>
                    <div className={`text-white md:flex justify-center w-full absolute md:static duration-500 ${open ? 'top-6' : "top-[-120px]"}`}>
                        <NavLink className={'mr-3'} NavLink to={'/'} > Home</NavLink >
                        <NavLink className={'mr-3'} to={'/about'}>About</NavLink>
                        <NavLink className={'mr-3'} to={'/contact'}>Contact</NavLink>
                    </div >
                </div>
            </div>
        </div >
    );
};

export default Header;