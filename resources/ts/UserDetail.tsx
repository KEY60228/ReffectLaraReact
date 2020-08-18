import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UserDetail = (props: any) => {
  const [user, setUser]: any = useState([]);

  useEffect(() => {
    getUser()
  }, []);

  const getUser = async() => {
    // console.log(props)
    const response = await axios.get(`/api/user/${props.match.params.id}`)
    // console.log(response.data.user)
    setUser(response.data.user)
  }

  return (
    <>
      <h1>User詳細ページ</h1>
      <p>id: {user.id}</p>
      <p>name: {user.name}</p>
      <p>email: {user.email}</p>
    </>
  )
}

export default UserDetail