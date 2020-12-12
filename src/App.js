import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import NavTabs from "./components/NavTabs";
import AppHead from './AppHead';
import BackgroundVideo from './BackgroundVideo';
import { WrappedSignIn } from './SignIn';
import { WrappedSignUp } from './SignUp';
import Game from './Game'

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
      <Route path="/room" component={Game}/>
      {/* <Route path="/search" component={Search}/>
      <Route path="/users" component={UserContainer}/> */}
      <Route exact path="/" component={BackgroundVideo}/>
    </Router>
  );
}

export default App;
