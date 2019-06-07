import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './components/Main';
import Github from './components/Github';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Route path="/" exact component={Main} />
          <Route path="/github" exact component={Github} />
        </Fragment>
      </BrowserRouter>
   );
  }
}

export default App;
