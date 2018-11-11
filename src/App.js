import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import InitialCommentPage from './Component/InitialCommentPage.js';
import AddComment from './Component/AddComment.js';
class App extends React.Component{
  render(){
    return(
      <Router>   
       <Switch>
       <Route exact path="/" component={InitialCommentPage}/> 
       <Route exact path="/adduser" component={AddComment}/> 
       </Switch>
       </Router>
    );
  }
}

export default App;

