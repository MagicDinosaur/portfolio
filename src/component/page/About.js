
import {useRecoilState} from "recoil";
import {useEffect,useState} from "react";
import {useParams} from "react-router-dom";

import './about.css';

export default function About() {


    return (
        <div className="container-default w-container" >
            <br></br>
            <h2
            style ={{
                textAlign: "center",
            }}
            >About page</h2>
            <p>
                This is where you can find the infomation about my education and work experience, which is not available on my resume or my Linkedin. Thank you for coming
            </p>

     
            <ul class="timeline">
            
                <li>
                    <div class="direction-r">
                        <div class="flag-wrapper">
                            <span class="flag">GSU Department of CS</span>
                            <span class="time-wrapper"><span class="time">Aug 2021 - present</span></span>
                        </div>
                        <div class="desc">
                            <img className= "img-timeline" src= "https://i.imgur.com/NCL5bHt.png"></img>
                            <p>My current employment. </p>
                        
                        
                        </div>
                        
                    </div>
                </li>
                
         
                <li>
                    <div class="direction-l">
                        <div class="flag-wrapper">
                            <span class="flag">OpenCommerce Group</span>
                            <span class="time-wrapper"><span class="time">2011 - 2013</span></span>
                        </div>
                        <div class="desc">
                            <img className="img-timeline" src="https://i.imgur.com/EZatUR8.png"></img>
                            <p> I had 3 delightful, memorable months contract in here </p>

                        </div>
                    </div>
                </li>

              
                <li>
                    <div class="direction-r">
                        <div class="flag-wrapper">
                            <span class="flag">SAMO tech</span>
                            <span class="time-wrapper"><span class="time">2008 - 2011</span></span>
                        </div>
 
                       
                        <div class="desc">
                            <img className="img-timeline" src="https://pbs.twimg.com/profile_images/1062750696179527680/Ti8mvia8_400x400.jpg"></img>
                            <p>My current employment. Way better than the position before! </p></div>
                    </div>
                </li>
                <li>
                    <div class="direction-l">
                        <div class="flag-wrapper">
                            <span class="flag">OpenCommerce Group</span>
                            <span class="time-wrapper"><span class="time">2011 - 2013</span></span>
                        </div>
                        <div class="desc">
                            <img className="img-timeline" src="https://i.imgur.com/EZatUR8.png"></img>
                            <p>My current employment. Way better than the position before! </p>

                        </div>
                    </div>
                </li>
            </ul>


        </div>
    );
}
