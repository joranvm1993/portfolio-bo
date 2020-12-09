import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  
import { ContactScreen } from '../ContactScreen';
import { EducationScreen } from '../EducationScreen';
import { LandingScreen } from '../LandingScreen';
import { ProfileScreen } from '../ProfileScreen';
import { ProjectScreen } from '../ProjectScreen';
import { Navbar } from '../ui/Navbar';

export const AppRouter = () => {
    return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ LandingScreen } />
          <Route exact path="/profile" component={ ProfileScreen } />
          <Route exact path="/education" component={ EducationScreen } />
          <Route exact path="/projects" component={ ProjectScreen } />
          <Route exact path="/contact" component={ ContactScreen } />
        </Switch>
      </div>
    </Router>
  );
}