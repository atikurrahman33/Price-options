import { list } from 'postcss';
import React, { useState } from 'react';
import Link from '../link/Link';
import {AiOutlineMenu ,AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const[open,setOpen]=useState(false)
   
    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About', id: 'about' },
        { path: '/services', name: 'Services', id: 'services' },
        { path: '/contact', name: 'Contact', id: 'contact' },
        { path: '/profile/:id', name: 'UserProfile', id: 'user-profile' }
      ];
      
    
      
    return (
        
        <nav className='text-black bg-yellow-200 p-6'>
             <div className=' md:hidden text-2xl' onClick={()=> setOpen(!open)}>
                {
                    open===true ? <AiOutlineClose></AiOutlineClose>:  <AiOutlineMenu ></AiOutlineMenu>
                }
            
             </div>
            <ul className={`md:flex bg-yellow-200 absolute duration-1000
            ${open?  'top-16':  '-top-60'} md:static px-6 `}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link> )
                }
            </ul>
            
        </nav>
    );
};

export default Navbar;