import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';

const NavBar = function() {
    return (<div className='Nav'>
    <Link className='link home' to= '/main'>
        <img className='isotype' src='../../bankemy.svg'/>
        <img className='logotype' src='../../bankemy-logo-black-03.svg'/>
    </Link>
    <div id='navbar-links'>
    <Link className='link' to='/main/transaction/post'>New transaction</Link>
    <span id="space"/>
    <Link className='link' to='/main/login'>Log in</Link>
    </div>
    </div>);
}
export default NavBar;

