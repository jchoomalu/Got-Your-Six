import DeleteModal from '../DeleteModal'
import divider from '../../../assets/images/divider.png'
import logo from '../../../assets/images/sixLogo1.png'
import { Link } from 'react-router-dom'
import './ViewMessage.css'

//main thread view shows bubbles of each bit of sent text between users 
const ViewMessage = ({ current }) => {
  return (
    <div>
      {current.title ?
        <div className="text-center">
          <DeleteModal id={current._id} from={current.createdBy.name} />
          <h5 className="my-2">Subject: {current.title}</h5>
          <h5 className="top-header">From: {current.createdBy.name}</h5>
          <h5>First Message: {new Date(current.created).toDateString()}</h5>
          <div>
            <Link to={`/messages/reply/${current._id}`}><div role="button" className="ui primary button my-1"><i className="send icon"></i>Reply</div></Link>
            <div role="button" className="ui red button my-1" data-bs-toggle="modal" data-bs-target={`#${current._id}`}><i className="trash icon"></i>Delete</div>
          </div>
          <img className="divider-img" src={divider} alt="red and white divider" />
          <div className="message-content">
            {current.body.map((msg, i) => (
              <div className="my-5" key={`${msg._id}${i}`}>
                {i % 2 === 0 ?
                  <div className="message-box left-box">
                    <p className="text-center">{msg.body}</p>
                    <p>{msg.from}</p>
                    <p className="message-date">{new Date(msg.date).toLocaleDateString()} – {new Date(msg.date).toLocaleTimeString()}</p>
                  </div>
                  :
                  <div className="message-box right-box" key={`${msg._id}${i}`}>
                    <p>{msg.body}</p>
                    <p>{msg.from}</p>
                    <p className="message-date">{new Date(msg.date).toLocaleDateString()} – {new Date(msg.date).toLocaleTimeString()}</p>
                  </div>
                }
              </div>
            ))}
          </div>
        </div>
        :
        <div className="select-message text-center">
          <img className="img-fluid" src={logo} alt="red gy6 logo" />
          <h1 className="my-5"><i className="mail icon"></i>Please Select A Message</h1>
        </div>
      }
    </div>
  )
}

export default ViewMessage