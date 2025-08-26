import React, { useState, useContext,useEffect, Children } from "react"

const AppContext = React.createContext()

export const AppProvider = ({children}) => {
    const aleksandar = "alewksandar"
    console.log(aleksandar)

    return (
        <AppContext.Provider value={{
            aleksandar
        }}>
            {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}   
   
    
