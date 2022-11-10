import { useFavorites } from "../components/meetups/FavoritesProvider";
import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";

export default function FavoritesPage() {

  const { favoritesList } = useFavorites()

  return (
    <section>
      <h1>Favorites Page</h1>
      <ul className={classes.list}>
          {
            favoritesList.map(item =>
              <MeetupItem key={item.id} item={item} />
            )
          }

        </ul>
    </section>
  );
}
