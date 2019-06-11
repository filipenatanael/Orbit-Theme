import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Route path="/" exact component={Main} />
        </Fragment>
      </BrowserRouter>
   );
  }
}

export default App;
