import React, { useState, useEffect } from 'react'
import Tabs from '../../Components/Tabs'
import { list } from '../../axios-apis/api-news-events'
import { getUser } from '../../axios-apis/api-user'
import Header from '../../Components/Header'

//get all events articles from server and sets them in state sorted by date or attendees
//sends sorting functions and model/article information to the tabs component

const Events = () => {
  const [user, setUser] = useState('')
  const [allNews, setAllNews] = useState([])
  const [newsByDate, setNewsByDate] = useState([])
  const [newsByLikes, setNewsByLikes] = useState([])
  const [change, setChange] = useState(true)

  const token = sessionStorage.getItem('token')
  
  useEffect(() => {
    !token ? window.location = '/auth/signin' : checkUser()
    showAll()
    showRecent()
    showTrending()
  }, [change])

  const checkUser = async () => {
    try {
      const currentUser = await getUser()
      setUser(currentUser.data)
    } catch (err) {
      document.location = './error'
    }
  }

  const showRecent = async () => {
    try {
      const getByDate = await list('events', 'date')
      setNewsByDate(getByDate.data)
    } catch (err) {
      document.location = './error'
    }
  }

  const showTrending = async () => {
    try {
      const getByLikes = await list('events', 'attendance')
      setNewsByLikes(getByLikes.data)
    } catch (err) {
      document.location = '/error'
    }
  }

  const showAll = async () => {
    try {
      const getAllNews = await list('events', null)
      setAllNews(getAllNews.data)
    } catch (err) {
      document.location = './error'
    }
  }

  return (
    <div>
      <Header />
      <Tabs user={user} showAll={showAll} showRecent={showRecent}
        showTrending={showTrending} allNews={allNews}
        newsByDate={newsByDate} newsByLikes={newsByLikes}
        change={change} setChange={setChange} model='events' />
    </div>
  )


}

export default Events