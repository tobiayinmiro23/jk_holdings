import React, { createContext, useState } from 'react'
export let UsersContext = createContext()
const UserContext = ({ children }) => {
  const [mobile, setmobile] = useState(false)
  const [userId, setuserId] = useState('')
  const [photoUrl, setphotoUrl] = useState('')
  const [token, settoken] = useState('')
  const [username, setusername] = useState('')
  return (
    <UsersContext.Provider value={[userId, setuserId, photoUrl, setphotoUrl, token, settoken, username, setusername, mobile, setmobile]}>
      {children}
    </UsersContext.Provider>
  )
}

export default UserContext