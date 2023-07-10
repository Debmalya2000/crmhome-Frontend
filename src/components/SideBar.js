import React from 'react'
import './SideBar.css';

function SideBar() {
  return (
     
    <div className= "side-container">
      
      <ul className="nav flex-column">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">Customers</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">Leads</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">Oppurtunities</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">Sales</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">Tickets</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">Tasks</a>
  </li>
   
</ul>

    </div>
  )
}

export default SideBar