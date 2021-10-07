import React from "react"
import './styles/App.css';
import Content from "./components/content/Content";
import Navbar from "./components/Navbar/Navbar";
import Navleft from "./components/Navbar/Navleft";
import "./images/1.jpg";
function App() {
  return (
    <div className="App">
      <Navleft/>
      <Navbar/>
      <Content/>
    </div>
  );
}
export default App;
