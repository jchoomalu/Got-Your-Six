import newsapi from '../../axios-apis/api-news-events'
import React, { useState } from 'react'

const AttendingButton = ({ article, model, change, user, setChange, hidden }) => {
  //feedback will show user if they already liked this 
  //hidden prop passed from ArticleFull when model is news or story
  const [feedback, setFeedback] = useState('')

  //creates an array of member id an checks current users id to ensure they haven't chose to attend already
  const handleAttend = async () => {
    let attendingArr = []
    if (typeof article.attending[0] !== 'string') {
      article.attending.forEach((id) => {
        attendingArr.push(id._id)
      })
    }
    let userId = user._id
    let articleId = article._id
    if (article.attending.includes(userId) || attendingArr.includes(userId)) {
      return setFeedback("You are planning to attend.")
    } else {
      try {
        await newsapi.attend(model, userId, articleId)
      } catch (err) {
        document.location = '/error'
      }
      //forces a rerender upon attend press
      let toggler = change === true ? false : true
      setChange(toggler)
    }
  }

  return (
    <React.Fragment>
      <div><small>{feedback}</small></div>
      <button onClick={handleAttend} className={`ui floated primary button ${hidden}`}>
        <div><i className="check icon"></i>
          <span className="p-1">Attend</span>
        </div>
      </button>
    </React.Fragment>
  )
}

export default AttendingButton