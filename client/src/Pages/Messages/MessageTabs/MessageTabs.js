import React, { useState } from 'react'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'
import { updateMessage } from '../../../axios-apis/api-messages'
import './MessageTabs.css'

const MessageTabs = ({ mail, setCurrent, seperate, username }) => {

  const tooltipMessage = (
    <Tooltip id="tooltipMessage"><strong>View Full message</strong></Tooltip>
  )

  const handleOpen = (e) => {
    seperate()
    //gets id from button
    let current = e.target.dataset.id
    //sets currrent doc view 
    setCurrent(mail[current])
    //checks sender of last message if user is not last sender in the thread the update message 
    //fires to change the status of viewed property to true
    let getBody = mail[current].body
    let lastMessage = getBody[getBody.length - 1]
    if (lastMessage.from !== username) {
      updateMessage(mail[current]._id)
    } 
  }

  return (
    <React.Fragment>
      {mail ?
        mail.map((msg, i) => (
          <OverlayTrigger key={i} triggers="focus hover" placement="right" overlay={tooltipMessage}>
            <div key={i} data-id={i} onClick={handleOpen} className="msg-block">
              {msg.createdBy.image ?
                <img data-id={i} onClick={handleOpen} className="square-mini" src={`data:image/*;base64,${msg.createdBy.image.data}`} alt="user image" />
                :
                <img data-id={i} onClick={handleOpen} className="square-mini" src={msg.createdBy.avatar} alt="user stock avatar" />
              }
              <h5 data-id={i} onClick={handleOpen} className="title">{msg.title}</h5>
              <small data-id={i} onClick={handleOpen} className="date text-muted">{new Date(msg.created).toLocaleDateString()}</small>
              <h6 data-id={i} onClick={handleOpen} >From: {msg.createdBy.name}</h6>
              <hr className="divider" />
            </div>
          </OverlayTrigger>
        ))
        : ''
      }
    </React.Fragment>
  )
}

export default MessageTabs