import { Fragment, useState } from "react";

import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import { ALL_MEETUP_PAGE, FAVORITES_PAGE, NEW_MEETUP_PAGE } from "./utils/constants";

import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";
import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./components/layout/routes";

function App() {
  const [page, setPage] = useState(ALL_MEETUP_PAGE);

  function getCurrentPageComponent() {
    let currentPageComponent = <AllMeetupsPage />;
    switch (page) {
      case FAVORITES_PAGE:
        currentPageComponent = <FavoritesPage />;
        break;
      case NEW_MEETUP_PAGE:
        currentPageComponent = <NewMeetupsPage />;
        break;
      default:
        currentPageComponent = <AllMeetupsPage />;
    }

    return currentPageComponent;
  }

  const router = createBrowserRouter(routes);

  return (
    <div data-test="app">
      <BrowserRouter>
        <MainNavigation />
        <Layout>

          <Routes>
            {routes.map(r => (
              <Fragment>
                <Route key={r.path} path={r.path} element={r.element} />
              </Fragment>
            ))
            }
          </Routes>

        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
