import React from 'react'
import './MessageForm.css'
import logo from '../../../assets/images/sixLogo2.png'

//form for sending a new message
const MessageForm = ({ recipient, user, exists }) => {
  return (
    <div className="wrapper my-5 col-lg-10 mx-auto">
      <h1>{exists} Message</h1>
      {recipient.name ? 
      <h3>To: {recipient.name}</h3>
      : ''}
      <h4>From: {user.name}</h4>
      <div className="ui horizontal divider">
      <p className="secure-heading"><img className="mini-logo" src={logo} alt="small red six logo" />secure message</p>
        <i className="lock icon"></i>
      </div>
      <div className="ui form segment text-center">
      <input className="form-control my-2" id="message-title" type="text" name="title" placeholder="Title..." required />
      <textarea className="form-control my-2" id="message-body" name="message" placeholder="Message..." required></textarea>
      <button className="btn btn-primary w-75">Send</button>
      </div>
    </div>
  )
}

export default MessageForm