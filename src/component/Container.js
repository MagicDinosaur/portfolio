import {useRecoilState} from "recoil";
import React, {useEffect} from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

import Home from './page/Home'
import Projects from './page/Projects'
import Project from './page/Project'
import NotFound from "./page/NotFound";
import About from "./page/About";
import ScrollToTop from "./ScrollToTop";

export default function Container() {

    return (
        <div className="page-wrapper">
            <div data-collapse="medium" data-animation="default" data-duration="400"
                 data-w-id="58db7844-5919-d71b-dd74-2323ed8dffe9" data-easing="ease" data-easing2="ease" role="banner"
                 className="header w-nav"  >
                <div className="container-header" >
                    <div className="split-content header-left">
                        <nav role="navigation" className="nav-menu w-nav-menu">
                            <ul role="list" className="header-navigation">
                                <li className="nav-item-wrapper"><a href="/"
                                                                    aria-current="page"
                                                                    className="nav-link w--current">Home</a>
                                </li>
                                <li className="nav-item-wrapper"><Link to="/projects" className="nav-link">Projects</Link>
                                </li>
                                <li className="nav-item-wrapper"><Link to="/about" className="nav-link"> More Info</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="split-content header-right">
                        <div className="menu-button w-nav-button">
                            <div className="menu-button-wrapper">
                                <div className="menu-button-icon">
                                    <div className="menu-line-top"></div>
                                    <div className="menu-line-middle"></div>
                                    <div className="menu-line-bottom"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-default w-container">
                    <div className="divider"></div>
                </div>
            </div>

            <ScrollToTop/>

            <Switch>
                <Route path="/projects">
                    <Projects/>
                </Route>
                <Route path="/project/:key">
                    <Project/>
                </Route>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/about">
                    <NotFound/>
                </Route>
            </Switch>

        </div>
    );
}
