import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Header from './components/Header';
//import Footer from './components/Footer';
//import Home from './pages/Home';
//import About from './pages/About';
//import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
