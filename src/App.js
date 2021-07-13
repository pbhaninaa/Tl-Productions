
import DotLoader from "react-spinners/DotLoader";
import React, { useState, useEffect } from "react"
import { Banner } from "./components/banner"
import programs from "./components/programs"
import { Contact } from "./components/Contact"
import Services from "./components/services"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navigate } from "./components/navigate"
import './App.css'


import About from "./components/About";


function App() {


  const [loading, setLoading] = useState(false);
  useEffect(() => {
    
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [])


  return (
    <div className="App" >
      {     
        loading ?
          <DotLoader
           
            size={200}
            color={'#a05b82'}
            loading={loading}
          />
          :
          <Router>
            <Switch>
              <Route exact path="/" component={Navigate} />
              <Route exact path="/banner" component={Banner} />
              <Route exact path="/programs" component={programs} />
              <Route exact path="/About" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/Services" component={Services} />
            </ Switch>

          </ Router>}
    </div>
  );
}

export default App;
