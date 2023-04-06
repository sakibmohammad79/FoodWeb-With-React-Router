import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'



const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className='md:flex justify-between bg-black p-4 md:p-3 items-center'>
            <div>
            <h2 className='font-bold text-4xl text-orange-400'>Foods That Are Super Healthy</h2>
            </div>
            <div className='font-bold'>
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span>{open === true? <XMarkIcon className="h-6 w-6  text-orange-700" /> : <Bars3Icon className="h-6 w-6 text-orange-700" />}</span>
                
            </div>
            <ul  className={` mt-4 md:mt-0 absolute md:static ${open ? 'top-24' : '-top-36'}`}>
            <Link className=' text-white hover:text-orange-400' to="/">Food</Link>
            <Link className=' text-white mx-12  hover:text-orange-400' to="/order">Order</Link>
            <Link className='text-white hover:text-orange-400' to="/about">About</Link>
            <Link className='text-white mx-12  hover:text-orange-400' to="/contact">Contact</Link>
            </ul>
            </div>
        </nav>
    );
};

export default Header;