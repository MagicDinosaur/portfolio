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

export default function Home() {
    const [useMyInfo, setMyInfo] = useRecoilState(myInfo);
    const [usePortfolioProject, setPortfolioProject] = useRecoilState(portfolioProject);
    return (
        <div>
            <div className="section home-hero wf-section">
                <div className="container-default w-container">
                    <div className="home-hero-wrapper">
                        <div className="split-content home-hero-left">
                            <h1>Hello there, I am {useMyInfo.name}</h1>
                            <p >An aspiring computer science student inquisitive about
                                the limitless world of technology. Having a firm understanding of programming languages, mathematics, machine learning terminology.
                                Motivated to learn, grow and excel in the major.</p><br></br>
                            <p>Thank you for coming to my page!</p><br></br>

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

                        </div>
                        <div className="split-content home-hero-right"><img
                            src="https://i.imgur.com/eZQCoTi.png" className="image home-hero" />
                            <i><p style ={{"font-size":"12px", "text-align":"center"}}>Oh! I also love Takoyaki and Taylor Swift</p></i>
                            {/* <p style ={{"font-size":"12px", "text-align":"center"}}>Don't click here 🥺 you will drop my food</p> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-default w-container">
                <div className="divider"></div>
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



