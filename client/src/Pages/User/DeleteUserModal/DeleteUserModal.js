import React from 'react'
import { deleteUser } from '../../../axios-apis/api-user'

//used to delete user account

const DeleteUserModal = ({id}) => {

  const doDelete = async () => {
    try {
      await deleteUser(id)
      sessionStorage.clear()
      document.location = '/'
    } catch (err) {
      document.location = '/error'
    }
  }

  return (
    <div id={id} className="modal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Delete Permanantly</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>Are you sure you would like to permanantly delete your account?</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button onClick={doDelete} data-id={id} type="button" className="btn btn-danger" data-bs-dismiss="modal" aria-label="Close">Delete Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteUserModal