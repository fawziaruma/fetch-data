import React, { useEffect, useState } from 'react'
import './Users.css'


const Users = (props) => {

    console.log(props.us);

    const{name , flags , area, region }=props.us
   
  return (
    <div className='country'>
        <h2>name:{name.common}</h2>
        <img src={flags.png} />
        <p>area:{area}</p>
        <p><small>region:{region}</small></p>
    </div>
  )
}

export default Users