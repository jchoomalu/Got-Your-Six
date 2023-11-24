import { likeComment } from '../../axios-apis/api-news-events'
import React, { useState } from 'react'
import './CommentLike.css'

//handles likes for individual comments
const CommentLike = ({ model, commentId, userId, articleId, likes, change, setChange }) => {
  const [feedback, setFeedback] = useState('')
  //handles likes for comments
  const handleLike = async (e) => {
    e.stopPropagation()
    try {
      const test = await likeComment(model, userId, articleId, commentId)
      setFeedback(test.data.message)
    } catch (err) {
      return setFeedback(err.response.data.message)
    }
    let toggler = change === true ? false : true
    setChange(toggler)
  }

  return (
    <React.Fragment>
      <div role="button" onClick={handleLike} id="like-icon" className="ui floated basic button">
        <div onClick={handleLike}><i className="right thumbs up icon"></i>
        </div>
        <div onClick={handleLike}><small>{likes}</small></div>
        <div onClick={handleLike}><small>{feedback}</small></div>
      </div>
    </React.Fragment>
  )
}

export default CommentLike