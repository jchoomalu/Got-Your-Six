import { list } from '../../../axios-apis/api-user.js'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import UserList from '../UserList'
import Header from '../../../Components/Header'

const Local = () => {
  //linked from home page to find members by state
  const [users, setUsers] = useState([])
  const token = sessionStorage.getItem('token')
  //sorts users by state and sends sorted list to the userlist component

  useEffect(() => {
    if (token) {
      sortUsers()
    } else {
      document.location = '/auth/signin'
    }
  }, [])

  const sortUsers = async () => {
    const data = await list()
    let byState = data.data
    const sorted = byState.sort((a, b) => {
      const stateA = a.state.toUpperCase()
      const stateB = b.state.toUpperCase()
      if (stateA < stateB) {
        return -1
      }
      if (stateA > stateB) {
        return 1
      }
      return 0
    })
    setUsers(sorted)
  }

  if (users) {
    return (
      <div>
        <Header />
        <div className="my-4 text-center">
          <h5>GY6 Members By State:</h5>
          <Link to="/users/list">All GY6 Users</Link>
        </div>
        <UserList users={users} />
      </div>
    )
  } else {
    return (
      <h1>Loading...</h1>
    )
  }
}

export default Local