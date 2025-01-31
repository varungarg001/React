import React from 'react'
import usercontext from './UserContext'

const UserContextProvider = ({ children }) => {
    const [user, setuser] = React.useState(null)
    
    return (
        <usercontext.Provider value={{user,setuser}}>
            {children}
        </usercontext.Provider>
    )
}

export default UserContextProvider; 