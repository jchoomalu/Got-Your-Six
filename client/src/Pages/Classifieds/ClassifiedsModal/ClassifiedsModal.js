import { useState, useEffect } from 'react'
import { newPost } from '../../../axios-apis/api-classifieds'
import logo from '../../../assets/images/sixLogo2.png'

const ClassifiedsModal = ({ id, state, user, change, setChange }) => {
  const [inputs, setInputs] = useState({})
  const [image, setImage] = useState({})
  const [feedback, setFeedback] = useState('')

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInputs(values => ({ ...values, [name]: value }))
  }

  function gatherFile(e) {
    const files = e.target.files
    //creates and replaces input with selected image
    const reader = new FileReader()
    reader.readAsDataURL(files[0])
    //state management 
    setImage(image)
    setInputs({ ...inputs, image: files[0] })
  }

  const handleForm = async (e) => {
    e.preventDefault()
    const close = document.getElementById('close')
    if (!inputs.title) {
      return setFeedback("title is required")
    } else if (!inputs.cost) {
      return setFeedback("cost is required")
    } else if (!inputs.city) {
      return setFeedback("city is required")
    } else if (!inputs.description) {
      return setFeedback("description is required")
    } else if (!inputs.image) {
      return setFeedback("image is required")
    } else {
      close.click()
      let toggler = change === true ? false : true
      setChange(toggler)
      window.scrollTo(0, document.body.scrollHeight)
      let form = new FormData()
      form.append('title', inputs.title)
      form.append('cost', inputs.cost)
      form.append('city', inputs.city)
      form.append('description', inputs.description)
      form.append('image', inputs.image)
      form.append('postedBy', user)
      try {
        await newPost(state, form, user)
      } catch (err) {
         document.location = '/error'
      }
    }
  }

  return (
    <div id={id} className="modal fade" tabIndex="-1">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-body">
            <form id="classifieds-form" className="ui form">
              <div className="ui horizontal divider">
                <img className="mini-logo" src={logo} alt="got your six logo small" />Classifieds </div>
              <p className="text-danger text-center">{feedback}</p>
              <div className="field">
                <label>Title: </label>
                <input value={inputs.title || ''} required onChange={handleChange} type="text" id="title" name="title" />
              </div>
              <div className="row">
                <div className="field col-6">
                  <label>Cost / Pay: </label>
                  <input value={inputs.cost || ''} required onChange={handleChange} type="text" id="cost" name="cost" />
                </div>
                <div className="field col-6">
                  <label>City: </label>
                  <input value={inputs.city || ''} required onChange={handleChange} type="text" id="city" name="city" />
                </div>
              </div>
              <div className="field">
                <label>Description: </label>
                <textarea value={inputs.description || ''} required onChange={handleChange} id="description" name="description"></textarea>
              </div>
              <div className="field">
                <label>Add Image: </label>
                <input required onChange={gatherFile} type="file" id="image" name="image" />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button id="close" type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <div onClick={handleForm} className="ui floated primary button">
              <i className="compose icon"></i> Submit
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClassifiedsModal