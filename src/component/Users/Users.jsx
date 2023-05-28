import React, { useEffect, useState } from 'react'


const Users = (props) => {

    console.log(props.us);

    const{name}=props.us
   
  return (
    <div>
        <h2>{name.common}</h2>
    </div>
  )
}

export default Users