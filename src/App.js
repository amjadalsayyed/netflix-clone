import "./App.css";
import Home from "./components/Home/Home";
import Navbar0 from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import FavList from "./components/FavList/FavList";

function App() {
  return (
    <div className="app">
      <Navbar0 />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favmovies" element={<FavList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
