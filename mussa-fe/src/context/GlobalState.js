import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

import twitterIcon from "../resources/icons/twitter.svg";
import linkedinIcon from "../resources/icons/linkedin.svg";
import facebookIcon from "../resources/icons/facebook.svg";
import youtubeIcon from "../resources/icons/youtube.svg";
import githubIcon from "../resources/icons/github.svg";

// Initial State
const initialState = {
  listItems: [
    { id: 0, text: "Physics Meets \nPhysics", image: "physics" },
    { id: 1, text: "Chemistry meets \nChemistry", image: "chemistry" },
    { id: 2, text: "Computer     \nScience", image: "comp" },
    { id: 3, text: "Articial \nInteligence", image: "ai" },
  ],
  listNav: [
    {
      id: 0,
      text: "twitterIcon",
      className: "links",
      url: "#tw",
      icon: { twitterIcon },
    },
    {
      id: 1,
      text: "linkedinIcon",
      className: "links",
      url: "#ln",
      icon: { linkedinIcon },
    },
    {
      id: 2,
      text: "facebookIcon",
      className: "links",
      url: "#fb",
      icon: { facebookIcon },
    },
    {
      id: 3,
      text: "youtubeIcon",
      className: "links",
      url: "#yt",
      icon: { youtubeIcon },
    },
    {
      id: 4,
      text: "githubIcon",
      className: "links",
      url: "#git",
      icon: { githubIcon },
    },
  ],
  listEvents: [
    {
      events1: {
        title: {
          id: 0,
          className: "title",
          text: "EVENTS",
        },
        about: {
          id: 1,
          className: "about",
          text: "Back to school event / @mussa",
        },
        when: {
          id: 2,
          className: "when",
          text: "SF - sat, June 19 / 11 pm - 2 am",
        },
      },
    },
    {
      events2: {
        title: {
          id: 0,
          className: "title",
          text: "",
        },
        about: {
          id: 1,
          className: "about",
          text: "",
        },
        when: {
          id: 2,
          //set class when-offset when title is blank
          className: "when when-offset",
          text: "SF - mon, July 3 / 6 pm - 6 am",
        },
      },
    },
  ],
  listNews: [
    {
      news: {
        title: {
          id: 0,
          className: "titleNews",
          text: "NEWS",
        },
        about: {
          id: 1,
          className: "content",
          text: "A fresh take on our Active teams / now also ranked in <span>Red</span> <br /> Now we have a new place at town campus",
        },
        when: {
          id: 2,
          className: "readmore",
          text: "Read More",
          link: "#https://",
        },
      },
    },
  ],
  listEvents1: [
    {
      id: 0,
      className: "title",
      text: "EVENTS",
    },
    {
      id: 0,
      className: "about",
      text: "Back to school event / @mussa",
    },
    {
      id: 0,
      className: "when",
      text: "SF - sat, June 19 / 11 pm - 2 am",
    },
    {
      id: 1,
      className: "title",
      text: "HANGOUTS",
    },
    {
      id: 1,
      className: "about",
      text: "Hackathon code event / @mussa",
    },
    {
      id: 1,
      className: "when",
      text: "SF - sat, June 20 / 11 pm - 2 am",
    },
    {
      id: 2,
      className: "title",
      text: "CodeCamp",
    },
    {
      id: 2,
      className: "about",
      text: "Coding Best Practices / @mussa",
    },
    {
      id: 2,
      className: "when",
      text: "SF - sat, June 22 / 10 pm - 3 am",
    },
  ],
  listEvents2: [
    {
      id: 0,
      //set className to title if there is a title
      className: "",
      text: "",
    },
    {
      id: 1,
      className: "about",
      text: "Pop - up 13th event / @mussa",
    },
    {
      id: 2,
      //set class when-offset when title is blank
      className: "when when-offset",
      text: "SF - mon, July 3 / 6 pm - 6 am",
    },
  ],
  dotIcons: [
    {
      id: 0,
      className: "fas fa-circle",
      classNameSelected: "fas fa-circle faselected",
    },
    {
      id: 1,
      className: "fas fa-circle",
      classNameSelected: "fas fa-circle faselected",
    },
    {
      id: 2,
      className: "fas fa-circle",
      classNameSelected: "fas fa-circle faselected",
    },
  ],
  listHeader: [
    {
      id: 0,
      className: "h h4 hMarginBottom",
      text: "A",
    },
    {
      id: 0,
      className: "h h4",
      text: "MOMENT OF",
    },
    {
      id: 0,
      className: "h h1",
      text: "SCIENCE",
    },
    {
      id: 1,
      className: "h h4 hMarginBottom",
      text: "LETS",
    },
    {
      id: 1,
      className: "h h4",
      text: "MAKE IT",
    },
    {
      id: 1,
      className: "h h1",
      text: "SCIENCE",
    },
  ],
  headerParagraph: [
    {
      id: 0,
      text: "We are happy to introduce to you the grand new club in Multimedia University, The Science Students Association. Incoorporating all science branches pursued at Multimedia University of Kenya.",
    },
  ],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions

  function changeSelected(id) {
    dispatch({
      type: "CHANGE_SELECTED",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        changeSelected,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
