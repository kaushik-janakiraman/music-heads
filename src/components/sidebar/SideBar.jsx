import React from 'react'
import MenuBar from './menubar'
import './style.css'

const SideBar = () => {

    return (
        <React.Fragment>
            <div id='side-bar'>
                <MenuBar />
            </div>
        </React.Fragment>
    )
}

export default SideBar