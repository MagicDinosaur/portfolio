
import {useRecoilState} from "recoil";
import {useEffect,useState} from "react";
import {useParams} from "react-router-dom";

import './about.css';
import { about as portfolioAbout} from "../../store/about";

export default function About() {

    const [usePortfolioAbout, setPortfolioAbout] = useRecoilState(portfolioAbout);

    // const [useItem, setItem] = useState(usePortfolioAbout[useParams().key]);

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
                {Object.keys(usePortfolioAbout['work']).map(key => (
                   
                    <li>
                        <div class={parseInt(key) % 2 == 0 ? "direction-r" : "direction-l" }  >
                        
                            <div class="flag-wrapper">
                                <span class="flag">{usePortfolioAbout['work'][key]['company']}</span>
                                <span class="time-wrapper"><span class="time">{usePortfolioAbout['work'][key]['time']}</span></span>
                            </div>
                            
                            <div class="desc">
                                <img className="img-timeline" src={usePortfolioAbout['work'][key]['logo']}></img>
                                <p> {usePortfolioAbout['work'][key]['description']}  </p>

                            </div>
                       
                        
                        
                        </div>
                        </li>
                ))
                }
            </ul>


        </div>
    );
}
