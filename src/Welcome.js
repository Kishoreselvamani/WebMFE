import React, { useContext } from 'react'
import UserContext from './context/UserContext'
import 'bootstrap/dist/css/bootstrap.min.css';


function Welcome() {

  const { user } = useContext(UserContext);


  return (

    <div>
      <div>
        <h2>{user.username}</h2>
      </div>
    </div>

  )
}

export default Welcome