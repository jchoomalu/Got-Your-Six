import { like } from '../../axios-apis/api-news-events'
import React, { useState } from 'react'
import './LikesButton.css'

const LikesButton = ({ article, model, change, setChange, hidden, user }) => {
  const [feedback, setFeedback] = useState('')

  //handles likes for stories and news articles 
  //checks id against current user id and either sets feedback to already liked or adds user
  const handleLike = async () => {
    let likesArr = []
    if (typeof article.likes[0] !== 'string') {
      article.likes.forEach((id) => {
        likesArr.push(id._id)
      })
    }
    let articleId = article._id
    let userId = user._id
    if (article.likes.includes(userId) || likesArr.includes(userId)) {
      return setFeedback("You already liked this post.")
    } else {
      try {
        await like(model, userId, articleId)
      } catch (err) {
        document.location = '/error'
      }
      //forces a rerender upon like
      let toggler = change === true ? false : true
      setChange(toggler)
    }
  }

  return (
    <React.Fragment>
      <div><small>{feedback}</small></div>
      <button onClick={handleLike} className={`ui floated primary button ${hidden}`}>
        <div> <i className="right thumbs up icon"></i>
          <span>{article.likesCount} Likes</span>
        </div>
      </button>
    </React.Fragment>
  )
}

export default LikesButton