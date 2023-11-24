import React from 'react'
import { getUser } from '../../../axios-apis/api-user'
import { deleteMessage } from '../../../axios-apis/api-messages'

//modal checks if user would like to permanantly delete message before performing delete
const Modal = (props) => {
  const doDeleteMessage = async (e) => {
    try {
    const user = await getUser()
    let userId = user.data._id
    let msgId = e.target.dataset.id
    deleteMessage(userId, msgId)
    location.reload(true)
    } catch (err) {
      document.location = '/error'
    }
  }

  return (
    <div id={props.id} className="modal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Delete Permanantly</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>Are you sure you would like to permanantly delete this message from {props.from}?</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button onClick={doDeleteMessage} data-id={props.id} type="button" className="btn btn-danger" data-bs-dismiss="modal" aria-label="Close">Delete Message</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal