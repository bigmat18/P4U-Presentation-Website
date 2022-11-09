import React, {useContext} from 'react'
import Footer from '../Components/Pages/Shared/Footer/CustomFooter'
import NavBar from '../Components/Pages/Shared/NavBar/NavBar'

import FadeIn from './Transition/ComponentFadein'
import Transition from '../Context/TransitionContext'

const Page = props => {
    
    const transition = useContext(Transition);
    
    return(
        <FadeIn state={transition.state} background="#E6F8FE">
            <NavBar buttons={props.nav}/>
            
            {props.children}
            <Footer buttons={props.nav}/>
        </FadeIn>
);}

export default Page;