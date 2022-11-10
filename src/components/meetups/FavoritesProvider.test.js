/* eslint-disable testing-library/no-debugging-utils */
import { mount, render, shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import App from "../../App";
import AllMeetupsPage from "../../pages/AllMeetupsPage";
import FavoritesProvider from "./FavoritesProvider";
import MeetupItem from "./MeetupItem";

test("<FavoritesProvider/> renders without crashing", () => {
  const wrapper = shallow(<FavoritesProvider />);
  expect(wrapper.exists()).toBe(true);
});

test("<FavoritesProvider/> renders its children", () => {
  const wrapper = shallow(<FavoritesProvider><div id='test' /></FavoritesProvider>)
  expect(wrapper.find("div#test").length).toBe(1)
})
