import React, { useReducer } from "react";

import 'babel-polyfill';

import styles from './App.css'
//route
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ContextProvider from './store/context/contextProvider'

//pages
import Main from './pages/main/Main'
import AddPhoto from './pages/addPhoto/AddPhoto'
import Single from './pages/single/Single'

const App = () => {

  return (
    <div>
        <ContextProvider>
          <BrowserRouter>
            <Switch>
                <Route path="/single/:id/:img" component={ Single }/>
                <Route path="/addphoto" component={ AddPhoto }/>
                <Route path="/" component={ Main }/>
                <Route component={ Main }/>
            </Switch>
          </BrowserRouter>
        </ContextProvider>
    </div>
  );
};

export default App; 
