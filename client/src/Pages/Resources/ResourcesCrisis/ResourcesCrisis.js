import crisisLine from '../../../assets/images/crisisLine.png'
import logo from '../../../assets/images/sixLogo2.png'
import firstaid from '../../../assets/images/firstaid.png'
import ResourceHeader from '../ResourcesHeader'
import { Link } from 'react-router-dom'
import ResourcesModal from '../ResourcesModal'
import './ResourcesCrisis.css'

//component renders static resources for crisis assistance
//modal is functional / non-operational and serves as a placeholder for future site functionality
const ResourcesCrisis = () => {
  const token = sessionStorage.getItem('token')
  let link
  if (token) {
    link = '/users/local'
  } else {
    link = '/auth/signin'
  }
  return (
    <div>
      <ResourceHeader />
      <div className="crisis text-center my-5 col-8 mx-auto">
        <ResourcesModal />
        <h3 className="m-3">If you have an emergency</h3>
        <div className="d-grid gap-2 col-5 col-sm-2 mx-auto my-3">
          <img className="img-fluid six-logo" src={firstaid} alt="emergency cross with numbers 9-1-1" />
        </div>
        <a className="fs-2" href="tel:911" role="button">
          <i className="ui phone icon"></i>Call 911
      </a>
        <hr className="shadow" />
        <h3 className="m-2">Alert GY6 members in your area</h3>
        <div className="d-grid gap-2 col-5 col-sm-2 mx-auto my-3">
          <img className="img-fluid six-logo" src={logo} alt="we got you words with a red six logo" />
        </div>
        <a className="fs-2" href="tel:18009999999" role="button" data-bs-toggle="modal" data-bs-target="#resourcesModal">
          <i className="ui phone icon"></i>1-800-999-9999
      </a>
        <div>
          <Link className="fs-2" to={link}>GY6 Volunteers</Link>
        </div>
        <hr />
        <div className="d-grid gap-2 col-10 col-sm-4 mx-auto">
          <h3 className="m-2">Veterans Crisis Line</h3>
          <img className="img-fluid" src={crisisLine} alt="blue dots veterans crisis line logo" />
          <a className="fs-2" href="tel:18002738255">
            <i className="ui phone icon"></i>1-800-273-8255
        </a>
          <a className="fs-2" href="https://www.VeteransCrisisLine.net">www.VeteransCrisisLine.net</a>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default ResourcesCrisis

