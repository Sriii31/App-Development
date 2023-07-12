import React from 'react'
import  ReactDOM  from 'react-dom'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import LoginForm from './Components/LoginForm'
import Signup from './Components/signup'
import Course from './Components/Courses'
import Certification from './Components/Certification'
import CandidateList from './Components/CandidateList'
import Blogs from './Components/Blogs'
import profile from './Components/Profile'
import Navbar from './Components/Homepage'
import Materials from './Components/Materials'
import Logout from './Components/Logout'
function App(){

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path='/'Component={LoginForm}/>
      <Route exact path='/signup'Component={Signup}/>
      <Route exact path='/Home'Component={Navbar}/>
      <Route exact path ='/CandidateList'Component={CandidateList}/>
      <Route exact path='/course'Component={Course}/>
      <Route exact path='/certification'Component={Certification}/>
      <Route exact path='/blogs'Component={Blogs}/>
      <Route exact path='/profile'Component={profile}/>
      <Route exact path ='/materials'Component={Materials}/>
      <Route exact path ='/logout'Component={Logout}/>

    </Routes>
  </Router>,
  document.getElementById('root')

);
}
export default App;