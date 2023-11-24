import React from 'react'
import './CommentButton.css'

const CommentButton = ({ hidden, id }) => {
  //hidden prop is passed from article full is an event or if user has choosed to disallow comments
  //if user scrolls passed regular comment button a fixed button appears on the screen so 
  //the user doesn't have to scroll back up to make a comment 
  const btn = document.getElementById('fixed-btn')
  const regbtn = document.getElementById('reg-btn')
  
  const showButton = () => {
    if (window.scrollY <= regbtn.offsetTop) {
      btn.classList.add('d-none')
    } else {
      btn.classList.remove('d-none')
    }
  }
  //if btn exists add this event
  if (btn) {
    document.addEventListener('scroll', showButton)
  }

  return (
    <div>
      <button id="fixed-btn"
      tabIndex="0"
       className={`ui primary button d-none`} 
       data-bs-toggle="modal" 
       data-bs-target={`#${id}`}>
        <div>
          <i className="right comment up icon"></i>
          <span>Comment</span>
        </div>
      </button>

      <button id="reg-btn" 
      className={`ui floated primary button ${hidden}`}
      data-bs-toggle="modal" 
      data-bs-target={`#${id}`}>
        <div>
          <i className="right comment up icon"></i>
          <span>Comment</span>
        </div>
      </button>
    </div>
  )
}

export default CommentButton