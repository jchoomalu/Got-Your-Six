import { Link } from 'react-router-dom'
import UserButtons from '../../../Components/UserButtons'
import UserButtonsSmall from '../../../Components/UserButtonsSmall'
import './UserList.css'

//component shows list of all users  given an array of user objects from the db
const UserList = ({users}) => {
  if (users) {
  return (
    <div className="container">
      <div className="col-8 mx-auto user-box">
        {users.map((user, i) => (
          <div key={i} className="comment-box row">
            <div className="d-none d-md-block col-3">
            {user.image ?
              <img alt="perosnal user image" className="round" src={`data:image/*;base64,${user.image.data}`}/>
              :
              <img alt="stock user avatar" className="round" src={user.avatar}/>
            }
            </div>
            <div className="col-md-7 offset-md-1">
            {user.image ? 
              <div className="extra d-block d-md-none">
              <img alt="perosnal user image" className="mini-img avatar image" src={`data:image/*;base64,${user.image.data}`}/> 
              </div>
              :
              <div className="extra d-block d-md-none">
              <img alt="stock user avatr" className="mini-img avatar image" src={user.avatar}/>
              </div>
              }
              <Link to={`/users/${user._id}`} className="header fs-2 user-info">{user.name}</Link>
                <p className="user-details text-center text-md-start">{user.email}</p>
              <div className="text-secondary d-none d-md-block my-3">
                <p className="user-details">{user.city} – {user.state}</p>
                <p className="user-details">{user.branch} – {user.status}</p>
                <p className="user-details">Member since – {new Date(user.created).toLocaleDateString()}</p>
              </div>
            </div>
            <div className="btn-list d-none d-md-block text-center">
            <UserButtons id={user._id} name={user.name} />
            </div>
            <div className="btn-list d-block d-md-none text-center">
            <UserButtonsSmall id={user._id} name={user.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
  } else {
    <div>Loading...</div>
  }
}

export default UserList

