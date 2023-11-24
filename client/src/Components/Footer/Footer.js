import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
  return (
    <footer>
      <div className="ui inverted vertical footer segment">
        <div className="ui container">
          <div className="ui stackable inverted divided equal height stackable grid">
            <div className="three wide column">
              <h4 className="ui inverted header">Site Map</h4>
              <div className="ui inverted link list">
                <a href="#top" className="item">Back To Top</a>
                <Link to='/' className="item">Home</Link>
                <Link to='/info/news' className="item">News</Link>
                <Link to='/info/events' className="item">Events</Link>
                <Link to='/info/stories' className="item">Stories</Link>
              </div>
            </div>
            <div className="three wide column">
              <h4 className="ui inverted header">Services</h4>
              <div className="ui inverted link list">
                <Link to='/resources' className="item">Resources Overview</Link>
                <Link to='/resources/federal' className="item">Federal / VA Resources</Link>
                <Link to='/resources/private' className="item">Vet Organizations</Link>
              </div>
              <h4 className="ui inverted header">Members</h4>
              <div className="ui inverted link list">
              <Link to='/users/list' className="item">All Members</Link>
              <Link to='/users/local' className="item">Classifieds</Link>
              </div>
            </div>
            <div className="seven wide column">
              <p className="author-info">Always Together, Always Forward.</p>
              <p><i className="facebook icon">gy6facebook.com</i></p>
              <p><i className="instagram icon">@gy6instagram</i></p>
              <p><i className="twitter icon">@gy6twitter</i></p>
              <span className="copyright">&copy; copyright Got Your Six 2023</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer