import React from 'react';
import List from './List'
import Movie from './Movie'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={List}/>
        <Route path="/movie/:id" component={Movie} />
      </Switch>
    </Router>
  );
}

export default App;
