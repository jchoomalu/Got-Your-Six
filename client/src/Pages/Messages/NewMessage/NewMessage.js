import React, { useEffect, useState } from 'react'
import MessageForm from '../MessageForm'
import { useParams } from 'react-router-dom'
import { getSingleUser, getUser } from '../../../axios-apis/api-user'
import { sendMessage } from '../../../axios-apis/api-messages'

//handles new message bewtween users 
//differs from reply as it creates entirely new thread
const NewMessage = () => {
  const [recipient, setRecipient] = useState('')
  const [user, setUser] = useState('')
  let id = useParams().id

  useEffect(() => {
    getRecipient()
  }, [])

  const getRecipient = async () => {
    try {
      const sendTo = await getSingleUser(id)
      setRecipient(sendTo.data.data)
      checkUser()
    } catch (err) {
      document.location = '/error'
    }
  }

  //gets current user 
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
    const data = await getUser()
    let title = document.getElementById('message-title').value
    let body = document.getElementById('message-body').value
    let fromId = data.data._id
    let fromName = data.data.name
    let toid = recipient._id
    let newMessage = {
      title: title,
      to: toid,
      body: [{
        body: body,
        createdBy: fromId,
        from: fromName,
        date: new Date()
      }],
      createdBy: fromId,
    }
    try {
      sendMessage(newMessage, toid, fromId)
      window.location = '/messages/inbox'
    } catch (err) {
      document.location = '/error'
    }
  }

  return (
    <React.Fragment>
      {user ?
        <form onSubmit={prepareMessage} className="container">
          <MessageForm user={user} recipient={recipient} exists={"New"} />
        </form>
        : ''}
    </React.Fragment>
  )
}

export default NewMessage