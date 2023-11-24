import React from 'react'
import { Link } from 'react-router-dom'

//replaces large button when window is small
const UserButtons = ({ id }) => {
  return (
    <React.Fragment>
      <Link to={`/users/${id}`}>
        <div role="button" className="ui primary button p-2">
          <i className="user icon m-1"></i>
      </div>
      </Link>
      <Link to={`/messages/send/${id}`}>
        <div role="button" className="ui primary button p-2">
          <i className="comments icon m-1"></i>
      </div>
      </Link>
    </React.Fragment>
  )
}


export default UserButtons