import React from 'react'
import { Link } from 'react-router-dom'
import './UserButtons.css'

//when viewing user list options provided are view and message
const UserButtons = ({ id }) => {
  return (
    <React.Fragment>
      <Link to={`/users/${id}`}>
        <div role="button" className="ui primary button my-1">
          <i className="user icon"></i> View Profile
      </div>
      </Link>
      <Link to={`/messages/send/${id}`}>
        <div role="button" className="ui primary button my-1">
          <i className="comments icon"></i> Send Message
      </div>
      </Link>
    </React.Fragment>
  )
}


export default UserButtons