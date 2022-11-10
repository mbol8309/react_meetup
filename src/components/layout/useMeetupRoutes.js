import { useMemo } from "react";
import AllMeetupsPage from "../../pages/AllMeetupsPage";
import FavoritesPage from "../../pages/Favorites";
import NewMeetupsPage from "../../pages/NewMeetup";
import { useFavorites } from "../meetups/FavoritesProvider";

import classes from "./MainNavigation.module.css"

const useMeetupRoutes = () => {

    const { favoritesList } = useFavorites()

    const routes = useMemo(() => (
        [
            {
                path: "/",
                element: <AllMeetupsPage />,
                label: "All Meetups"
            },
            {
                path: "/new",
                element: <NewMeetupsPage />,
                label: "Add New Meetup"
            },
            {
                path: "/favorites",
                element: <FavoritesPage />,
                label: 
                <>
                    My Favorites
                    <span className={classes.badge}>{favoritesList?.length}</span>
                </>
            },
        ]), [favoritesList])

    return routes
}

export default useMeetupRoutes
