import logo from '../../assets/images/sixLogo2.png'
import { useState, useEffect } from 'react'
import { newComment } from '../../axios-apis/api-news-events'
import { getUser } from '../../axios-apis/api-user'

const CommentModal = ({ id, article, model, change, setChange, setFeedback }) => {
  const [comment, setComment] = useState('')
  const [user, setUser] = useState('')
  const token = sessionStorage.getItem('token')

  //retrieve user information 
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

  //send post request to server to add comment
  //scroll to the bottom of the page when submitted
  //rerender component with toggler
  const postComment = async (e) => {
    e.preventDefault()
    if (comment === '') {
      return setFeedback("please enter a comment")
    } else {
    window.scrollTo(0, document.body.scrollHeight)
    let userId = user._id
    let articleId = article._id
    let toggler = change === true ? false : true
    setChange(toggler)
    setFeedback('')
    try {
      await newComment(comment, model, userId, articleId)
    } catch (err) {
      document.location = '/error'
    }
    setComment('')
  }
  }

  return (
    <div id={id} className="modal fade" tabIndex="-1">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title text-center">{article.title}</h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="ui form">
              <div className="ui horizontal divider">
                <img className="mini-logo" src={logo} alt="got your six logo" />
              </div>
              <div className="field">
                <label>Tell us what you think: </label>
                <textarea id="comment-body" 
                required
                value={comment} 
                onChange={(e) => setComment(e.target.value)}>
                </textarea>
              </div>
              <div className="field">
              </div>
            </div>
          </div>
          <div className="modal-footer">

            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <div 
            className="ui floated primary button"
            role="button"
            onClick={postComment} 
            data-id={id} 
            data-bs-dismiss="modal" 
            aria-label="Close" 
            >
              <div>
                <i className="right pencil right icon"></i>
                <span>Post Comment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentModal