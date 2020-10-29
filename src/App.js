import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import IndexPage from "./pages/index";
import AboutPage from "./pages/about";
import DesignPage from "./pages/design";
import ContactPage from "./pages/contact";
import PageNotFound from "./pages/404";
import "./styles/skeleton.css";
import "./styles/style.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <div className="row">
          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/design" component={DesignPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
