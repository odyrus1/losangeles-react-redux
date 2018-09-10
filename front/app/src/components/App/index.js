// Import
import React from 'react';
import { Route } from 'react-router-dom';

// Local import
import Home from 'src/containers/home';
import Signup from 'src/components/Signup';
import Signin from 'src/containers/signin';
import Account from 'src/containers/account';

// Code
const App = () => (
  <div>
    <Route path="/" exact component={Home} />
    <Route path="/signup" exact component={Signup} />
    <Route path="/signin" exact component={Signin} />
    <Route path="/account" exact component={Account} />
  </div>
);

// Export
export default App;
