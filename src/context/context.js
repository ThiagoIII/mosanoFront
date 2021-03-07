import React from 'react'
import { addUser } from '../context/reducers'

const initalState = { usersList: [], userSubmitted: {}, dayMonthAge: {} }

export const AppContext = React.createContext(initalState)

const AppProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(addUser, initalState)

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider
