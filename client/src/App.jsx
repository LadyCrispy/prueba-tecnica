import React from 'react';
import {Switch, Route} from 'react-router-dom'
import AllPhones from './containers/allPhones'
import OnePhone from './containers/one-phone'
import './App.css';




function App() {
  return (
    
    <Switch>

      <Route exact path="/" component={AllPhones}></Route>
      <Route exact path="/phone/detail/:_id" render={(p)=> <OnePhone {...p} />}></Route>

    </Switch>
   

  );
}

export default App;
