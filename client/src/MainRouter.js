//MAIN ROUTER 
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import News from './Pages/News'
import Events from './Pages/Events'
import ByState from './Pages/User/ByState'
import Classifieds from './Pages/Classifieds'
import InterestedList from './Pages/InterestedList'
import EditProfile from './Pages/User/EditProfile'
import MemberProfile from './Pages/User/MemberProfile'
import Privacy from './Pages/User/Privacy'
import Stories from './Pages/Stories'
import ResourcesMain from './Pages/Resources/ResourcesMain'
import ResourcesFederal from './Pages/Resources/ResourcesFederal'
import ResourcesPrivate from './Pages/Resources/ResourcesPrivate'
import ResourcesCrisis from './Pages/Resources/ResourcesCrisis'
import Signup from './Pages/User/Signup'
import Signin from './Pages/User/Signin'
import Signout from './Pages/User/Signout'
import Users from './Pages/User/AllUsers'
import ReplyMessage from './Pages/Messages/ReplyMessage'
import Inbox from './Pages/Messages/Inbox'
import NewMessage from './Pages/Messages/NewMessage'
import NewsArticle from './Pages/News/NewsArticle'
import EventsArticle from './Pages/Events/EventsArticle'
import StoryArticle from './Pages/Stories/StoryArticle'
import StoryForm from './Pages/Stories/StoryForm'
import Error404 from './Pages/Error/Error404'
import Error500 from './Pages/Error/Error500'
import EditForm from './Pages/User/EditProfile/EditForm'

//main router serves all the components to the routes listed
//returned in the main App file
//nav and footer are outside Routes to render every time
const MainRouter = () => {
  return (
  <Router>
    <Navbar />
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/auth/signup' element={<Signup />} />
       <Route path='/auth/signin' element={<Signin />} />
       <Route path='/auth/signout' element={<Signout />} />
       <Route path='/users/list' element={<Users />} />
       <Route path='/users/listbystate' element={<ByState />} />
       <Route path='/users/profile' element={<EditProfile />} />
       <Route path='/users/profile/edit' element={<EditForm/>} />
       <Route path='/users/profile/privacy' element={<Privacy/>} />
       <Route path='/users/:id' element={<MemberProfile />} />
       <Route path='/users/local' element={<Classifieds />} />
       <Route path='/info/news' element={<News />} />
       <Route path='/info/events' element={<Events />} />
       <Route path='/info/stories' element={<Stories model="stories" />} />
       <Route path='/info/stories/:id' element={<StoryArticle model="stories" />} />
       <Route path='/info/stories/:id/likes' element={<InterestedList model="stories" />} />
       <Route path='/info/stories/new' element={<StoryForm />} />
       <Route path='/info/news/:id/likes' element={<InterestedList model="news"/>} />
       <Route path='/info/news/:id' element={<NewsArticle model="news"/>} />
       <Route path='/info/events/:id' element={<EventsArticle model="events"/>} />
       <Route path='/info/events/:id/attending' element={<InterestedList model="events" />} />
       <Route path='/resources' element={<ResourcesMain />} />
       <Route path='/resources/federal' element={<ResourcesFederal />} />
       <Route path='/resources/private' element={<ResourcesPrivate />} />
       <Route path='/resources/crisis' element={<ResourcesCrisis />} />
       <Route path='/messages/inbox' element={<Inbox />} />
       <Route path='/messages/reply/:msgid' element={<ReplyMessage />} />
       <Route path='/messages/send/:id' element={<NewMessage />} />
       <Route path='/error' element={<Error500 />} />
       <Route path='/*' element={<Error404 />} />
    </Routes>
    <Footer />
  </Router>
  )
}

export default MainRouter