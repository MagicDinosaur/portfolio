import {useRecoilState} from "recoil";
import React, {useEffect} from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

import Home from './page/Home'
import Projects from './page/Projects'
import Project from './page/Project'
import NotFound from "./page/NotFound";
import About from "./page/About";
import ScrollToTop from "./ScrollToTop";
import { Menu, Dropdown } from 'antd';
import {
MoreOutlined
} from '@ant-design/icons';
export default function Container() {
    const menu = (


        <Menu>
            <Menu.Item key="0">
                <a href="/"
                    aria-current="page"
                    className="nav-link w--current">Home</a>
            </Menu.Item>
            <Menu.Item key="1">
                <Link to="/projects" className="nav-link">Projects</Link>
            </Menu.Item>
        
            <Menu.Item key="3">
                <Link to="/about" className="nav-link"> More Info</Link>
            </Menu.Item>
        </Menu>

     
    );
    return (
        <div className="page-wrapper">
            <div data-collapse="medium" data-animation="default" data-duration="400"
                 data-w-id="58db7844-5919-d71b-dd74-2323ed8dffe9" data-easing="ease" data-easing2="ease" role="banner"
                 className="header w-nav"  >
                <div className="container-header" >
                    <div className="split-content header-left"
                style={{ display: "flex" }}
                    >
                        <h3
                            style={{ marginTop: "10px" }}
                        >Duc Pham</h3>
                        <nav role="navigation" className="nav-menu w-nav-menu">
                            <ul role="list" className="header-navigation">
                                <li className="nav-item-wrapper"> 
                        
                                </li>
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
                        <div className="custom-dropdown">

                                    <Dropdown overlay={menu} trigger={['click']}>
                                        <a className="ant-dropdown-link" href="#">
                                             <MoreOutlined 
                                    style ={{
                                        fontSize: "30px",
                                        fontWeight: "bold",
                                    }}/>
                                        </a>
                                    </Dropdown>


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
