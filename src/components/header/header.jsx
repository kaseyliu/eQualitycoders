import React from 'react'
import './header.css'

export default function Header() {
    return (
        <div className='header'>
            <div className='login'>
                <span className='CreateAccount'> Create Account | </span>
                <span className='logIn'> Log in </span>
            </div>
            <div className='headerTitle'>
                <img className='icon' src="/images/icon.png" alt="navbar" />
                <span className = "gameTitle"> Inclusive Islands </span>
                
            </div>
        </div>
    )
}