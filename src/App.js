import "./App.css";
import Home from "./components/Home/Home";
import Navbar0 from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Navbar0 />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
