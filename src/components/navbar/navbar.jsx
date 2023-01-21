import React from 'react'
import "./navbar.css"

export default function NavBar(){

    return(
        <div className= 'topNav'>
            <div className='topLeft'></div>
                <ul>
                    <img className='icon' src="/images/icon.png" alt="navbar" />
                    <p className='Title'> Inclusive Islands </p>
                </ul>
            <div className='topCenter'></div>
            <div className='topRight'></div>
            <ul className='topNavList'>
                <li className='navListItem Log in'>Tutorial</li>
                <li className='navListItem Create Account'>About</li>
            </ul>
        </div>
    )
}