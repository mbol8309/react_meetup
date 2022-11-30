/* eslint-disable testing-library/no-debugging-utils */
import { mount, render, shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import App from "../../App";
import AllMeetupsPage from "../../pages/AllMeetupsPage";
import FavoritesProvider from "./FavoritesProvider";
import MeetupsProvider from "./MeetupsProvider";

test("<MeetupdProvider/> renders without crashing", () => {
  const wrapper = shallow(<MeetupsProvider />);
  expect(wrapper.exists()).toBe(true);
});

test("<MeetupdProvider/> renders its children", () => {
  const wrapper = shallow(<MeetupsProvider><div id='test' /></MeetupsProvider>)
  expect(wrapper.find("div#test").length).toBe(1)
})
