import React from 'react'
import {Link} from 'react-router-dom'
import './FormComponents.css'

//displays form for personal info and password
export const Personal = ({ name, setName, email, setEmail, password, setPassword, confirm, setConfirm, gather, feedback }) => {
  return (
    <React.Fragment>
      <div className="ui col-12 mx-auto">
        <div className="ui large form">
          <div className="ui stacked segment">
            <div className="field">
              <div className="ui left icon input"><i className="user icon"></i>
                <input
                  aria-label="name" 
                  autoFocus
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  value={name} />
              </div>
            </div>


            <div className="field">
              <div className="ui left icon input"><i className="mail icon"></i>
                <input
                  aria-label="email" 
                  id="email"
                  type="email"
                  name="email"
                  placeholder="E-mail address"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email} />
              </div>
            </div>

            <div className="field">
              <div className="ui left icon input"><i className="lock icon"></i>
                <input
                  aria-label="create a password" 
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password} />
              </div>
            </div>


            <div className="field">
              <div className="ui left icon input"><i className="shield icon"></i>
                <input
                  aria-label="confirm your password" 
                  id="confirm"
                  type="password"
                  name="confirm"
                  placeholder="Confirm password"
                  onChange={(e) => setConfirm(e.target.value)}
                  value={confirm} />
              </div>
            </div>
            <div className="text-danger">{feedback}</div>
            <div className="text-center">
              <button id="personal-btn" className={`btn btn-primary w-75 my-4`} onClick={gather} type="button">Submit</button>
            </div>
          </div>
        </div>
        <div className="ui message text-center">
          Already a member? <Link to="/auth/signin">Sign In</Link>
        </div>
      </div>

    </React.Fragment>
  )
} 