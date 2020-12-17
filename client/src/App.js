import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import NavTabs from "./components/NavTabs";
import AppHead from './components/AppHead';
import BackgroundVideo from './components/BackgroundVideo';
import { WrappedSignIn } from './components/SignIn';
import { WrappedSignUp } from './components/SignUp';
import Table from './components/Table';
import Game from './components/Game'
import SignInSignUp from './components/SignInOrSignUp';

// You can also just do the code below
// import {
//   UserContainer,
//   SignUp,
// } from './pages';




// import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <AppHead/>
      <Route path='/signup' component={WrappedSignUp}/>
      <Route path='/signin' component={WrappedSignIn}/>
      <Route path="/game" component={Table}/>
      <Route exact path="/" component={BackgroundVideo}/>
    </Router>
  );
}

export default App;
