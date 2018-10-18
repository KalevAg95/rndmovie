import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";

const App = () => 
<div>  
  <Route path="/login" exact component={LoginPage}/>
  <Route path="/home" exact component={HomePage}/>

</div>;


export default App;
