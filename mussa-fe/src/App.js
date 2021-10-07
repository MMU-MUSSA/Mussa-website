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

export default App;
