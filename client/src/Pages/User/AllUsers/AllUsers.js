import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { list } from '../../../axios-apis/api-user.js'
import UserList from '../UserList'
import Header from '../../../Components/Header'

//componet shows list of all users 
const Users = () => {
  const [users, setUsers] = useState([])
  const token = sessionStorage.getItem('token')
  useEffect(() => {
    if (token) {
      showAll()
    } else {
      document.location = '/auth/signin'
    }
  }, [])

  const showAll = async () => {
    try {
      const allUsers = await list()
      setUsers(allUsers.data)
    } catch (err) {
      document.location = '/error'
    }
  }

  if (users) {
    return (
      <div>
        <Header />
        <div className="my-4 text-center">
          <h5>All GY6 Members:</h5>
          <Link to="/users/listbystate">List By State</Link>
        </div>
        <UserList users={users} />
      </div>
    )
  } else {
    return (
      <h1>Loading....</h1>
    )
  }
}

export default Users

