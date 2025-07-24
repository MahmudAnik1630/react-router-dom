import React from 'react'
import Menu from './Menu'
import { useParams } from 'react-router'

function Account() {

    let {name,id}=useParams();
  return (
    <div>
        <Menu/>
        <h1>Hello {name} your id is {id}</h1>
        Account</div>
  )
}

export default Account