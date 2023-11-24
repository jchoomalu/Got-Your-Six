import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Components/Header'
import './Home.css'

const Home = () => {
  const token = window.sessionStorage.getItem('token')
  let membersLink
  //chnages link to members list or sigin up on members card
  if (token) {
    membersLink = <Link className="panel-link" to="/users/list"><button className="btn btn-primary panel-btn">View All</button></Link>
  } else {
    membersLink = <Link className="panel-link" to="/auth/signup"><button className="btn btn-primary panel-btn">Sign Up</button></Link>
  }

  return (
    <div>
      <Header />
      <div className="text-white top container-fluid">
        <div className="row justify-content-center">
          <div className="main-card members-card col-lg-6 col-11">
            <div className="col-12 panel shadow">
              <div className="cardInfo container">
                <p className="panel-title">Members</p>
                <p className="panel-desc">Sign up enjoy full access to local news, events, and more.</p>
                {membersLink}
              </div>
            </div>
          </div>
          <div className="main-card news-card p-1 col-lg-5 col-11">
            <div className="col-12 panel shadow">
              <div className="cardInfo container">
                <p className="panel-title">News</p>
                <p className="panel-desc">Veteran, health and military related news. Last updated {new Date().toLocaleDateString()}</p>
                <Link className="panel-link" to="/info/news"><button className="btn btn-primary panel-btn">Read News</button></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="main-card local-card p-1 col-lg-5 col-11">
            <div className="col-12 panel shadow">
              <div className="cardInfo container">
                <p className="panel-title">Local / Classifieds </p>
                <p className="panel-desc">You are not alone, check our military only classifieds.</p>
                <Link className="panel-link" to="/users/local"><button className="btn btn-primary panel-btn">View Classifieds</button></Link>
              </div>
            </div>
          </div>
          <div className="main-card p-1 reentry-card col-lg-6 col-11">
            <div className="col-12 panel shadow">
              <div className="cardInfo container">
                <p className="panel-title">Transition Assistance</p>
                <p className="panel-desc">Services and advice from those who have done it.</p>
                <Link className="panel-link" to="/resources"><button className="btn btn-primary panel-btn">Transition Assistance</button></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="main-card p-1 events-card col-lg-6 col-11">
            <div className="col-12 panel shadow">
              <div className="cardInfo container">
                <p className="panel-title">Events</p>
                <p className="panel-desc">See upcoming events from GY6 and other veteran organizations.</p>
                <Link className="panel-link" to="/info/events"><button className="btn btn-primary panel-btn">Find Events</button></Link>
              </div>
            </div>
          </div>
          <div className="main-card p-1 stories-card col-lg-5 col-11">
            <div className="col-12 panel shadow">
              <div className="cardInfo container">
                <p className="panel-title">Stories</p>
                <p className="panel-desc">You are not alone, read stories from service members or post your own.</p>
                <Link className="panel-link" to="/info/stories"><button className="btn btn-primary panel-btn">Read Stories</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home