import './App.css';
import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import CategoryDisplay from './components/CategoryDisplay'
import Orders from './components/Orders'
import DisplayDish from './components/DisplayDish';
import FeedbackForm from './components/FeedbackForm'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        
        <Header></Header>
        
        <Navbar></Navbar>
        
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/categories" component={CategoryDisplay}/>
          <Route path="/categories/:id">
            <DisplayDish />
          </Route>
          <Route path="/orders">
            <Orders></Orders>
          </Route>
          <Route path="/feedback">
            <FeedbackForm></FeedbackForm>
          </Route>
        </Switch>
        
        <Footer></Footer>
      
      </div>
    </Router>
  )
}

export default App;
