import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import UserHomePage from './containers/UserHomePage';
import CounterPage from './containers/CounterPage';
import PantryPage from './containers/PantryPage';
import GroceryListsPage from './containers/GroceryListsPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={UserHomePage} />
    <Route path="/counter" component={CounterPage} />
    <Route path="/pantry" component={PantryPage} />
    <Route path="/grocerylists" component={GroceryListsPage} />
  </Route>
);
