import { createContext, useState } from "react"



export const MoodContext = createContext()

export const MoodProvider = ({ children }) => {
    const [currentMood, setCurrentMood] = useState('')
    const[compliments, setCompliments] = useState(0)


return (
    <MoodContext.Provider value={{currentMood, setCurrentMood, compliments, setCompliments}}>
        {children}
    </MoodContext.Provider>

)


}