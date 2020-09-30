import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Links from "./components/Links"



function App() {
  return (
  <Router>
    <Nav/>
    <Route exact path="/" component={About}/>
    <Route exact path= "/contact" component ={Contact}/>
    <Links/>
    <Footer/>
  </Router>
  );
}

export default App;
