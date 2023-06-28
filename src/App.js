import React, { Component } from "react";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Movies from "./components/Movies";
import NotFound from "./components/NotFound";
import {Link, Routes, Route, Navigate} from "react-router-dom";
import "./styles/styles.css"

class App extends Component {
  render() {
    return (
      <>
        <div className="navbar">
          <ul className="ull">
            <li className="linkli"><Link className="link" to="/">Home</Link></li>
            <li className="linkli"><Link className="link" to="about-us">AboutUs</Link></li>
            <li className="linkli"><Link className="link" to="movies">Movies</Link></li>
          </ul>
        </div>
        <hr/>
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about-us" element={<AboutUs />}></Route>
            <Route path="/movies" element={<Movies />}></Route>
            <Route path="/not-found" element={<NotFound />}></Route>
            <Route path="/*" element={<Navigate to="/not-found" />}></Route>
            
          </Routes>
         
        </div>
      </>
    );
  }
}
export default App;
