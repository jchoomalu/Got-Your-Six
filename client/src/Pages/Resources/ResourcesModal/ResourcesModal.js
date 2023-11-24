import logo from '../../../assets/images/sixLogo2.png'

//placeholder modal displays non function message
const ResourcesModal = () => {
  return (
    <div id="resourcesModal" className="modal fade" tabIndex="-1">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title text-center">Find A Volunteer</h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="ui horizontal divider"><img className="mini-logo" src={logo} alt="got your six logo" /></div>
            <h5>
              This part of the site is currently unavailable due to the current learning environment. Got Your Six would like to find
              volunteers in every inch of America to provide local assistance in non emergency situations that our service members and
              veterans face on a daily basis. Sometimes waiting just isn't an option and we will strive to provide immdiate assistance to our brothers
              and sisters in arms by relying on one another until other options become available.
            </h5>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ResourcesModal