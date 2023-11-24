import React, { useState, useEffect } from 'react'
import unknown from '../../../assets/data/raw.json' //imports default data from raw json
import { create } from '../../../axios-apis/api-news-events'
import { getUser } from '../../../axios-apis/api-user'
import StoryHeader from '../StoryHeader'
import './StoryForm.css'

//form for publishing a story
const StoryForm = () => {
  const [formData, setFormData] = useState({})
  const [user, setUser] = useState({})

  useEffect(() => {
    checkUser()
  })

  //check current user info for publishing 
  const checkUser = async () => {
    try {
    const currentUser = await getUser()
    setUser(currentUser.data)
    } catch (err) {
      document.location = '/error'
    }
  }

  //collect data from form inputs 
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormData(values => ({ ...values, [name]: value }))
  }

  //validation is handles with simple required attribute on inputs
  const handleSubmit = (e) => {
    e.preventDefault()
    //assigns random image to story
    formData.image = unknown.storyImages[Math.floor(Math.random() * 5)]
    //decides if author is to remain anonymous
    if (formData.author === 'anonymous') {
      formData.author = unknown.unknown._id
    } else {
      formData.author = user._id
    }
    //decides if commments are allowed or not
    if (formData.allowComments === "true") {
      formData.allowComments = true
    } else {
      formData.allowComments = false
      formData.comments = [null]
    }
    try {
    create(formData)
    document.location = '/info/stories'
    } catch (err) {
      document.location = '/error'
    }
  }

  //allows for multiple line placeholder altered and customized from stack overflow
  let textareaPlaceholder = document.getElementsByTagName('textarea')
  Array.prototype.forEach.call(textareaPlaceholder, (area) => {
    area.placeholder = area.placeholder.replace(/\\n/g, '\n')
})

  return (
    <div>
      <StoryHeader />
      <form className="ui form story-form col-10 my-5 mx-auto" onSubmit={handleSubmit}>
        <div className="text-center">
          <h2 className="my-3">Publish your story</h2>
          <div className="ui corner shadow labeled col-10 my-1 input">
            <input type="text"
              placeholder="Title"
              name="title"
              minLength="5"
              maxLength="40"
              required
              value={formData.title || ""}
              onChange={handleChange} />
            <div className="ui corner label">
              <i className="asterisk icon"></i>
            </div>
          </div>

          <div className="ui shadow corner labeled col-10 my-1 mx-2 input">
            <input type="text"
              placeholder="Subtitle"
              required
              name="subtitle"
              minLength="5"
              maxLength="60"
              value={formData.subtitle || ""}
              onChange={handleChange}
            />
            <div className="ui corner label">
              <i className="asterisk icon"></i>
            </div>
          </div>

          <div className="ui shadow corner labeled col-10 my-1 mx-2 input">
            <textarea
              placeholder="Please share your stroy with us. Remember you have publishing options \n\n
              *Publish Anonymously, Allow comments \n
              *Publish Anonymously, Disallow comments \n
              *Publish Publically, Allow comments \n
              *Publish Publically, Disallow comments \n
               \n\n The most popular stories are between 1000-2000 words. But your story can be as long or as short as you'd like. 
               Have fun and share your experiences with us!"
              required
              name="article"
              rows='15'
              value={formData.article || ""}
              onChange={handleChange}
            ></textarea>
            <div className="ui corner label">
              <i className="asterisk icon"></i>
            </div>
          </div>

          <div className="container">
              <div className="field shadow col-10 mx-auto text-start">
              <select
                className="placeholder-option"
                name="category"
                value={formData.category || ""}
                onChange={handleChange}
                required>
                <option value="">Category</option>
                <option value="Military Story">Military Story</option>
                <option value="Combat Story">Combat Story</option>
                <option value="Inspirational Story">Inspirational Story</option>
                <option value="Humor Story">Humor Story</option>
                <option value="Other Story">Other Story</option>
              </select>
              <i className="ellipsis horizontal icon select-icon"></i>
            </div>


            <div className="field shadow col-10 mx-auto text-start">
              <select
                className="placeholder-option"
                name="allowComments"
                value={formData.allowComments || ""}
                onChange={handleChange}
                required>
                <option value="">Allow Comments?</option>
                <option value={true}>Yes, Allow comments</option>
                <option value={false}>No, don't allow</option>
              </select>
              <i className="comment icon select-icon"></i>
            </div>

            <div className="field shadow col-10 mx-auto text-start">
              <select
                className="placeholder-option"
                name="author"
                value={formData.author || ""}
                onChange={handleChange}
                required>
                <option value="">Publish Anonymously?</option>
                <option value="anonymous">Publish Anonymously</option>
                <option value="user">Publish Publicly</option>
              </select>
              <i className="question icon select-icon"></i>
            </div>
            
          </div>
          <button className="btn btn-primary w-50 my-3" type="submit">Publish Story</button>
        </div>
      </form>
    </div>
  )
}

export default StoryForm