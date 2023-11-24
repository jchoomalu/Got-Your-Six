import logo from '../../../assets/images/sixLogo2.png'
import {Link} from 'react-router-dom'
import '../Error.css'

//if a user navigates to a page not covered in the react router they end up here with 
//a link back to the home page
const Error404 = () => {
  return (
    <div className="container error-cont my-5 text-center">
    <div className="col-6 mx-auto text-center my-4">
      <img className="img-fluid col-4 error-img" src={logo} alt="got your six logo" />
      <div className="col-12 text-center">
      <h1 className="text-center my-4">Error - 404 Page Not Found</h1>
      <h1 className="text-center my-4 error-header ">We're sorry, we were unable to find the requested page.</h1>
      </div>
      </div>
      <Link to="/"><button className="btn btn-primary w-50 my-5">Home</button></Link>
      </div>
  )
}

export default Error404