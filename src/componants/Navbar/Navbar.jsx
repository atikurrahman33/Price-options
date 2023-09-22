import { list } from 'postcss';
import React from 'react';
import Link from '../link/Link';

const Navbar = () => {

    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About', id: 'about' },
        { path: '/services', name: 'Services', id: 'services' },
        { path: '/contact', name: 'Contact', id: 'contact' },
        { path: '/profile/:id', name: 'UserProfile', id: 'user-profile' }
      ];
      
    
      
    return (
        <nav>
            <ul className='md: flex'>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link> )
                }
            </ul>
            
        </nav>
    );
};

export default Navbar;