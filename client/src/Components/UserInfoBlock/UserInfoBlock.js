import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { findOne } from '../../axios-apis/api-news-events'
import { Link } from 'react-router-dom'
import ArticlePreview from '../../Components/ArticlePreview'
import UserButtons from '../../Components/UserButtons'

//when viewing list of attendees or list of members who likes 
const UserInfoBlock = ({ model, change, setChange }) => {
  const [article, setArticle] = useState([])
  const [userList, setUserList] = useState([])

  //get populated list of interested parties on mount 
  useEffect(() => {
    getInterestedUsers()
  }, [])

  const articleId = useParams().id

  const getInterestedUsers = async () => {
    try {
      const article = await findOne(model, articleId)
      setArticle([article.data])
      article.data.likes ? setUserList(article.data.likes) : setUserList(article.data.attending)
    } catch (err) {
      document.location = '/error'
    }
  }

  //renders a preview of the article as well as all interested parties
  return (
    <React.Fragment>
      {article ? <ArticlePreview model={model} change={change} setChange={setChange} news={article} hidden={'d-none'} /> :
        ''}
      <div className="ui horizontal divider">
        {model === 'news' || model === "stories" ?
          <p className="secure-heading">GY6 Members Who Like This</p>
          :
          <p className="secure-heading">GY6 Planning To Attend</p>
        }
        <i className="heart icon"></i>
      </div>
      <div className="container">
        <div className="col-8 mx-auto user-box">
          {userList.length !== 0 ? userList.map((user, i) => (
            <div key={i} className="comment-box row">
              <div className="d-none d-md-block col-3">
                {user.image ?
                  <img className="round" src={`data:image/*;base64,${user.image.data}`} alt="user image" />
                  :
                  <img className="round" src={user.avatar} alt="stock user avatar" />
                }
              </div>
              <div className="col-md-7 offset-md-1">
                {user.image ?
                  <div className="extra d-block d-md-none">
                    <img className="mini-img avatar image" src={`data:image/*;base64,${user.image.data}`} alt="user image" />
                  </div>
                  :
                  <div className="extra d-block d-md-none">
                    <img className="mini-img avatar image" src={user.avatar} alt="stock user avatar" />
                  </div>
                }
                <Link to={`/users/${user._id}`} className="header fs-2 user-info">{user.name}</Link>
                <p className="user-details text-center text-md-start">{user.email}</p>
                <div className="text-secondary d-none d-md-block my-3">
                  <p className="user-details">{user.city} – {user.state}</p>
                  <p className="user-details">{user.branch} – {user.status}</p>
                  <p className="user-details">Member since – {new Date(user.created).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="btn-list d-none d-md-block text-center">
                <UserButtons id={user._id} name={user.name} />
              </div>
            </div>
          )) :
            <h1 className="text-center my-5">No Members Are Interested Yet</h1>}
        </div>
      </div>
    </React.Fragment>
  )
}

export default UserInfoBlock