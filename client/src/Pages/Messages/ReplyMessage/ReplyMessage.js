import React, { useEffect, useState } from 'react'
import MessageForm from '../MessageForm'
import { useParams } from 'react-router-dom'
import { getUser } from '../../../axios-apis/api-user'
import { replyMessage } from '../../../axios-apis/api-messages'

//adds a new message body to an existing thread allowing a coversation to be grouped 
const ReplyMessage = () => {
  const [recipient, setRecipient] = useState('')
  const [user, setUser] = useState('')
  let msgId = useParams().msgid
  const token = sessionStorage.getItem('token')

  useEffect(() => {
    checkUser()
  }, [])

  //sets current user data
  const checkUser = async () => {
    try {
      const currentUser = await getUser()
      setUser(currentUser.data)
    } catch (err) {
      document.location = '/error'
    }
  }

  const prepareMessage = async (e) => {
    e.preventDefault()
    let body = document.getElementById('message-body').value
    let reply = {
      fromid: user._id,
      toid: recipient._id,
      msgid: msgId,
      body: {
        body: body,
        from: user.name,
        createdBy: user._id,
        date: new Date()
      }
    }
    replyMessage(reply, msgId)
    window.location = '/messages/inbox'
  }

  return (
    <React.Fragment>
      {user ?
        <form onSubmit={prepareMessage} className="container">
          <MessageForm exists={'Reply'} user={user} recipient={recipient} />
        </form>
        : ''}
    </React.Fragment>
  )
}

export default ReplyMessage