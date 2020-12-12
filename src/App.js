import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import NavTabs from "./components/NavTabs";
import AppHead from '.AppHead';
import BackgroundVideo from '.BackgroundVideo'
import SignIn from '.SignIn'
import SignUp from '.SignUp'
import Game from '.Game'

// You can also just do the code below
// import {
//   UserContainer,
//   SignUp,
// } from './pages';




import BackgroundVideo from './BackgroundVideo';

// import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <AppHead/>
      <Route path='/signup' component={SignUp}/>
      <Route path='/signin' component={SignIn}/>
      <Route path="/room" component={Game}/>
      {/* <Route path="/search" component={Search}/>
      <Route path="/users" component={UserContainer}/> */}
      <Route exact path="/" component={BackgroundVideo}/>
    </Router>
  );
}

export default App;
