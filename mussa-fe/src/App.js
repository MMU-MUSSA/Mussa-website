import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Navleft from "./components/navleft/Navleft";
import Center from "./components/center/Center";
import Bottom from "./components/bottom/Bottom";

function App() {
  return (
    <div className="App">
      <Navleft />
      <Navbar />
      <Center />
      <Bottom />
    </div>
  );
}
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
//let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
// document.documentElement.style.setProperty("--vh", `${vh}px`);
// window.addEventListener("resize", () => {
// We execute the same script as before
//  let vh = window.innerHeight * 0.01;
//  document.documentElement.style.setProperty("--vh", `${vh}px`);
// });

export default App;
