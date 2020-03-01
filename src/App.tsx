import React, { ReactElement } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { mergeStyles, Fabric } from 'office-ui-fabric-react';
import Nav from './Nav';
import HomePage from './HomePage';
import AboutPage from './AboutPage';

const mainClassName = mergeStyles({
  display: 'flex',
});

export default function App(): ReactElement {
  return (
    <Fabric>
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
            <Route exact path="/contact">
              Contact
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </Fabric>
  );
};
