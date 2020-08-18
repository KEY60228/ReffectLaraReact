import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button'

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
        { users.map((user: any) => <li key={user.id}>{user.name}</li>)}
      </ul>
      <Button variant="contained" color="primary">
        Hello World!
      </Button>
    </>
  )
}

export default User;