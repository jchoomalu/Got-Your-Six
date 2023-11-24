import React from 'react'
import states from '../../../../assets/data/raw.json'

//displays form for geograpical info 
export const Location = ({ city, setCity, state, setState, gather, feedback }) => {

  return (
    <div className="ui large form text-white">
      <div className="ui form segment">
        <div className="mx-auto row">
          <div className="col-12">
            <div className="field">
              <div className="ui left icon input"><i className="building icon"></i>
                <input
                  aria-label="city" 
                  autoFocus
                  id="city"
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => { setCity(e.target.value) }}
                  required
                />
              </div>
            </div>
          </div>

          <div className="col-12 my-2">
            <div className="field text-white">
              <select
                aria-label="state" 
                id="state"
                className="placeholder-option"
                value={state}
                onChange={(e) => { setState(e.target.value) }}
                required
              >
                <option disabled select="true" value="">Select A State</option>
                {states.states.map(state => (
                  <option key={state}>{state}</option>
                ))}
              </select>
              <i className="location arrow icon select-icon"></i>
            </div>
          </div>
          <div className="text-danger">{feedback}</div>
          <div className="text-center">
            <button className="btn btn-primary w-75 my-4" onClick={gather} type="button">Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
