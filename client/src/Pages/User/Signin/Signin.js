import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/sixLogo2.png'
import { signin } from '../../../axios-apis/api-user.js'
import './Signin.css'

//existing members login page
const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [feedback, setFeedback] = useState('')

  const handleSignin = async (e) => {
    e.preventDefault()
    let user = {
      email: email,
      password: password
    }
    try {
      await signin(user).then(res => {
        const { token } = res.data
        setEmail('')
        setPassword('')
        window.sessionStorage.setItem('token', token)
        window.location = '/'
      })
    } catch (err) {
      setFeedback(err.response.data.error)
    }
  }

  return (
    <div className="ui col-7 mx-auto text-center form-box">
      <div className="column">
        <h2 className="ui image header">
          <img src={logo} className="image" alt="small six logo" />
          <div className="content">
            Log-in to your account
      </div>
        </h2>
        <form onSubmit={handleSignin} className="ui large form">
          <div className="ui stacked segment">
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon"></i>
                <input onChange={(e) => { setEmail(e.target.value) }}
                  autoFocus
                  aria-label="account email" 
                  type="text" name="email"
                  placeholder="E-mail address"
                  required
                />
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon"></i>
                <input 
                aria-label="account password" 
                onChange={(e) => { setPassword(e.target.value) }} 
                type="password" name="password" 
                placeholder="Password" 
                required />
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100 my-3">Login</button>
          </div>
          <div className="ui error message"></div>
        </form>
        <small className="text-danger">{feedback}</small>
        <div className="ui message">
          New to us? <Link to="/auth/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}



export default Signin

