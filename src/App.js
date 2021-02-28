import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import "tachyons";
import Indoor from "./components/Indoor";
import Outdoor from "./components/Outdoor";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import Scrolltotop from "./components/Scrolltotop";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Scrolltotop />
          <Route path="/" exact component={Home} />
          <Route path="/Indoor" exact component={Indoor} />
          <Route path="/outdoor" exact component={Outdoor} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Copyright />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
