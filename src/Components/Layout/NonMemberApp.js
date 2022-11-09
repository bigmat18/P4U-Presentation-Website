import React from 'react'

import {Router, Switch, Route, Redirect} from "react-router-dom"
import history from '../Functions/history'
import ScrollToTop from '../../hoc/ScrollToTop'
import Page from '../../hoc/NavFooterPage'

import LandingPage from '../Pages/LandingPage/LandingPage'
import AboutUs from '../Pages/AboutUsPage/AboutUs'
import CommunityPreview from '../Pages/CommunityPreviewPage/CommunityPreview'
import WaitingList from '../Pages/WaitingList/WaitingList'
import NotFound from '../Pages/NoPageFound/NoPageFound'

//<ScrollToTop/>
const NonMemberApp = props =>
{
    const navButtons = [{name: "Home", path: "/Home"}, {name: "About", path: "/About"}, {name: "Community", path: "/Community"}];

    return(
        <Router history={history}>
            
            <ScrollToTop/>
            <Switch>
                    <Route exact path="/waiting-list" component={WaitingList}/>
                    <Route exact path="/Home"> <Page nav={navButtons}><LandingPage/></Page></Route>
                    <Route exact path="/Community"> <Page nav={navButtons}><CommunityPreview/></Page></Route>
                    <Route exact path="/About"> <Page nav={navButtons}><AboutUs/></Page></Route>
                    <Route exact path="/"> <Redirect to="/Home"/></Route>
                    <Route component={NotFound}/> 
            </Switch>
        </Router>
    );
}

export default NonMemberApp;