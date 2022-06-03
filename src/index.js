import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Container from './component/Container'
import {RecoilRoot} from "recoil";


ReactDOM.render(
    <RecoilRoot>
        <Router>
            <Switch>
                <Route path="/">
                    <Container/>
                </Route>
            </Switch>
        </Router>
    </RecoilRoot>,
    document.getElementById('root')
);
