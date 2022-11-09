import React, { Fragment } from 'react'
import Description from './Description/Description'

import Header from './Header/Header'

const CommunityPreview = props => (

    <Fragment>
        <Header/>
        <main className="community-main">
            <Description/>
        
        </main>
    </Fragment>
);

export default CommunityPreview;