import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import IndexPage from "./pages/index";
import AboutPage from "./pages/about";
import DesignPage from "./pages/design";
import Team from "./pages/team";
import "./styles/skeleton.css";
import "./styles/style.css";

function App() {
  return (
    <Router>
      <div className="App">
        <IndexPage />
        <AboutPage />
        <DesignPage />
        <Team />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
