import { logDOM } from '@testing-library/dom';
import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'

 function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-center">
<Link to="/"><h1 className="headertext">Responsive Website</h1></Link>
<ul className='nav-links'>
          <li>
            <Link exact  to='/'>Home</Link>
          </li>
          <li>
            <Link exact to='/about'>About</Link>
          </li>
        </ul>
            </div>
        </nav>
         
    )
}

export default Navbar;
