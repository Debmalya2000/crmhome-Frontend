import React from 'react';
import './App.css';
import SideBar from './components/SideBar';
import Navbar from './components/Navbar';
import Cards from './components/Cards';


function App() {
  return (
    <>
       
      <div className= 'container'>
      
      <h4>Customer Relationship </h4>
      <h4>Management System</h4>

      <div>
        <Navbar/>
      </div>
      </div>
      <div>
        <Cards/>
      </div>


      <div>
      <SideBar/>
      </div>
      
      <div className='down-container'><h4>Hylen Keller</h4>
      <p>Full-stack developer</p><img className="Profile-pic" src="Profile_icon.jpg" alt="none" /></div>
      
        
      
      
        
      
    </>
  );
}

export default App;