

import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';

function App() {
  return (
    <Router>
    <div className ="App">
      <div className='Heading' style={{textAlign: "center"}}>
        <h1> React Learning</h1>
      </div>
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path='/'> 
          <Home/>
          </Route>
          <Route exact path='/create'> 
          <Create/>
          </Route>
        </Switch>
      </div>
    
      
   
    </div>
    </Router>
  );
}

export default App;
