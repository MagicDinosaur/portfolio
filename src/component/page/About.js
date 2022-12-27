
import {useRecoilState} from "recoil";
import './about.css';
import { about as portfolioAbout} from "../../store/about";
import { useState } from "react";
import TrackVisibility from 'react-on-screen';
import { Divider, Button } from "antd";
import { DownloadOutlined } from '@ant-design/icons';
export default function About() {

    const [usePortfolioAbout, setPortfolioAbout] = useRecoilState(portfolioAbout);
    const [show, setShow] = useState(true);
    const Work = () => {

        return (
            
        <ul class="timeline">
            {Object.keys(usePortfolioAbout['work']).map(key => (

                <li>
                    <div class={parseInt(key) % 2 == 0 ? "direction-r" : "direction-l"}  >

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
        )
    }
    const Education = () => {
        return (
            <ul class="timeline">
                {Object.keys(usePortfolioAbout['education']).map(key => (

                    <li>
                        <div class={parseInt(key) % 2 == 0 ? "direction-r" : "direction-l"}  >

                            <div class="flag-wrapper">
                                <span class="flag">{usePortfolioAbout['education'][key]['name']}</span>
                                <span class="time-wrapper"><span class="time">{usePortfolioAbout['education'][key]['time']}</span></span>
                            </div>

                            <div class="desc">
                                {/* <img className="img-timeline" src={usePortfolioAbout['work'][key]['logo']}></img> */}
                                <p> {usePortfolioAbout['education'][key]['description']}  </p>
                            </div>
                        </div>
                    </li>
                ))
                }
            </ul>
        )
    }

    const handleTimeLine =(e) => {
        setShow(!show);
    }

    return (

        <div className="container-default w-container" >
            <script
                src="https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js">
            </script>
            <link
                rel="stylesheet"
                href="https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css"
            />
            <br></br>
            <h2
            style ={{
                textAlign: "center",
            }}
            >About page</h2>
            {/* <p
                style={{
                    textAlign: "center",
                }}
            > 
        <br />.....
    <br />  And I never saw you coming
    <br />  And I never
      <br />Being this happy
        <br /> This is the stage of grace
        <br />  This is the worthwild fight
                <br /> This is the golden age of something good and right and real
                <br /> ....
       </p>
              */}
        <p>
            This is where you can find more things about me, which is not available on my resume, my job application, or my Linkedin. Thank you for coming
            </p>

            <br/>
            {/* Education and Work timeline */}
            <div className="about-timeline-work">
            <h4 style={{
                    textAlign: "left",
                }}> Education and Work timeline </h4>
            <p> My journey in education and professonal work could be seen below</p>
            <br/>
                <div className="about-timeline-work nav">
                    <button className="about-timeline-work button" onClick={handleTimeLine}> Work </button>                
                    <button className="about-timeline-work button" onClick={handleTimeLine}> Education </button>
                </div>
                <div className="divider"
                style={{
                    width: '80%',
                    margin: 'auto',
                }}></div>       
                <TrackVisibility>
                    {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                            {show ? <Work /> : <Education />}
                        </div>
                        }
                </TrackVisibility>
            </div>
            <Divider/>
            {/* Additional file */}
            <div className="addional-file">
            <h4 style={{
                textAlign: "left",
            }}> Additional Document</h4>
            <p> If you are here, you're probably a recruiter, hiring manager, or, I hope so, one of my future colleagues. You should have my resume in hand ^^. 
                So, holla, here is my latest transcript for those who are curious about it </p>
            <br/>
            <Button type="primary" shape="round" icon={<DownloadOutlined />} size={32} 
                style={{
                    background: "grey", 
                    display : "block",
                    margin: "auto",
                    width: "200px",
                     }} 
                        href="https://drive.google.com/file/d/11BWPAE-wbWtYtSHdM9cKmNLaTkvNtjFl/view?usp=sharing" 
                    target="_blank">  Download my transcript</Button></div>
            <br />
      
            <Divider/>
            <br />
           
            <div className="github-stats">
                <h4 style={{
                    textAlign: "left",
                }}> My github statistic so you don't have to search for it &#128537; </h4>
            </div>
        
 
            <p>... and they are real-time captured. So if you don't see any statistical number, I might be passed away or quit SWE field   </p>
            <br/>
            <p align="center" >
                <img width="90%" src="http://github-readme-streak-stats.herokuapp.com?user=MagicDinosaur&theme=onedark_duo" />
                <p style={{
                    "margin-top": "10px",
                }}> <i>Streak statistic </i></p> 
                <br/>
                <img width="90%" src="https://ghchart.rshah.org/a0522d/MagicDinosaur" alt="MagicDinosaur's Github chart" />
                <p style={{
                    "margin-top": "10px",
                }}><i>Year Contribution</i></p> 
            </p>
           
            <br />
            <br />
            <br />
            <br />

        </div>
        
    );
}
