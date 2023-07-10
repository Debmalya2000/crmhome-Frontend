import React from 'react'
import './Cards.css';

function Cards() {

  return (

    <div class="container">
    <div class="row">
        
            <div class="card">
                

                <div class="card-body">
                    <h5 class="card-title">Total Sales</h5>
                    <p class="card-text">$986,829.45</p>
                     <img className="Sales-icon" src="Sales1_icon.jpeg" alt="none" />   
                    

                    
                </div>
            </div>
         <div/>
        
        <div class="container">
            <div class="row1">
            <div class="card">
                

                <div class="card-body">
                    <h5 class="card-title">Total Customers</h5>
                    <p class="card-text">345,543</p>
                    <img className="Customer-icon" src="Customers1_icon.jpeg" alt="none" />
                </div>
                        
                    
                      
                    
            </div>
            </div>
    </div>
    <div class="container">
            <div class="row2">
            <div class="card">
                

                <div class="card-body">
                    <h5 class="card-title">Total Tasks</h5>
                    <p class="card-text">163</p>
                     <img className="Task-icon" src="Tasks1_icon.jpeg" alt="none" />   
                    
                      
                    
                </div>
            </div>
            </div>
    </div>
    <div class="container">
            <div class="row3">
            <div class="card">
                

                <div class="card-body1">
                    <h5 class="card-title1">Tasks Assigned</h5>
                    <ul className='card-text1'>
                        <li>Call Mr.Hymen</li>
                        <li>Reminding for Meeting</li>
                        <li>Eating apple at 12pm</li>
                        <li>Go for a walk</li>
                        <li>meeting with mukiel</li>
                        <li>Call to Google</li>
                        <li>Meeting with sunder lal</li>
                        <li>Meet with Sales Team</li>
                    </ul>
                    <ul className='triple-dots'>
                        <li>...</li>
                        <li>...</li>
                        <li>...</li>
                        <li>...</li>
                        <li>...</li>
                        <li>...</li>
                        <li>...</li>
                        <li>...</li>
                    </ul>
                    
                    
                      
                    
                </div>
            </div>
            </div>
    </div>
    <div class="container">
            <div class="row4">
            <div class="card">
                

                <div class="card-body2">
                    <img className="Clock-icon"src="Clock-icon.jpeg" alt="none" />
                    <h5 class="card-title2">24 Hours Format</h5>
                    <p class="date">08 June 2023</p>
                    <p class="time">21:30</p>
                    
                </div>
                    
                      
                    
            </div>
            </div>
    </div>
    <div class="container">
            <div class="row5">
            <div class="card">
                

                <div class="card-body3">
                    <h5 class="card-title3">Sales Overtime</h5>
                    <p class="card-text2">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <p class="line1">-Revenue  --Order</p>
                    <p class="line2">...</p>
                    <img className="Sales-image"src="Sales-Overtime.jpeg" alt="none" />
                    
                    
                      
                    
                </div>
            </div>
            </div>
    </div>
 </div>
 </div>
  )
}

export default Cards