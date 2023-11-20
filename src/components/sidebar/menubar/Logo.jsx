import React from 'react'
import './style.css'

const Logo = () => {

    return (
        <React.Fragment>
            <div id='logo-container'>
                <div className='logo-content'><span className="material-symbols-outlined music-icon">graphic_eq</span></div><h1 id='logo' className='logo-content'>Music Heads</h1>
            </div>
        </React.Fragment>
    )
}

export default Logo