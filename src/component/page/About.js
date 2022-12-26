
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
            <br></br>
            <h2
            style ={{
                textAlign: "center",
            }}
            >About page</h2>
            <p>
                This is where you can find the infomation about my education and work experience, which is not available on my resume or my Linkedin. Thank you for coming
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
            <div className="addional-file"></div>
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
                        target="_blank">  Download my transcript</Button>
            <br />
        </div>
    );
}
