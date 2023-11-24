import {Link} from 'react-router-dom'
import React from 'react'

//button on events page to take the place of comments button 
const AllInterestedButton = ({ model, hidden, id, article}) => {
  return (
    <React.Fragment>
      <Link to={`/info/${model}/${id}/attending`}>
      <div role="button" className={`ui floated primary button ${hidden}`}>
        <div> <i className="users icon"></i> 
        <span className="p-1">See {article.attendingCount} Attending</span>
        </div>
      </div>
      </Link>
    </React.Fragment>
  )
}

export default AllInterestedButton