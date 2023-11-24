import React from 'react'
import logo from '../../assets/images/gy6Brand.png'
import './Logo.css'

//main site logo served from public file
const Logo = () => (
    <div className='navbar-brand'>
        <img className="nav-img logo" src={logo} alt="large banner with red white and blue bars and stars" />
    </div>
)

export default Logo