import { useState, useEffect } from 'react'
import { getUser, updatePrivacy } from '../../../axios-apis/api-user'
import './Privacy.css'

const Privacy = () => {
  const [user, setUser] = useState({})
  const [inputs, setInputs] = useState('')

  const token = sessionStorage.getItem('token')

  useEffect(() => {
    checkUser()
  }, [])

  //gets current user 
  const checkUser = async () => {
    if (token) {
      try {
        const currentUser = await getUser()
        setUser(currentUser.data)
      } catch (err) {
        document.location = '/error'
      }
    }
  }

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs(values => ({ ...values, [name]: value }))
  }

  const doUpdatePrivacy = (e) => {
    e.preventDefault()
    try {
    updatePrivacy(user._id, inputs)
    document.location = '/users/profile'
    } catch (err) {

    }
  }

  if (user) {
    return (
      <div>
        <div className="ui horizontal divider">
          <div className="gy6-heading my-5">
            <i className="lock icon"></i>
            <h6>Privacy Settings</h6>
          </div>
        </div>

        <h4 className="text-center">Your privacy is our priority, please take a moment to edit your privacy details.</h4>

        <form onSubmit={doUpdatePrivacy} className="ui segment col-10 col-md-7 mx-auto my-5 form privacy-form">
          <div className="field my-3 mx-auto my-3">
            <select
              className="placeholder-option"
              id="private"
              name="private"
              placeholde="text"
              value={inputs.private || ''}
              onChange={handleChange}
              required
            >
              <option disabled select="true" value=''>Privacy Options</option>
              <option value={false}>Public, members can view my profile.</option>
              <option value={true}>Private, members cannot view my profile.</option>
            </select>
            <i className="privacy icon select-icon"></i>
          </div>
          <div className="text-center">
          <button className="btn btn-primary my-3 w-100" type="submit">Submit</button>
          </div>
        </form>

      </div>
    )
  }
}

export default Privacy