import React, { useCallback, useMemo, useState } from "react"
import { useFetch } from "../../util-hooks/useFetch"

const MeetupsContext = React.createContext()

export const useMeetups = () => React.useContext(MeetupsContext)

const MeetupsProvider = ({ children }) => {

    const { data } = useFetch({ url: "/data.json" })

    const [newMeetups, setNewMeetupds] = useState([])

    const addMeetupd = useCallback((data) => {
        /*
        Here come some communication with back.
        Beacause there is no back in this state we use Context Provider 
        to easily mantain list of al meetups
        */
        setNewMeetupds(old_data => [...old_data, {
            ...data,
            id: Math.floor(Math.random() * 10000)
        }])
    }, [])


    const all_data = useMemo(() => {
        if (data){
        return [...data, ...newMeetups]
    } else return []
    }, [data, newMeetups])

    const meetups_value = {
        meetups: all_data,
        addMeetupd
    }
    return (
        <MeetupsContext.Provider value={meetups_value}>
            {children}
        </MeetupsContext.Provider>
    )

}


export default MeetupsProvider