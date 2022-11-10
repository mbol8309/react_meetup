import { useMemo } from "react";
import MeetupItem from "../components/meetups/MeetupItem";
import { useFetch } from "../util-hooks/useFetch";
import classes from "./../components/meetups/MeetupList.module.css";


export default function AllMeetupsPage() {
  const { data } = useFetch({
    url: "/data.json",
  });

  const loading = useMemo(() => !data ? true : false,[data])
  if (!data) return <p>Loading...</p>;

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
