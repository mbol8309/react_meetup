import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useFavorites } from "./FavoritesProvider";
import { useMemo } from "react";

export default function MeetupItem({ item }) {
  // const { data } = useFetch({
  //   url: "/data.json",
  // });

  const { addToFavorite, removeFromFavorite } = useFavorites()
  const { favoritesList } = useFavorites()

  const inFavorites = useMemo(() => favoritesList.find(f => f.id === item.id), [item, favoritesList])

  // if (!data) return <p>Loading...</p>;
  // let [item] = data;

  return (
    <li className={classes.item} data-test='meet-up-item'>
      <Card>
        <div className={classes.image}>
          <img src={item.image} alt={item.title} />
        </div>
        <div className={classes.content}>
          <h3>{item.title}</h3>
          <address>{item.address}</address>
          <p>{item.description}</p>
        </div>
        <div className={classes.actions}>
          {
            inFavorites ?
              <button onClick={() => removeFromFavorite(item)}>Remove from favorites</button>
              :
              <button onClick={() => addToFavorite(item)}>Add to favorites</button>
          }
        </div>
      </Card>
    </li>
  );
}
