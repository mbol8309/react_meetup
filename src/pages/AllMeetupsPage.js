import { useMemo } from "react";
import MeetupItem from "../components/meetups/MeetupItem";
import { useMeetups } from "../components/meetups/MeetupsProvider";
import { useFetch } from "../util-hooks/useFetch";
import classes from "./../components/meetups/MeetupList.module.css";


export default function AllMeetupsPage() {
  const { meetups: data } = useMeetups()

  const loading = useMemo(() => !data ? true : false,[data])

  return (
    <section>
      <h1>All Meetups</h1>
      {loading ?
        <p>Loading...</p>
        :
        <ul className={classes.list}>
          {
            data.map(item =>
              <MeetupItem key={item.id} item={item} />
            )
          }

        </ul>
      }
    </section>
  );
}
