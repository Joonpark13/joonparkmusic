import React, { ReactElement } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { mergeStyles } from 'office-ui-fabric-react';
import ScrollToTop from './ScrollToTop';
import Nav from './Nav';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import WorksPage from './WorksPage';
import ContactPage from './ContactPage';
import NotFoundPage from './NotFoundPage';

const mainClassName = mergeStyles({
  display: 'flex',
  minHeight: '100vh',
});

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
          <NotFoundPage />
        </Switch>
      </main>
    </BrowserRouter>
  );
}
