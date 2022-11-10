import { Link, useLocation } from "react-router-dom";
import { routes } from "./routes";
import { ALL_MEETUP_PAGE, FAVORITES_PAGE, NEW_MEETUP_PAGE } from "./../../utils/constants";

import classes from "./MainNavigation.module.css";

export default function MainNavigation() {

  const location = useLocation()

  return (
    <header className={classes.header} data-test="navigation-header">
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          {routes.map(r=>(
            <li key={r.path}>
              <Link to={r.path} >
                {r.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
