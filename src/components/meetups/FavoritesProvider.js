import React, { useCallback, useMemo, useState } from 'react'

const FavoriteContext = React.createContext({})

export const useFavorites = () => React.useContext(FavoriteContext)
/**
 * Provider for handling favorites listing, add and remove
 */
const FavoritesProvider = ({ children }) => {

    const [favoritesList, setFavoritesList] = useState([])

    const addToFavorite = useCallback((item) => {
        setFavoritesList(f => {
            if (!f.find(i => i.id === item.id)) {  //if item isn't in list, return new list with item at end
                return [...f, item]
            } else return f
        })
    }, [])

    const removeFromFavorite = useCallback((item) => {
        setFavoritesList(f => f.filter(i => i.id !== item.id)) //return new list except with id equal to item.id 
    }, [])

    const contextValue = useMemo(() => ({
        favoritesList,
        addToFavorite,
        removeFromFavorite
    }), [addToFavorite, removeFromFavorite, favoritesList])

    return (
        <FavoriteContext.Provider value={contextValue}>
            {children}
        </FavoriteContext.Provider>
    )
}

export default FavoritesProvider



