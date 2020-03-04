import React, { ReactElement } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { mergeStyles, Fabric } from 'office-ui-fabric-react';
import Nav from './Nav';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import WorksPage from './WorksPage';
import ContactPage from './ContactPage';

const mainClassName = mergeStyles({
  display: 'flex',
  minHeight: '100vh',
});

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <main className={mainClassName}>
        <Nav />
        
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/works">
            <Redirect to="/works/large-ensemble" />
          </Route>
          <Route path="/works/:category">
            <WorksPage />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
};
