import React from 'react'
import { Link } from 'react-router-dom'
import LikesButton from '../LikesButton'
import AttendingButton from '../AttendingButton'

const ArticlePreview = ({ news, user, change, setChange, hidden, model }) => {

  //shows list of all articles and a blurb allows users to like and attend from preview list
  //also links to a list of users who previous liked or attended
  return (
    <div className="ui col-7 mx-auto relaxed divided items py-5">
      {news.map((article, i) => (
        <div key={i} className="item">
          <div className="ui small image">
            <img src={article.image} alt={`image for ${article.title}`} />
          </div>
          <div className="content">
            <Link to={`/info/${model}/${article._id}`} className="header">{article.title}</Link>
            <div className="meta">
              <span>{article.category} –</span>
              <span>{new Date(article.created).toLocaleDateString()}</span>
            </div>
            <div className="description">
              {article.subtitle}
            </div>
            <div className="extra">
              {model === "news" || model === "stories" ?
                <LikesButton user={user} article={article} model={model} setChange={setChange} change={change} hidden={hidden} /> :
                <AttendingButton user={user} article={article} model={model} setChange={setChange} change={change} hidden={hidden} />
              }
              <Link to={`/info/${model}/${article._id}`}>
                <div role="button" className="ui floated primary button">
                  Full Story
                  <i className="right chevron icon"></i>
                </div>
              </Link>
            </div>
            {article.likes ?
              <Link className={hidden} to={`/info/${model}/${article._id}/likes`}>{article.likesCount} GY6 members liked this</Link>
              :
              <Link className={hidden} to={`/info/${model}/${article._id}/attending`}>{article.attendingCount} GY6 members are attending</Link>
            }
          </div>
        </div>
      ))}
    </div>
  )
}

export default ArticlePreview
