import {Link} from 'react-router-dom'
import React from 'react'

//news events and stroies naviagate back to article list
const GobackButton = ({ model, hidden}) => {
  return (
    <React.Fragment>
      <Link tabIndex="0" to={`/info/${model}`}>
      <div role="button" className={`ui floated primary button ${hidden}`}>
        <div> <i className="caret left icon"></i> 
        <span className="p-1">Go Back</span>
        </div>
      </div>
      </Link>
    </React.Fragment>
  )
}

export default GobackButton