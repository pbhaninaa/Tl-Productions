<<<<<<< HEAD

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


=======
import logo from './logo.svg';
import './App.css';
import Services from'./components/services.js'
import Contacts from './components/contacts';
import Banner from './components/banner';
import React from 'react';
import ReactDOM from 'react-dom';
{/*function App() {
>>>>>>> b2b00560edccc214157d77eab591e6759fa328c3
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

export default App;*/}
const myelement = (
  <section class="contact py-5">
      <div class="container">
          <div class="row">
              <div class="col-lg-7 mx-auto">
                  <div class="card">
                      <div class="card-body">
                          <div class="row">
                              <div class="col-lg-12">
                                  <div class="head">
                                      <h3 class="head text-center text-white py-3">Contact Us</h3>
                                  </div>
                              </div>
                          </div>
                          <div class="row pt-5">
                              <div class="col-lg-5">
                                  <div class="row px-3">
                                      <div class="col-lg-2">
                                          <i class="fas fa-phone-volume"></i>
                                      </div>
                                      <div class="col-lg-10">
                                          <h6 class="font-weight-bold pt-2">Give us a ring</h6>
                                              <div>
                                                  <p>Sinovuyo Sikhisi<br/>
                                                  +27 78 228 3930<br/>
                                                  Mon - Fri, 8:00-22:00
                                                  </p>
                                              </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="offset-1 col-lg-5">
                                  <div class="row px-3">
                                      <div class="col-lg-2">
                                          <i class="fas fa-map-marker-alt"></i>
                                      </div>
                                      <div class="col-lg-10">
                                          <h6 class="font-weight-bold pt-2">Find us at the office</h6>
                                              <div>
                                                  <p>18422 forest view strict<br/>
                                                      Kutlwanong Club 2000
                                                  </p>
                                              </div>
                                      </div>
                                  </div>
                              </div>

                              <div class="form p-3">
                                  <div class="row my-5">
                                      <div class="col-lg-6">
                                          <input type="text" class="effect-1" placeholder="Full Name"></input>
                                          <span class="Focus-border"></span>
                                      </div>
                                      <div class="col-lg-6">
                                          <input type="email" class="effect-1" placeholder="Your Email"></input>
                                          <span class="Focus-border"></span>
                                      </div>
                                  </div>
                                  <div class="row pt-3">
                                      <div class="col-lg-12">
                                          <input type="text" class="effect-1" placeholder="Your Message"></input>
                                          <span class="Focus-border"></span>
                                      </div>
                                  </div>
                                  <div class="row pt-4">
                                      <div class="col-lg-6">
                                          <p><input type="checkbox" >I'm not a robot</input></p>
                                      </div>
                                      <div class="offset-2 col-lg-4">
                                          <button class="btn1">Send Message</button>
                                      </div>
                                  </div>  
                              </div>
                          </div>
                      </div>
                  </div>                       
              </div>
          </div>
      </div>
  </section>
);

ReactDOM.render(myelement, document.getElementById('root'));
