import "./App.css";
import NavbarPresentational from "./components/navbar/NavbarPresentational";
import LiveScreen from "./screens/LiveScreen/LiveScreen";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <NavbarPresentational></NavbarPresentational>
      <LiveScreen></LiveScreen>
    </div>
  );
}

export default App;
