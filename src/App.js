import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import axios from 'axios';

import RouteLayout from "./components/Layout/RouteLayout";
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';
import LoginContainer from './containers/LoginContainer';

const Home = () => {
    return (
        <div>home</div>
    )
}

const PageNotFound = () => {
    return (
        <div>PageNotFound</div>
    )
}

function App() {
  return (
    <div>
        <Router>
            <Switch>
                <RouteLayout exact path="/" component={Home} />
                <RouteLayout path="/counter" component={CounterContainer} />
                <RouteLayout path="/todo" component={TodosContainer} />
                <RouteLayout path="/login" component={LoginContainer} />
                <Route component={PageNotFound} />
            </Switch>
        </Router>
      <br/>
    </div>
  );
}

export default App;