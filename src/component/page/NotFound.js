
import {useRecoilState} from "recoil";
import {useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import {project as portfolioProject} from "../../store/portfolio";

export default function NotFound() {

    const [useKey, setKey] = useState(useParams().key);

    const [usePortfolioProject, setPortfolioProject] = useRecoilState(portfolioProject);

    return (
        <div className="utility-page-wrap _404">
            <div className="utility-page-content-404 w-form">
                <div className="text-center">
                    <div className="_404-title">404</div>
                    <h2>Page Not Found</h2>
                    <div>Dear friend: I am updating this tab, please come back later</div>
                    <div className="mg-top-24px"><Link
                                                    to="/"
                                                    className="link-primary w-inline-block">
                        <div className="link-primary-wrapper">
                            <div className="link-primary-text">Go Home</div>
                            <div className="link-primary-text-arrow"><span
                                className="link-primary-arrow"></span></div>
                        </div>
                    </Link></div>
                </div>
            </div>
        </div>
    );
}
