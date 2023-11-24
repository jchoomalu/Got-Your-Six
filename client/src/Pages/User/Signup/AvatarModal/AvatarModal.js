import ade from '../../../../assets/avatars/ade.jpeg'
import chris from '../../../../assets/avatars/chris.jpeg'
import christian from '../../../../assets/avatars/christian.jpeg'
import daniel from '../../../../assets/avatars/daniel.jpeg'
import elliot from '../../../../assets/avatars/elliot.jpeg'
import helen from '../../../../assets/avatars/helen.jpeg'
import jenny from '../../../../assets/avatars/jenny.jpeg'
import joe from '../../../../assets/avatars/joe.jpeg'
import justen from '../../../../assets/avatars/justen.jpeg'
import laura from '../../../../assets/avatars/laura.jpeg'
import './AvatarModal.css'

//gives user the option of choosing an avatar rather than uplaoding and image
//images courtesy of semantic ui

const AvatarModal = ({ handleAvatar }) => {
  return (
    <div>
      <div id="avatarModal" className="modal fade" tabIndex="-1">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-center">Choose an Avatar:</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img onClick={handleAvatar} data-bs-dismiss="modal" aria-label="Close" className="avatar-thumb" src={ade} alt="multicolored avatar image" />
              <img onClick={handleAvatar} data-bs-dismiss="modal" aria-label="Close" className="avatar-thumb" src={chris} alt="multicolored avatar image" />
              <img onClick={handleAvatar} data-bs-dismiss="modal" aria-label="Close" className="avatar-thumb" src={christian} alt="multicolored avatar image" />
              <img onClick={handleAvatar} data-bs-dismiss="modal" aria-label="Close" className="avatar-thumb" src={daniel} alt="multicolored avatar image" />
              <img onClick={handleAvatar} data-bs-dismiss="modal" aria-label="Close" className="avatar-thumb" src={elliot} alt="multicolored avatar image" />
              <img onClick={handleAvatar} data-bs-dismiss="modal" aria-label="Close" className="avatar-thumb" src={helen} alt="multicolored avatar image" />
              <img onClick={handleAvatar} data-bs-dismiss="modal" aria-label="Close" className="avatar-thumb" src={jenny} alt="multicolored avatar image" />
              <img onClick={handleAvatar} data-bs-dismiss="modal" aria-label="Close" className="avatar-thumb" src={joe} alt="multicolored avatar image" />
              <img onClick={handleAvatar} data-bs-dismiss="modal" aria-label="Close" className="avatar-thumb" src={justen} alt="multicolored avatar image" />
              <img onClick={handleAvatar} data-bs-dismiss="modal" aria-label="Close" className="avatar-thumb" src={laura} alt="multicolored avatar image" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AvatarModal