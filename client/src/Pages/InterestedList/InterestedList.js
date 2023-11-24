import React from 'react'
import UserInfoBlock from '../../Components/UserInfoBlock'

//users interested in an article

const InterestedList = ({ model, change, setChange }) => {
  return (
    <div>
      <div className="ui relaxed divided container items">
        <UserInfoBlock model={model} change={change} setChange={setChange} />
      </div>
    </div>
  )
}

export default InterestedList