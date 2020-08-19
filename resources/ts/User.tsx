import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async() => {
    const response = await axios.get('/api/user')
    setUsers(response.data.users)
  }

  return (
    <>
      <h1>Userページ</h1>
      <ul>
        { users.map((user: any) => {
          return (
            <li key={user.id}>
              <Link to={`/user/${user.id}`}>{user.name}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default User;