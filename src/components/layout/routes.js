import AllMeetupsPage from "../../pages/AllMeetupsPage";
import FavoritesPage from "../../pages/Favorites";
import NewMeetupsPage from "../../pages/NewMeetup";

import classes from "./MainNavigation.module.css"

export const routes = [
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
        label: <>
            My Favorites
            <span className={classes.badge}>{0}</span>
        </>
    },
]