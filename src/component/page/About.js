
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

export default function About() {

    const [useKey, setKey] = useState(useParams().key);

    const [usePortfolioProject, setPortfolioProject] = useRecoilState(portfolioProject);

    return (
        <div className="utility-page-wrap _404">
            <div className="utility-page-content-404 w-form">
                <div className="text-center">
                    Hello   
                </div>
                
                <div>
                  
                </div>
            </div>
        </div>
    );
}
