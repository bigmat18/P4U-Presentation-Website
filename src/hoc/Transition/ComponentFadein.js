import React, { useRef,useEffect, Fragment, useContext} from 'react'
import anime from 'animejs'
import Transition from '../../Context/TransitionContext'

const FadeIn = props =>
{
    const component = useRef(null);
    const context = useContext(Transition);

    useEffect(() => {
        if(props.state !== undefined && props.state === false) 
        {
            anime({
                targets: component.current,
                opacity: [0,1],
                easing: 'easeInOutQuint',
                duration: 700
            });
            context.state = undefined;
        }
        else component.current.style.opacity = 1;
    });

    return (
        <Fragment>
            <div style={{position: "absolute", top: 0, left:0, zIndex: "-10", height: "100vh", width: "100vw", background: props.background}}></div>
            
            <div ref={component} style={{opacity: "0"}}>
                {props.children}
            </div>
        </Fragment>
    );
}

export default FadeIn;