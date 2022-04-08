import React, { useState, createContext, useContext } from 'react'
const UserContext = createContext()
export const useCount = () => {
    return useContext(UserContext)
}
export function ParentCountContext({ children }) {
    const value = useCountProvide()
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

function useCountProvide() {
    const [count, setCount] = useState(0)
    return {
        count, setCount
    }
}