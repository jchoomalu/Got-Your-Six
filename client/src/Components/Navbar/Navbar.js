import React, { useState, useEffect } from 'react'
import Logo from '../Logo'
import { Link } from 'react-router-dom'
import {getUser} from '../../axios-apis/api-user.js'
import './Navbar.css'

const Navbar = () => {
  const [user, setUser] = useState(undefined)
  const [disabled, setDisabled] = useState('disabled')
  const token = sessionStorage.getItem('token')

  //if token is found sends to server for user info
  if (token) {
    useEffect(() => {
      checkUser()
    }, [])
  }

  //axios call to server for user information
  const checkUser = async () => {
    try {
    const current = await getUser()
    if (current) {
      setDisabled('')
    }
    setUser(current.data)
  } catch (err) {
    document.location = '/error'
  }
  }

  //clears session storage on logout
  const logout = () => {
    document.location = '/'
    sessionStorage.clear()
  }

  return (
    <React.Fragment>
      <div className="wrapper nav-wrapper mx-auto">
        <Logo />
        <div className="ui inverted menu mx-2 shadow">
          <div className="ui container shadow">
            <Link to="/" className="d-none d-md-block header my-1 item">Home</Link>
            {!user ?
              <div className="d-flex">
                <Link to="/resources/crisis" className="item crisis">CRISIS</Link>
                <Link to="/auth/signup" className="item">Sign-Up</Link>
                <Link to="/auth/signin" className="item">Sign-In</Link>
              </div>
              :
              <div className="d-flex">
                <div className="ui simple dropdown item">News<i className="dropdown icon"></i>
                  <div className="menu">
                    <div className="header">News and Events</div>
                    <Link to="/info/news" className="item">News</Link>
                    <Link to="/info/events" className="item">Events</Link>
                    <Link to="/info/stories" className="item">Stories</Link>
                  </div>
                </div>
                <div className="ui simple dropdown item">Resources<i className="dropdown icon"></i>
                  <div className="menu">
                    <div className="header">Resources</div>
                    <Link to="/resources/crisis" className="item crisis">CRISIS</Link>
                    <Link to="/resources/federal" className="item">Federal / VA</Link>
                    <Link to="/resources/private" className="item">Organizations</Link>
                    <div className="header">Users</div>
                    <Link to="/users/list" className="item">GY6 Members</Link>
                    <Link to="/users/local" className="item">Classifieds</Link>
                  </div>
                </div>
              </div>
            }
            <div className={`ui simple dropdown item ${disabled}`}>My Account<i className="dropdown icon"></i>
              <div className="menu">
                <div className="header">{!user ? '' : user.name}</div>
                {!user ?
                  <React.Fragment>
                    <Link to="/auth/signup" className="item">Sign-Up</Link>
                    <Link to="/auth/signin" className="item">Sign-In</Link>
                  </React.Fragment>
                  :
                  <React.Fragment>
                    <Link to="/messages/inbox" className="item">Messages</Link>
                    <Link to="/users/profile" className="item">Profile</Link>
                    <Link onClick={logout} to="/auth/signout" className="item">Log-Out</Link>
                  </React.Fragment>
                }
                <div className="divider"></div>
              </div>
            </div>
            <div className="text-white m-3 d-none d-md-block">{!user ? '' : `Welcome, ${user.name.split(' ')[0]}!`}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Navbar