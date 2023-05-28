import React, { useEffect, useState } from 'react'
import Users from '../Users/Users'
import './User.css'

const User = (props) => {
    const[users, setUsers] = useState([])
    useEffect(() =>{
        fetch(' https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setUsers(data))
    } , [] )
  return (
    <div className='user-container'>
        
        {
            users.map(us => <Users key={us.id} us={us}></Users>)

        }

    </div>
  )
}

export default User