import React from 'react';
import './App.css';
import Home from "./components/Home";
import Header from './components/Header'
import About from "./components/About";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>

      <Header />
      <Switch>
        <Route exact path='/about' component={About} />
        <Route exact path='/' component={Home} />

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
