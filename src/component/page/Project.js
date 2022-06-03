import {useRecoilState} from "recoil";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

import {project as portfolioProject} from "../../store/portfolio";
import NotFound from "./NotFound";

export default function Project() {

    const [usePortfolioProject, setPortfolioProject] = useRecoilState(portfolioProject);

    const [useItem, setItem] = useState(usePortfolioProject[useParams().key]);

    return (
        <div>
            {useItem ? (
                <div className="section portfolio-page wf-section">
                    <div className="container-medium-768px">
                        <a href={useItem.link.url}
                           target="_blank" className="link-primary w-inline-block" style={{
                            position: 'relative',
                            float: 'right'
                        }}>
                            <div className="link-primary-wrapper" style={{color: 'rgb(26, 26, 26);'}}>
                                <div className="link-primary-text">{useItem.link.text}</div>
                                <div className="link-primary-text-arrow"><span
                                    className="link-primary-arrow"></span>
                                </div>
                            </div>
                        </a>
                        <div className="top-content portfolio-top-content" style={{display: 'block'}}>
                            <div className="split-content portfolio-left"><img
                                src={useItem.logo} class={'image portfolio-project-icon'}/><h1
                                className="title portfolio-project-title">{useItem.name}</h1><p
                                className="paragraph portfolio-project-summary">{useItem.description}</p></div>
                        </div>
                        <div className="w-layout-grid portfolio-project-about-grid">
                            <div className="portfolio-project-about-wrapper">
                                <div className="portfolio-project-about-title">Position</div>
                                <div>{useItem.position}</div>
                            </div>
                            <div className="portfolio-project-about-wrapper">
                                <div className="portfolio-project-about-title">Type</div>
                                <div>{useItem.type}</div>
                            </div>
                            <div className="portfolio-project-about-wrapper">
                                <div className="portfolio-project-about-title">Date</div>
                                <div className="portfolio-project-about-date">
                                    {useItem.date}
                                </div>
                            </div>
                            <div className="portfolio-project-about-wrapper">
                                <div className="portfolio-project-about-title">Source</div>
                                <div>
                                    <a href={useItem.link.git}
                                       target="_blank" className="portfolio-project-about-date"
                                    >{useItem.name}</a></div>
                            </div>

                        </div>
                        {useItem.overview && (
                            <div>
                                <div className="divider portfolio-divider-1"></div>
                                <h2>Overview</h2>
                                <div className="rich-text w-richtext"><p>{useItem.overview.description}</p>
                                    {
                                        useItem.overview.image.map(item => (
                                            <figure style={{maxWidth: '1438px'}}
                                                    className="w-richtext-align-fullwidth w-richtext-figure-type-image">
                                                <div><img
                                                    src={item}/></div>
                                            </figure>
                                        ))
                                    }

                                </div>
                            </div>
                        )}
                        {useItem.result && (
                            <div>
                                <div className="divider portfolio-divider-2"></div>
                                <h2>Technique usages</h2>
                                <div className="rich-text w-richtext"><p>{useItem.result.description}</p>
                                    <ul role="list">
                                        {
                                            useItem.result.list.map(item => (
                                                <li>{item}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <NotFound/>
            )}
        </div>
    );
}
