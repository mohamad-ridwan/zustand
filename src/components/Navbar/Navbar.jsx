import React from 'react'
import { Link } from 'react-router-dom'
import profileStore from '../../zustand/profileStore'
import './Navbar.scss'

const Navbar = () => {
    const userName = profileStore((state)=>state.users?.name)
    return (
        <div className="wrapp-navbar">
            <div className="navbar">
                <div className="left">
                    <Link className='title' to="/">
                        <p>{userName}</p>
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