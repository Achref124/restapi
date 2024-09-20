

import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'

import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../redux/actions/UserActions'
import { Spinner } from 'react-bootstrap'

const User = () => {
  const dispatch=useDispatch()
  const user=useSelector(state=>state.UserReducer.users)
  const load=useSelector(state=>state.UserReducer.load)
  useEffect(()=>{
    dispatch(getUsers())
  },[])
  console.log(load)
  return (
    <div>User
        {load ?<Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>:user?.map(el=><UserCard el={el} />)}

    </div>
  )
}

export default User