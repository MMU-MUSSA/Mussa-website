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
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
};
