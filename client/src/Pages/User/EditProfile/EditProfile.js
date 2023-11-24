import { useState, useEffect } from 'react'
import {getUser} from '../../../axios-apis/api-user.js'
import ViewProfile from '../ViewProfile'

const EditProfile = () => {
  const [user, setUser] = useState(undefined)

  //gets user information from server on component mount
    useEffect(() => {
      checkUser()
    }, [])

  const checkUser = async () => {
    try {
    const current = await getUser()
    setUser(current.data)
    } catch (err) {
      document.location = '/error'
    }
  }

  return (
    <div>
      <ViewProfile user={user} edit={true} /> 
    </div>
  )
}

export default EditProfile