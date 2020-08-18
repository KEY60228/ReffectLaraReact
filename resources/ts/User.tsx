import React from 'react'
import Button from '@material-ui/core/Button'

const User = () => {
  const users = [
    {
      id: 1,
      name: 'John',
      email: 'john@example.com'
    },
    {
      id: 2,
      name: 'Kevin',
      email: 'kevin@example.com'
    },
    {
      id: 1,
      name: 'Joshua',
      email: 'joshua@example.com'
    }
  ]
  
  return (
    <>
      <h1>Userページ</h1>
      <ul>
        { users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
      <Button variant="contained" color="primary">
        Hello World!
      </Button>
    </>
  )
}

export default User;