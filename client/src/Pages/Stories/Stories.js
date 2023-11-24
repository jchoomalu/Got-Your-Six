import Tabs from '../../Components/Tabs'
import { list } from '../../axios-apis/api-news-events'
import {getUser} from '../../axios-apis/api-user'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import StoryHeader from './StoryHeader'
import './Stories.css'

const Stories = () => {
  const [user, setUser] = useState('')
  const [allNews, setAllNews] = useState([])
  const [newsByDate, setNewsByDate] = useState([])
  const [newsByLikes, setNewsByLikes] = useState([])
  const [change, setChange] = useState(true)


  //requires user to be logged in to view stories
  const token = sessionStorage.getItem('token')
  useEffect(() => {
    !token ? window.location = '/auth/signin' :
    checkUser()
    showAll()
    showRecent()
    showTrending()
  }, [change])

  const checkUser = async () => {
    try {
    const currentUser = await getUser()
    setUser(currentUser.data)
    } catch (err) {
      document.location = '/error'
    }
  }

  //story sorting by date and likes
  const showRecent = async () => {
    try {
    const getByDate = await list('stories', 'date')
    setNewsByDate(getByDate.data)
    } catch (err) {
      document.location = '/error'
    }
  }

  const showTrending = async () => {
    try {
    const getByLikes = await list('stories', 'likes')
    setNewsByLikes(getByLikes.data)
    } catch (err) {
      document.location = '/error'
    }
  }

  const showAll = async () => {
    try {
    const getAllNews = await list('stories', null)
    setAllNews(getAllNews.data)
    } catch (err) {
      document.location = '/error'
    }
  }

  return (
    <div>
      <StoryHeader />
      <div className="create-story text-white text-center mb-3">
        <h3>Have a story to tell?</h3>
        <h5 className="p-2">Funny, sad, inspirational or 100% FUBAR, we want to hear it.</h5>
        <Link to="/info/stories/new">
          <div role="button" className="ui primary button">
            <i className="compose icon"></i> Write Your Story
        </div>
        </Link>
      </div>
      <Tabs user={user} showAll={showAll} showRecent={showRecent}
        showTrending={showTrending} allNews={allNews}
        newsByDate={newsByDate} newsByLikes={newsByLikes}
        change={change} setChange={setChange} model='stories' />
    </div>
  )
}

export default Stories