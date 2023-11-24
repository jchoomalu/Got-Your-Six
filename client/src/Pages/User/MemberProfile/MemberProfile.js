import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleUser } from '../../../axios-apis/api-user.js'
import ViewProfile from '../ViewProfile'

//displays profile of other gy6 members without edit option
const MemberProfile = () => {
  const [user, setUser] = useState(undefined)
  const id = useParams().id

  useEffect(() => {
    getUser()
  }, [])

  const getUser = async () => {
    const current = await getSingleUser(id)
    setUser(current.data.data)
  }

  return (
    <ViewProfile user={user} edit={false} />
  )
}

export default MemberProfile