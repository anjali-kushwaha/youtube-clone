import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SearchPage from "./SearchPage";
import RecommentedVideos from "./RecommentedVideos";

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

function App() {
  return (  
    <div className="App"> 
      <Router>
       <Header/>
         <Switch>
           <Route path="/search/:searchTerm">
           <div className="apssp__page"> 
           <Sidebar/>
           <SearchPage/>
       </div>
           </Route>
         <Route path="/">
         <div className="apssp__page"> 
       <Sidebar/>
       <RecommentedVideos />
   </div>
   </Route>        
   </Switch>
    </Router>
  
      
  
    </div>
  );
}

export default App;
