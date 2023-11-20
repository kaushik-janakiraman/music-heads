import React from 'react'
import Logo from './Logo'
import './style.css'
import { Link } from 'react-router-dom'

const MenuBar = () => {

    const linkStyle = {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '16px',
        fontWeight: '400',
        marginTop: '10px'
    }

    return (
        <React.Fragment>
            <Logo />
            <div>
            <div className='home-menu'>
                <span className="material-symbols-outlined home-icon">
                    home
                </span>
            </div>
            <Link to='/' style={linkStyle} className='home'>Home</Link>
            </div>
            <div>
            <div className='search-menu'>
                <span className="material-symbols-outlined search-icon">
                    search
                </span>
            </div>
            <Link to='/' style={linkStyle} className='search'>Search</Link>
            </div>
        </React.Fragment>
    )
}

export default MenuBar