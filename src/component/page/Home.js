import {useRecoilState} from "recoil";
import {useEffect} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {info as myInfo} from "../../store/my";
import {project as portfolioProject} from "../../store/portfolio";

export default function Home() {
    const [useMyInfo, setMyInfo] = useRecoilState(myInfo);
    const [usePortfolioProject, setPortfolioProject] = useRecoilState(portfolioProject);
    return (
        <div>
            <div className="section home-hero wf-section">
                <div className="container-default w-container">
                    <div className="home-hero-wrapper">
                        <div className="split-content home-hero-left">
                            <h1>Hello, I am {useMyInfo.name}</h1>
                            <p className="paragraph home-hero">An aspiring computer science student inquisitive about the limitless world of technology</p>
                            {/*<a href={useMyInfo.socialNetwork[useMyInfo.contactSocialNetwork]} target={'_blank'}*/}
                            {/*   className="link-primary w-inline-block">*/}
<div>
                            <a href= {useMyInfo.socialNetwork["LinkedIn"]}
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
                            <a href= "https://github.com/MagicDinosaur/personal_portfolio"
                               className="link-primary w-inline-block">
                                <div className="link-primary-wrapper">
                                    <div className="link-primary-text" style={{'font-weight': 'normal', 'font-size': '80%'}}> You can find source code of this website in <strong>here</strong>
                                        </div>
                                </div>
                            </a>
                            </div>

                        </div>
                        <div className="split-content home-hero-right"><img
                            src="https://www.aictitle.com/assets/images/technology.gif" className="image home-hero"/>

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
                                                alt="" className="image portfolio-project"/>
                                            </div>
                                            {/*<div className="card-portfolio-project-client">{usePortfolioProject[item].name}</div>*/}
                                            <h3 className="title card-portfolio-project">{usePortfolioProject[item].name}</h3>

                                            <p>{usePortfolioProject[item].description}</p>
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

            <div className="section wf-section">
                <div className="container-default w-container"><h2 className="title social-profiles">Follow me on social
                    network</h2>
                    <div className="w-layout-grid social-profiles-grid">
                        {
                            Object.keys(useMyInfo.socialNetwork).map(name => (
                                <a href={useMyInfo.socialNetwork[name]}
                                   target="_blank" className="link-primary w-inline-block">
                                    <div className="link-primary-wrapper">
                                        <div className="link-primary-text">{name}</div>
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
