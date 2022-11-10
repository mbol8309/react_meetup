import { Link, useLocation } from "react-router-dom";
import useMeetupRoutes, { routes } from "./useMeetupRoutes";
import { ALL_MEETUP_PAGE, FAVORITES_PAGE, NEW_MEETUP_PAGE } from "./../../utils/constants";

import classes from "./MainNavigation.module.css";
import classNames from "classnames";
import { useMemo } from "react";
import useScroll from "../../util-hooks/useScroll";

export default function MainNavigation() {

  const scrollDirection = useScroll()
  
  const routes = useMeetupRoutes()

  const hide = useMemo(() => scrollDirection > 0 ? true : false, [scrollDirection])

  return (
    <>
      <header className={classNames(classes.header,classes.header_placeholder, { [classes.header_hide]: hide })} data-test="navigation-header">
        <div className={classes.logo}>React Meetups</div>
        <nav>
          <ul>
            {routes.map(r => (
              <li key={r.path}>
                <Link to={r.path} >
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className={classes.header_placeholder} />
    </>

  );
}
