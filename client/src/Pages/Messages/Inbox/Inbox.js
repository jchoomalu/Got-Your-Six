import { useEffect, useState } from 'react'
import { getUser } from '../../../axios-apis/api-user'
import MailList from '../MailList'

const Inbox = () => {
  const [messages, setMessages] = useState([])
  const [change, setChange] = useState(true)
  const token = sessionStorage.getItem('token')

  useEffect(() => {
    checkUser()
  }, [change])

  //gets current user 
  const checkUser = async () => {
    if (token) {
      try {
        const currentUser = await getUser()
        setMessages(currentUser.data.messages)
      } catch (err) {
        document.location = '/error'
      }
    }
  }

  return (
    <div>
      <MailList change={change} setChange={setChange} messages={messages} />
    </div>
  )
}

export default Inbox