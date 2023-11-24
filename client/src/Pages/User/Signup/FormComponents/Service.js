import React from 'react'

//displays form for service and volunteer info 
export const Service = ({branch, setBranch, status, setStatus, volunteer, setVolunteer, feedback, gather}) => {
  return (
    <React.Fragment>
    <div className="ui form col-12 mx-auto large text-white">
    <div className="ui form segment">
      <div className="my-3">
        <select
          aria-label="military branch" 
          className="placeholder-option"
          id="branch"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          required
        >
          <option>Select A Branch</option>
          <option>Army</option>
          <option>Air / Space Force</option>
          <option>Navy / Marines</option>
          <option>Coast Guard</option>
          <option>Patriot Citizen</option>
        </select>
        <i className="world icon select-icon"> </i>
      </div>

      <div className="my-3">
        <select
          aria-label="military status" 
          className="placeholder-option"
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option>Select A Status</option>
          <option>Active Duty</option>
          <option>Reserve / National Guard</option>
          <option>Veteran</option>
          <option>Retired</option>
          <option>Citizen</option>
        </select>
        <i className="military icon select-icon"></i>
      </div>

      <div className="my-3">
        <select
          aria-label="volunteer options" 
          className="placeholder-option"
          id="volunteer"
          value={volunteer}
          onChange={(e) => setVolunteer(e.target.value)}
          required
        >
          <option>Would You Like To Volunteer</option>
          <option>Yes, Please contact me anytime.</option>
          <option>Yes, I will contact you when available.</option>
          <option>Undecided</option>
          <option>Not Right Now</option>
        </select>
        <i className="child icon select-icon"></i>

        <div className="text-danger my-2">{feedback}</div>
        <div className="text-center">
          <button className="btn btn-primary w-75 my-4" onClick={gather} type="button">Submit</button>
        </div>
      </div>
      </div>
      </div>
    </React.Fragment>
  )
} 