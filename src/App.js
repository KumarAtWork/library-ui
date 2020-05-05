import React from 'react';
import './App.css';
import Libraries from './component/Libraries/Libraries'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import Books from './component/Books/Books'


function App() {
  return(
    <React.Fragment>
    <Router>
    <Libraries></Libraries>
    <Route path='/:id' render={(props)=><Books {...props}></Books>}></Route>
    </Router>
    </React.Fragment>
    )
}

export default App;
