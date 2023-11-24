import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/sixLogo1.png'
import MessageTabs from '../MessageTabs'
import { Tabs, Tab } from 'react-bootstrap'
import './MailList.css'
import ViewMessage from '../ViewMessage/ViewMessage'
import { getUser } from '../../../axios-apis/api-user'

//lists and sorts 

const MailList = () => {
  const [messages, setMessages] = useState([])
  const [user, setUser] = useState({})
  const [currentMsg, setCurrentMsg] = useState({})
  const [sent, setSent] = useState([])
  const [inbox, setInbox] = useState([])
  const [key, setKey] = useState('All')
  const username = user.name
  const token = sessionStorage.getItem('token')

  useEffect(() => {
    checkUser()
  }, [])

  //gets current user this user info and sets messages
  const checkUser = async () => {
    if (token) {
      try {
        const currentUser = await getUser()
        setMessages(currentUser.data.messages)
        setUser(currentUser.data)
        if (currentUser.data.messages) {
          setCurrentMsg(currentUser.data.messages.length !== 0)
        } else {
          setCurrentMsg('')
        }
      } catch (err) {
        document.location = '/error'
      }
    }
  }

  //checks message origin and sorts by sender 
  const seperateMail = () => {
    let sent = []
    let inbox = []
    messages.forEach((msg) => {
      if (msg.createdBy.name === username) {
        sent.push(msg)
      } else {
        inbox.push(msg)
      }
    })
    setSent(sent)
    setInbox(inbox)
  }

  if (messages.length !== 0) {
    return (
      <div>
        <div className="sidebar">
          <div className="sidebar-overlay">
            <Tabs
              id="mail-tabs"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              onClick={(k) => {
                let f = k.target.innerText
                if (f === 'Inbox') {
                  seperateMail()
                } else if (f === 'Sent') {
                  seperateMail()
                } else if (f === 'All') {
                  seperateMail()
                }
              }}>
              <Tab eventKey="Inbox" title="Inbox">
                <MessageTabs username={username} seperate={seperateMail} mail={inbox} current={currentMsg} setCurrent={setCurrentMsg} />
              </Tab>
              <Tab eventKey="Sent" title="Sent">
                <MessageTabs username={username} seperate={seperateMail} mail={sent} current={currentMsg} setCurrent={setCurrentMsg} />
              </Tab>
              <Tab id="all-tab" eventKey="All" title="All">
                <MessageTabs username={username} seperate={seperateMail} mail={messages} current={currentMsg} setCurrent={setCurrentMsg} />
              </Tab>
            </Tabs>
          </div>
        </div>
        <ViewMessage current={currentMsg} />
      </div>
    )
  } else {
    return (
      <div className="col-10 row my-5 text-center mx-auto">
        <div className="col-12 col-md-4">
          <img src={logo} alt="red six logo" />
        </div>
        <div className="col-12 col-md-6 text-center">
          <h1>You have no new messages.</h1>
          <p>Looking for someone to talk to? </p>
          <Link to="/users/list" className="btn btn-primary w-50">GY6 Members</Link>
        </div>
      </div>
    )
  }
}

export default MailList