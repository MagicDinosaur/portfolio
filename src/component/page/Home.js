import { useRecoilState } from "recoil";
import { useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { info as myInfo } from "../../store/my";
import { project as portfolioProject } from "../../store/portfolio";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export default function Home() {
    const [useMyInfo, setMyInfo] = useRecoilState(myInfo);
    const [usePortfolioProject, setPortfolioProject] = useRecoilState(portfolioProject);
    var TxtRotate = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 300 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    };
    window.onload = function () {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }
    }
    return (
        <div>
            <div className="section home-hero wf-section">
                <div className="container-default w-container">
                    <div className="home-hero-wrapper">
                        <div className="split-content home-hero-left">
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                        <h1>Hi, I am {useMyInfo.name} <br></br></h1>
                                        <h1>
                                             <span
                                                class="txt-rotate"
                                                data-period="2000"
                                                data-rotate='["an entry-level SWE", "AI inquisitive"]'></span> &nbsp;
                                        </h1>
                                        <p >An aspiring computer science student inquisitive about
                                            the limitless world of technology. Having a firm understanding of programming languages, networking, automation, and data-related mysthics.
                                            Motivated to learn, grow and excel in the major.</p><br></br>
                                        <div>
                                            <a href={useMyInfo.socialNetwork["LinkedIn"]}
                                                className="link-primary w-inline-block">
                                                <div className="link-primary-wrapper">
                                                    <div className="link-primary-text">Contact me on Linkedin
                                                        {useMyInfo.contactSocialNetwork}</div>
                                                    <div className="link-primary-text-arrow"><span
                                                        className="link-primary-arrow"></span>
                                                    </div>
                                                </div>
                                            </a></div>
                                        <div>
                                            <div className="link-primary-wrapper">
                                                <div className="link-primary-text"
                                                    style={{ 'font-weight': 'normal', 'font-size': '80%' }}> This web site is written in React.Js. You can find source
                                                    code of it in <a href="https://github.com/MagicDinosaur/portfolio"
                                                        className="link-primary w-inline-block"><strong>here</strong></a>
                                                </div>
                                            </div>
                                        </div>

                                </div>}
                        </TrackVisibility>
                                    </div>
                        <div className="split-content home-hero-right">
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                        <img src="https://i.imgur.com/12QbscD.png" className="image home-hero" />
                                        <i><p style={{ "font-size": "12px", "text-align": "center" }}>Oh! I also love Takoyaki and Taylor Swift</p></i>
                                        {/* <button style={{ "margin": "auto" }}>hello</button> */}
                                </div>}
                        </TrackVisibility>
                                    </div>
                    </div>
              
                </div>
            </div>

            <div className="container-default w-container">
                <div className="divider"></div>
            </div>

     
     
            <div className="section wf-section">
                <div className="container-default w-container">
                    <div className="top-content portfolio-section">
                        <div className="split-content portfolio-section-left">
                            <h2 className="title portfolio-section">Projects</h2>
                        </div>
                        <div className="split-content portfolio-section-right">
                            <Link to="/projects"
                                className="link-primary w-inline-block">
                                <div className="link-primary-wrapper">
                                    <div className="link-primary-text">View projects</div>
                                    <div className="link-primary-text-arrow"><span
                                        className="link-primary-arrow"></span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="w-dyn-list">
                        <div role="list" className="portfolio-grid w-dyn-items">
                            {
                                Object.keys(usePortfolioProject).filter((i, index) => (index < 2)).map(item => (
                                    <div role="listitem" className="w-dyn-item">
                                        <Link to={'/project/' + item}
                                            className="card portfolio-project w-inline-block">
                                            <div className="image-wrapper portfolio-project"><img
                                                src={usePortfolioProject[item].logo}
                                                alt="" className="image portfolio-project" />
                                            </div>
                                            {/*<div className="card-portfolio-project-client">{usePortfolioProject[item].name}</div>*/}
                                            <h3 className="title card-portfolio-project">{usePortfolioProject[item].name}</h3>

                                            <p style={{ "max-width": "40ch" }}>{usePortfolioProject[item].description}</p>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                        <br/>

                    </div>
                </div>
            </div>
            <div className="container-default w-container">
                <div className="divider"></div>
            </div>

            <div class="section wf-section">
                <div class="container-default w-container">
                    <h2 class="title skills">My tech stack</h2>
                    <div class="w-layout-grid skills-grid">
                        {
                            Object.keys(useMyInfo.skills).map(name => (
                                <div class="skill-wrapper">
                                    <i style={{ "font-size": "400%" }} class={useMyInfo.skills[name]}></i>
                                    <p style={{ "text-align": "center" }} class="title skill">
                                        {name}
                                    </p>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>





            <div className="container-default w-container">
                <div className="divider"></div>
            </div>


            <div className="section wf-section">
                <div className="container-default w-container"><h2 className="title social-profiles">Follow me on social
                    network</h2>
                    <div className="w-layout-grid social-profiles-grid">
                        {
                            Object.keys(useMyInfo.socialNetwork).map(name => (
                                <a href={useMyInfo.socialNetwork[name][0]}
                                    target="_blank" className="link-primary w-inline-block">
                                    <div className="link-primary-wrapper">
                                        <i class={useMyInfo.socialNetwork[name][1]} style={{ "font-size": "400%" }}></i>

                                        <div className="link-primary-text-arrow"><span
                                            className="link-primary-arrow"></span></div>
                                    </div>
                                </a>
                            ))
                        }

                    </div>
                </div>
            </div>

        </div>
    );
}



