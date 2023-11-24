import ResourceHeader from '../ResourcesHeader'
import { Link } from 'react-router-dom'
import va from '../../../assets/images/VAcircle.png'
import local from '../../../assets/images/merica.png'
import './ResourcesMain.css'

//shows overview or resources and links to appropriate resource page
const ResourcesMain = () => {
  const token = sessionStorage.getItem('token')
  let link
  if (token) {
    link = '/users/list'
  } else {
    link = '/auth/signin'
  }
  return (
    <div>
      <ResourceHeader />
      <div className="ui text-center col-9 mx-auto resources-container">
        <h1>Resources For Veterans</h1>
        <img className="fed-img" src={va} alt="va emblem"></img>
        <p className="fed-desc my-5">Filing for the federal benefits you have earned can be quite the task. Got Your Six encourages you
      to file a claim as soon as possible. Need immediate help? reach out to a fellow <Link className="resources-link" to={link}>Got Your Six member</Link> or email us directly
      to find a volunteer who has previously traversed the system. Some VA benefits may be available to all veterans regardless of discharge status.</p>
        <Link to="/resources/federal">
          <div className="btn btn-primary w-50 mb-4">Federal / VA Resources</div>
        </Link>
        <div className="ui clear horizontal divider">OR</div>
        <img className="fed-img" src={local} alt="va/america emblem"></img>
        <p className="fed-desc my-5">Already have benefits? Looking to volunteer? Interested in meeting other veterans in your community?
        check out what kind of veteran organizations operate near you. There are always things that come up and sometimes waiting on the VA just isn't realistic.
        Vet Centers, DAV and other organizations are here to help fill the gaps.</p>
        <Link to="/resources/private">
          <div className="btn btn-primary w-50 mb-4">Veterans Organizations</div>
        </Link>
      </div>
    </div>
  )
}

export default ResourcesMain