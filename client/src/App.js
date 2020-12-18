import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import NavTabs from "./components/NavTabs";
import AppHead from './components/AppHead';
import BackgroundVideo from './components/BackgroundVideo';
import {
  WrappedSignUp,
  WrappedSignIn,
} from './pages/Viewer';
import Table from './components/Table';
import Game from './components/Game'


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
<<<<<<< HEAD
      {/* <Route exact path="/" component={Table}/> */}
=======
      <Route path="/game" component={Table}/>
      <Route path="/gameScreen" component={Game}/>
>>>>>>> dedb1b80fedfe8698d21a102624332f7a38db6f0
      <Route exact path="/" component={BackgroundVideo}/>
    </Router>
  );
}

export default App;
