import React from 'react'
import profileBack from '../../../../assets/images/profile.png'
import '../FormComponents/FormComponents.css'
import { Tooltip, OverlayTrigger, Button } from 'react-bootstrap'
import AvatarModal from '../AvatarModal'

export const Preview = (props) => {

  //displays preview of profile and allows for image or avatar upload
  //tooltips to assist in ui/ux
  const tooltipAvatars = (
    <Tooltip id="tooltipAvatars"><strong>Don't want to uplaod a photo?</strong> us an avatar instead</Tooltip>
  )
  const tooltipUplaodImage = (
    <Tooltip id="tooltipUplaodImage"><strong>Uploading an image helps with security and verification </strong></Tooltip>
  )
  const tooltipSubmit = (
    <Tooltip id="tooltipSubmit"><strong>You can make changes to your profile at any time</strong></Tooltip>
  )

  //simulates click on hidden form input
  function handleFile() {
    const fileBtn = document.getElementById('fileInput')
    fileBtn.click()
  }


  return (
    <React.Fragment>
      <AvatarModal handleAvatar={props.handleAvatar} />
      <div className="profile">
        <div className="card profile-card">
          <img src={profileBack} className="card-img d-none d-md-block" alt="blue and white shadowed trapezoid" />
          <div className="p-5 card-img-overlay row">
            <div className="col-12 col-md-5">
              <div className="text-center">
                <h2 className="card-title">{props.data.name}</h2>
                <h5 className="card-title text-secondary">{props.data.email}</h5>
                <div id="photo-preview"></div>
                <input id="fileInput" type="file" onChange={props.gather} />
                <OverlayTrigger triggers="focus hover" placement="bottom" overlay={tooltipUplaodImage}>
                  <input id="photo-circle" className="clicker text-white" type="button" value={props.fileName} onClick={handleFile} />
                </OverlayTrigger>
                <OverlayTrigger triggers="focus hover" placement="bottom" overlay={tooltipAvatars}>
                  <Button data-bs-toggle="modal" data-bs-target="#avatarModal" id="avatar-btn" className="avatar-btn border-dark rounded-pill"><i className="icon user mx-auto"></i></Button>
                </OverlayTrigger>
              </div>
            </div>
            <div className="top-card col-12 col-md-7">
              <h4>Location:</h4>
              <h3 className="card-text">{props.data.city} – {props.data.state}</h3>
              <hr />
              <h4>Service Details:</h4>
              <h3 className="card-text">{props.data.branch} – {props.data.status}</h3>
              <hr />
              <div className="text-danger">{props.feedback}</div>
              <OverlayTrigger triggers="focus hover" placement="bottom" overlay={tooltipSubmit}>
                <Button id="submit-form" className={`btn btn-primary w-100 my-5`} onClick={props.signUp}>Create Account</Button>
              </OverlayTrigger>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Preview