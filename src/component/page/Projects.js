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

export default function Projects() {

    const [useMyInfo, setMyInfo] = useRecoilState(myInfo);
    const [usePortfolioProject, setPortfolioProject] = useRecoilState(portfolioProject);

    return (
        <div className="section portfolio wf-section">
            <div className="container-default w-container">
                <div className="portfolio-title-wrapper"><h1 className="title portfolio">Projects</h1></div>
                <div className="w-dyn-list">
                    <div role="list" className="portfolio-grid w-dyn-items">

                        {
                            Object.keys(usePortfolioProject).map(item => (
                                <div role="listitem" className="w-dyn-item">
                                    <Link to={'/project/'+item}
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
    );
}
