import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import logo from '../../assets/images/sixLogo2.png'
import { findOne } from '../../axios-apis/api-news-events'
import { getUser } from '../../axios-apis/api-user'
import LikesButton from '../../Components/LikesButton'
import AttendingButton from '../../Components/AttendingButton'
import GobackButton from '../../Components/GobackButton'
import AllInterestedButton from '../../Pages/Events/AllInterestedButton'
import CommentButton from '../../Components/CommentButton'
import CommentModal from '../../Components/CommentModal'
import './ArticleFull.css'
import CommentLike from '../CommentLike/CommentLike'
import {deleteStory} from '../../axios-apis/api-news-events'

//this component shows full article for stories, news and events
const ArticleFull = ({ model }) => {
  //toggler for updating parent as well as button info
  const [change, setChange] = useState(true)
  const [article, setArticle] = useState([])
  const [comments, setComments] = useState([])
  const [feedback, setFeedback] = useState('')
  const [user, setUser] = useState([])
  const articleId = useParams().id
  const token = window.sessionStorage.getItem('token')

  useEffect(() => {
    getArticle()
    checkUser()
  }, [change])

  //gets article and formats for articles that allow comments since comments are optional on stories and not
  //allowed at all on events
  const getArticle = async () => {
    const currentArticle = await findOne(model, articleId)
    let validComments = []
    if (currentArticle.data.comments) {
      currentArticle.data.comments.forEach((com) => {
        if (com !== null && com.commentUser !== null) {
          validComments.push(com)
        }
      })
    }
    setArticle(currentArticle.data)
    setComments(validComments)
  }

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
  
  const doDeleteStory = (e) => {
    let id = e.target.dataset.id
    try {
      deleteStory(id)
      document.location = '/info/stories'
    } catch (err) {
      document.location = '/error'
    }
  }

  return (
    <div className="container article-main">
      <CommentModal setFeedback={setFeedback} model={model} change={change} setChange={setChange} id={article._id} article={article} />
      <div>
        <h1>{article.title}</h1>
        <h6>{article.subtitle}</h6>
        {article.author ?
          <Link className="author-link" to={`/users/${article.author._id}`}>
            <p className="author-info">{article.author.name}</p>
          </Link>
          :
          ''
        }
        {article.author && article.author._id === user._id ? 
        <div>
          <div onClick={doDeleteStory} data-id={article._id} className="ui red button my-3">
              <i className="trash icon"></i> Delete
            </div>
            <span>You created this story</span>
            </div>
            : ''
        }
        
        <div className="ui horizontal divider">
          <p className="gy6-heading">
            <img className="med-logo" src={logo} alt="got your six logo" />
            {article.category}</p>
        </div>
      </div>
      <img className="article-image" src={article.image} alt={`image for ${article.title}`} />
      <p className="article-body lh-4">{article.article}</p>
      {article.likes ?
        <div className="text-center row">
          <div className="col-4"><GobackButton model={model} /></div>
          <div className="col-4"><LikesButton model={model} user={user} article={article} change={change} setChange={setChange} /></div>
          {article.comments[0] !== null ?
            <div className="col-4"><CommentButton model={model} id={article._id} article={article} /></div> :
            ''}
          <div className="ui horizontal divider">
            <p className="gy6-heading">Comments</p>
          </div>
          <div className="text-danger text-center">{feedback}</div>
        </div>
        :
        <div className="text-center row">
          <div className="col-4"><GobackButton model={model} /></div>
          <div className="col-4"><AttendingButton model={model} user={user} id={article._id} article={article} change={change} setChange={setChange} /></div>
          <div className="col-4"><AllInterestedButton model={model} id={article._id} article={article} /></div>
        </div>
      }
      {comments ? comments.map((comment, i) => (
        <div key={i} className="comment-box">
          <CommentLike change={change} setChange={setChange} model={model} likes={comment.likesCount} commentId={comment._id} userId={user._id} articleId={article._id} />
          {comment.commentUser.image ?
            <img className="round-small" src={`data:image/*;base64,${comment.commentUser.image.data}`} alt="personal user image" />
            :
            <img className="round-small" src={comment.commentUser.avatar} alt="user stock avatar" />
          }
          <h5><Link to={`/users/${comment.commentUser._id}`}>{comment.commentUser.name}</Link><span className="text-secondary"> – {comment.commentUser.city}, {comment.commentUser.state}</span></h5>
          <div className="text-secondary">{comment.commentUser.branch} – {comment.commentUser.status}</div>
          <hr className="dec-hr" />
          <div className="comment-body">{comment.commentBody}</div>
          <div className="date-stamp text-secondary">{new Date(comment.commentDate).toLocaleDateString()} – {new Date(comment.commentDate).toLocaleTimeString()}</div>
        </div>
      )) : ''}
    </div>
  )
}

export default ArticleFull
