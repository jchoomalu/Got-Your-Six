import { useState, useEffect } from 'react'
import { getUser } from '../../axios-apis/api-user'
import { listByState, deletePost } from '../../axios-apis/api-classifieds'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/sixLogo1.png'
import divider from '../../assets/images/divider.png'
import states from '../../assets/data/raw.json'
import Header from '../../Components/Header'
import ClassifiedsModal from './ClassifiedsModal'
import './Classifieds.css'

const Classifieds = () => {
  const [user, setUser] = useState([])
  const [state, setState] = useState('')
  const [posts, setPosts] = useState([])
  const [change, setChange] = useState(true)
  const [statePost, setStatePost] = useState([])
  const token = window.sessionStorage.getItem('token')

  useEffect(() => {
    checkUser()
  }, [change])

  //gets current user 
  const checkUser = async () => {
    if (token) {
      try {
        const currentUser = await getUser()
        setUser(currentUser.data)
        setState(currentUser.data.state)
        renderByState(currentUser.data.state)
      } catch (err) {
        document.location = '/error'
      }
    } else {
      document.location = '/auth/signin'
    }
  }

  const renderByState = async (state) => {
    setState(state)
    let postlist = await listByState(state)
    setPosts(postlist.data.posts)
    setStatePost(postlist.data)
  }

  //if user was the post creator the delete button is available
  const doDeletePost = (e) => {
    let id = e.target.dataset.id
    try {
      deletePost(state, id)
      let toggler = change === true ? false : true
      setChange(toggler)
    } catch (err) {
      document.location = '/error'
    }
  }

  return (
    <div>
      <Header />
      <ClassifiedsModal id={statePost._id} state={state} user={user._id} change={change} setChange={setChange} />
      <header className="classifieds-header text-center">
        <h1 className="classifieds-word">
          <img className="classifieds-logo" src={logo} alt="got your six logo" />
          Classifieds~ <span id="state-name">{state}</span>
        </h1>
        <img className="classifieds-divider" src={divider} alt="red and white divider" />
      </header>
      <form className="ui col-10 col-md-7 mx-auto my-3 form">
        <div className="row">
          <div className="field text-white">
            <label>Select a different state:</label>
            <select
              id="state"
              className="placeholder-option"
              onChange={(e) => { renderByState(e.target.value) }}
              value={state}
              required
            >
              <option disabled select="true" value="">Select A State</option>
              {states.states.map(state => (
                <option key={state}>{state}</option>
              ))}
            </select>
            <i className="location arrow icon select-icon"></i>
          </div>
          <div className="text-center">
            <div data-bs-toggle="modal" data-bs-target={`#${statePost._id}`} role="button" className="ui primary button w-75">
              <i className="compose icon"></i> Post
        </div>
          </div>
        </div>
      </form>
      {posts.length > 0 ? posts.map((post, i) => (
        <div className="comment-box col-10 mx-auto my-3" key={i}>
          <img className="classifieds-image p-2" src={`data:image/*;base64,${post.image.data}`} alt="post image" />
          <div className="post-content">
            <h1>{post.title}</h1>
            <h5 className="classifieds-time">{new Date(post.date).toLocaleTimeString()} – {new Date(post.date).toLocaleDateString()}</h5>
            <h5 className="text-bold">{post.cost}</h5>
            <p>{post.description}</p>
          </div>
          <div className="post-contact text-end">
            <Link to={`/messages/send/${post.postedBy._id}`}>
              <div role="button" className="ui primary button my-3">
                <i className="comments icon"></i> Respond
              </div>
            </Link>
            {post.postedBy._id === user._id ?
            <div role="button" onClick={doDeletePost} data-id={post._id} className="ui red button my-3">
                <i className="trash icon"></i> Delete
              </div>
              : '' }
          </div>
        </div>
      )) : <h4 className="display-1 mb-5 text-center">No current listings in your area</h4>}
    </div>
  )
}

export default Classifieds