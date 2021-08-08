import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <>
        <Header/>
        <Switch>
          <Route exact path='/' component={About} />
          <Route exact path='/contactEvan' component={Contact} />
          <Route exact path='/myProjects' component={Projects} />
          <Route render={() => <h1>Woah, How did you get here man?</h1>} />
        </Switch>
        <Footer/>
      </>
    </Router>
  );
}
export default App;
