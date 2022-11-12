import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Blogcomponent from './pages/Blogcomponent';
import Post from './pages/Post';
import About from './pages/About';

import React, { Component } from 'react'

export class App extends Component {
  apikey = process.env.REACT_APP_BLOG_API
  render() {
    return (
      <>
        <Router>
  <Navbar/>
  <div className="container">
   <Switch>
          
          
          <Route exact path="/">
            
            <Blogcomponent apikey={this.apikey}/>
          </Route>
          <Route exact path="/post">
            <Post apikey={this.apikey} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        </div>
   
 
 
   </Router>
      </>
    )
  }
}

export default App


// function App() {
//   apikey = process.env.REACT_APP_BLOG_API
//   return (
    
//    <>
//   <Router>
//   <Navbar/>
//   <div className="container">
//    <Switch>
          
          
//           <Route exact path="/">
            
//             <Blogcomponent/>
//           </Route>
//           <Route exact path="/post">
//             <Post apiKey={apikey} />
//           </Route>
//           <Route exact path="/about">
//             <About />
//           </Route>
//         </Switch>
//         </div>
   
 
 
//    </Router>
//    </>
  
//   );
// }

// export default App;
