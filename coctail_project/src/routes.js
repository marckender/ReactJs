import React from 'react'
import {BrowserRouter as Router, Route, Switch} from  'react-router-dom'

//import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleHair from './pages/SingleHair'
import Error from './pages/Error'

import Navbar from './components/Navbar'


const Routes = () => {
  return (
    <Router>

      <Navbar />

      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>
        
        <Route path="/hair/:id">
          <SingleHair />
        </Route>

        <Route path="*">
          <Error />
        </Route>

      </Switch>
    </Router>
  );
}

export default Routes ;