import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const Search = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.8045 14.8628L11.2545 10.3129C12.1359 9.22423 12.6665 7.8409 12.6665 6.33426C12.6665 2.84229 9.82522 0.000976562 6.33325 0.000976562C2.84128 0.000976562 0 2.84226 0 6.33423C0 9.82619 2.84132 12.6675 6.33328 12.6675C7.83992 12.6675 9.22325 12.1369 10.3119 11.2555L14.8619 15.8055C14.9919 15.9355 15.1625 16.0008 15.3332 16.0008C15.5039 16.0008 15.6745 15.9355 15.8045 15.8055C16.0652 15.5448 16.0652 15.1235 15.8045 14.8628ZM6.33328 11.3342C3.57597 11.3342 1.33333 9.09154 1.33333 6.33423C1.33333 3.57691 3.57597 1.33428 6.33328 1.33428C9.0906 1.33428 11.3332 3.57691 11.3332 6.33423C11.3332 9.09154 9.09057 11.3342 6.33328 11.3342Z"
        fill="white"
      />
    </svg>
  );
};

// Initial State
const initialState = {
  listItems: [
    { id: 0, text: "Physics Meets \nPhysics", image: "physics" },
    { id: 1, text: "Chemistry meets \nChemistry", image: "chemistry" },
    { id: 2, text: "Computer     \nScience", image: "comp" },
    { id: 3, text: "Articial \nInteligence", image: "ai" },
  ],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
};
