"use client"

import {createContext, useState} from "react";

export const DataContext = createContext([])

export const DataProvider = ({children}) => {
    const [data, setData] = useState([])

    const updateData = (inputData)=>{
        setData(inputData)
    }

    return(
        <DataContext.Provider value={{data, updateData}}>
            {children}
        </DataContext.Provider>
    )
}