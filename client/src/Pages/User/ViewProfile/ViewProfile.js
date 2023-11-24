import profileBack from '../../../assets/images/profile.png'
import DeleteUserModal from '../DeleteUserModal'
import { Link } from 'react-router-dom'
import './ViewProfile.css'

//displays profile of a member or the current user with an edit boolean
//if edit is true current user is shown
const ViewProfile = ({ user, edit }) => {

  if (user) {
    return (
      <div className="profile">
        <DeleteUserModal id={user._id} />
        <div className="card profile-card">
          <img src={profileBack} className="card-img d-none d-sm-block" alt="blue and white trapezoid" />
          <div className="p-5 card-img-overlay row">
            <div className="col-12 col-sm-5">
              <div className="text-center">
                <h2 className="card-title">{user.name}</h2>
                <h5 className="card-title text-secondary">{user.email}</h5>
                {user.image ?
                  <img className="profile-round" src={`data:image/*;base64,${user.image.data}`} alt="user personal image" />
                  :
                  <img className="profile-round" src={user.avatar} alt="user stock avatar" />
                }
              </div>
            </div>
            <div className="top-card col-12 col-sm-7 my-5">
              <h6>Location:</h6>
              <h5 className="card-text">{user.city}, {user.state}</h5>
              <hr />
              <h6>Service Details:</h6>
              <h5 className="card-text">Branch: {user.branch}</h5>
              <h5>Status: {user.status}</h5>
              <hr />
              <h6>Volunteer:</h6>
              <h5 className="card-text">{user.volunteer}</h5>
              <div className="my-3">
              <i className="calendar icon"></i>
              <span className="card-title text-secondary">Member since – {new Date(user.created).toLocaleDateString()}</span>
              </div>
              {edit ? 
              user.private === true ?
              <div>
              <i className="lock icon my-2"></i>
              <span className="text-secondary">Your account is set to private</span>
              </div>
              :
              <div>
              <i className="unlock icon my-2"></i>
              <span className="text-secondary">Your account is set to public</span>
              </div> : ''
            }
              {edit ?
              <div>
                <div data-bs-toggle="modal" data-bs-target={`#${user._id}`} role="button" className="ui red button my-1"><i className="trash icon"></i> Delete Account</div>
                <Link to="/users/profile/edit">
                <div className="ui primary button my-1" role="button">
                <i className="edit icon"></i>Edit Account</div>
                </Link>
                <Link to="/users/profile/privacy">
                <div className="ui primary button my-1" role="button">
                <i className="lock icon"></i>Privacy Settings</div>
                </Link>
                </div>
                :
                <Link to={`/messages/send/${user._id}`}>
                  <div className="ui primary button my-1" role="button">
                    <i className="comments icon"></i> Send Message
              </div>
                </Link>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ViewProfile

