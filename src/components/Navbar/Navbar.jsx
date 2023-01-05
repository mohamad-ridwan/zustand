import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
    return (
        <div className="wrapp-navbar">
            <div className="navbar">
                <div className="left">
                    <Link className='title' to="/">
                        <p>Mohamad Ridwan Apriyadi</p>
                    </Link>
                </div>
                <div className="right">
                    <Link className='edit-profile' to="/edit-profile">
                        Edit-Profile
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar