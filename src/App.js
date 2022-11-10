import { Fragment, useState } from "react";

import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import { ALL_MEETUP_PAGE, FAVORITES_PAGE, NEW_MEETUP_PAGE } from "./utils/constants";

import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";
import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router-dom";
import FavoritesProvider from "./components/meetups/FavoritesProvider";
import useMeetupRoutes from "./components/layout/useMeetupRoutes";

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

  const routes = useMeetupRoutes()

  return (
    <div data-test="app">
      <BrowserRouter>
        <FavoritesProvider>
          <MainNavigation />
          <Layout>

            <Routes>
              {routes.map(r => (
                <Route key={r.path} path={r.path} element={r.element} />
              ))
              }
            </Routes>

          </Layout>
        </FavoritesProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
