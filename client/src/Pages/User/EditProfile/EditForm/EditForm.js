import React, { useState, useEffect } from 'react'
import { getUser, updateUser } from '../../../../axios-apis/api-user'
import states from '../../../../assets/data/raw.json'
import AvatarModal from '../../Signup/AvatarModal'
import {Link} from 'react-router-dom'
import './EditForm.css'

//displays form for personal info and password
export const EditForm = () => {
  const [user, setUser] = useState('')
  const [feedback, setFeedback] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [branch, setBranch] = useState('')
  const [status, setStatus] = useState('')
  const [image, setImage] = useState('')
  const [avatar, setAvatar] = useState('')
  const [volunteer, setVolunteer] = useState('')
  const [inputs, setInputs] = useState('')

  const token = window.sessionStorage.getItem('token')

  useEffect(() => {
    checkUser()
  }, [])

  //gets current user 
  const checkUser = async () => {
    if (token) {
      try {
        const currentUser = await getUser()
        setUser(currentUser.data)
        setName(currentUser.data.name)
        setEmail(currentUser.data.email)
        setCity(currentUser.data.city)
        setState(currentUser.data.state)
        setBranch(currentUser.data.branch)
        setStatus(currentUser.data.status)
        setVolunteer(currentUser.data.volunteer)
        setImage(currentUser.data.image)
        setAvatar(currentUser.data.avatar)
      } catch (err) {
        window.location.href = '/error'
      }
    }
  }

  //name and value not called untill change event
  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs(values => ({ ...values, [name]: value }))
  }

  //simulates click on hidden form input
  function handleFile() {
    const fileBtn = document.getElementById('fileInput')
    fileBtn.click()
  }

  function handleAvatar(e) {
    const previewBox = document.getElementById('preview-box')
    previewBox.replaceChildren('')
    let src = e.target.getAttribute('src')
    const img = document.createElement('img')
    img.setAttribute('src', src)
    img.classList.add('edit-preview')
    img.classList.add('img-fluid')
    previewBox.append(img)
    setAvatar(avatar)
    setInputs({ ...inputs, avatar: src, image: '' })
  }

  function gatherFile(e) {
    const previewBox = document.getElementById('preview-box')
    previewBox.replaceChildren('')
    //logic to show and upload and read file to show user preview
    const files = e.target.files
    //creates and replaces input with selected image
    const img = document.createElement('img')
    img.classList.add('edit-preview')
    img.classList.add('img-fluid')
    img.file = files[0]
    previewBox.append(img)
    const reader = new FileReader()
    reader.onload = (function (myImg) {
      return function (e) {
        myImg.src = e.target.result
      }
    })(img)
    reader.readAsDataURL(files[0])
    //state management 
    setImage(image)
    setInputs({ ...inputs, avatar: '', image: files[0] })
  }


  const update = async (e) => {
    const emailBox = document.getElementById('email')
    e.preventDefault()
    let form = new FormData()
    form.append('name', inputs.name)
    form.append('email', inputs.email)
    form.append('city', inputs.city[0].toUpperCase() + inputs.city.substring(1))
    form.append('state', inputs.state)
    form.append('branch', inputs.branch)
    form.append('status', inputs.status)
    form.append('volunteer', inputs.volunteer)
    form.append('image', inputs.image)
    form.append('avatar', inputs.avatar)
    try {
      const res = await updateUser(user._id, form)
      if (res.status === 201) {
        setFeedback(res.data.message)
        emailBox.select()
      } else {
        document.location = '/users/profile'
      }
    } catch (err) {
      document.location = '/error'
    }
  }


  if (user) {
    return (
      <React.Fragment>
        <AvatarModal handleAvatar={handleAvatar} />
        <div className="ui col-10 mx-auto">
          <h1 className="my-3 text-center">Edit Profile</h1>
          <h4 className="my-3 text-center text-danger">{feedback}</h4>
          <div className="ui large form my-3">
            <form onSubmit={update} className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input"><i className="user icon"></i>
                  <input 
                    aria-label="name"
                    id="name"
                    type="text"
                    name="name"
                    placeholder={user.name}
                    required
                    onFocus={(e) => { e.target.select() }}
                    onChange={handleChange}
                    value={inputs.name || ''} />
                </div>
              </div>

              <div className="field">
                <div className="ui left icon input"><i className="mail icon"></i>
                  <input
                    aria-label="email"
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder={user.email}
                    onFocus={(e) => { e.target.select() }}
                    onChange={handleChange}
                    value={inputs.email || ''} />
                </div>
              </div>

              <div className="field">
                <div className="ui left icon input"><i className="building icon"></i>
                  <input
                    aria-label="city"
                    id="city"
                    name="city"
                    type="text"
                    required
                    placeholder={user.city}
                    onFocus={(e) => { e.target.select() }}
                    value={inputs.city || ''}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="field text-white">
                <select
                  aria-label="state"
                  className="placeholder-option"
                  onChange={handleChange}
                  value={inputs.state || ''}
                  name="state"
                  id="state"
                  required
                >
                  <option id="place" disabled select="true" value="">State</option>
                  {states.states.map(state => (
                    <option key={state}>{state}</option>
                  ))}
                </select>
                <i className="location arrow icon select-icon"> </i>
              </div>

              <div className="field text-white">
                <select
                  aria-label="service branch"
                  className="placeholder-option"
                  id="branch"
                  name="branch"
                  value={inputs.branch || ''}
                  onChange={handleChange}
                  required
                >
                  <option disabled select="true" value=''>Branch</option>
                  <option>Army</option>
                  <option>Air / Space Force</option>
                  <option>Navy / Marines</option>
                  <option>Coast Guard</option>
                  <option>Patriot Citizen</option>
                </select>
                <i className="world icon select-icon"> </i>
              </div>

              <div className="field my-2">
                <select
                  aria-label="service status"
                  className="placeholder-option"
                  id="status"
                  name="status"
                  value={inputs.status || ''}
                  onChange={handleChange}
                  required
                >
                  <option disabled select="true" value=''>Service</option>
                  <option>Active Duty</option>
                  <option>Reserve / National Guard</option>
                  <option>Veteran</option>
                  <option>Retired</option>
                  <option>Citizen</option>
                </select>
                <i className="military icon select-icon"></i>
              </div>

              <div className="field my-3">
                <select
                  aria-label="volunteer status"
                  className="placeholder-option"
                  id="volunteer"
                  name="volunteer"
                  placeholde="text"
                  value={inputs.volunteer || ''}
                  onChange={handleChange}
                  required
                >
                  <option disabled select="true" value=''>Volunteer</option>
                  <option>Yes, Please contact me anytime.</option>
                  <option>Yes, I will contact you when available.</option>
                  <option>Undecided</option>
                  <option>Not Right Now</option>
                </select>
                <i className="child icon select-icon"></i>
              </div>
              <div className="row">
                <div id="preview-box" className="col-3">
                  {user.image ?
                    <img className="edit-preview img-fluid" src={`data:image/*;base64,${user.image.data}`} alt="personal user image" />
                    :
                    <img className="edit-preview img-fluid" src={user.avatar} alt="stock user avatar" />
                  }
                </div>
                <div className="col-9">
                  <input id="fileInput" type="file" onChange={gatherFile} />
                  <div>
                    <button onClick={handleFile} className="btn btn-primary w-100 mt-3" type="button">
                      <i className="camera icon"></i>
                      Update Profile Photo?</button>
                    <div>
                    </div>
                    <button data-bs-toggle="modal" data-bs-target="#avatarModal" className="btn btn-primary w-100 mt-3" type="button">
                      <i className="drupal icon"></i>
                      Use Avatar Photo?</button>
                  </div>
                  <button className="btn btn-primary w-100 mt-3" type="submit">Submit Changes</button>
                  <Link to="/users/profile"><button className="btn btn-danger w-100 mt-3">Cancel</button></Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default EditForm