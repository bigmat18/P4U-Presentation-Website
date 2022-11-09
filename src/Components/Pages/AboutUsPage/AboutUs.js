import React from 'react'
import Fragment from '../../../hoc/Fragment';

import Header from './Layout/Header/Header.js'
import Mission from './Layout/Mission/Mission';
import Team from './Layout/Team/Team';
import Goals from './Layout/Goals/Goals';

const AboutUs = props =>
{
    return(
        <Fragment>
            <Header/>
            <main className="about-main">
                <Mission/>
                <Team/>
                <Goals/>
            </main>
        </Fragment>
    );
}

export default AboutUs; 