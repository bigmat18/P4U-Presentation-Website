import React, { Fragment, useState, useRef, useEffect} from 'react'
import anime from 'animejs';

import TransitionContext from '../../Context/TransitionContext'
import history from '../../Components/Functions/history'
import './transition.scss'

const Transition = props =>
{
    const [transitioning, setTransitioning] = useState({state: false});
    const transition_component = useRef(null);
    const prevPath = useRef(undefined);

    useEffect(() => {
       
        if(transitioning.state)
        {
          transitioning.transition.function(transitioning.path);
        }

    });

    const transition = (name, path) =>
    {
      let trans, state = true;
      switch(name)
      {
        case "dark_in":
          trans = dark_in;
          break;
        case "light_in":
          trans = light_in;
          break;
        default:
          state = false;
      }
      setTransitioning({state: state, transition: trans, path: path});
    }

    const setUpTransition = (path, delay, time) =>
    {
      const doTransition = () => {  
        const pp = history.location.pathname;
        if (path === '%BACK%' && prevPath.current === undefined)
          history.push("/home");
        else history.push((path === '%BACK%') ? prevPath.current:path);
        prevPath.current = pp;
      }

      if (delay !== 0)
        setTimeout (doTransition, delay);
      else doTransition();
  
      setTimeout(()=>setTransitioning({state: false}), time);
    }
  
    const dark_in = {function: (path) =>
    {
      anime({
        targets: transition_component.current,
        d: [  
          {value: 'M0,0V496.781s90.608-143.605,425.688-141.9c314.564-3.419,210.261,314.564,562.455,314.565s315.651-285.5,600.066-285.5,331.66,181.216,331.66,181.216V0Z'},
          {value: 'M0,0V1079.819s94.027-1.71,429.107,0c227.375,3.418,211.971,0,564.164,0s340.379-1.709,569.293,0,357.3,0,357.3,0V0Z'}],
        fill: ["#777a96","#4E5169"],
        easing: 'easeInOutQuint',
        duration: 1000,
      });
      setUpTransition(path, 1000, 1100);
    }, 
    element:  
        <svg className="transition__svg" height="100%" width="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMinYMax   slice">
          <path ref={transition_component} className="transition__svg__path" d="M0,0H0S177.589-3.419,435.908,0C728.248,0,675.25-1.71,998.363,0s364.143-1.71,608.614,0,312.892,0,312.892,0H0Z" fill="#6a6e8f"></path>
        </svg>
    };   
    
    const light_in = {function: (path) =>
    {
        anime({
        targets: transition_component.current,
        d: [  
            {value: 'M0,0V496.781s90.608-143.605,425.688-141.9c314.564-3.419,210.261,314.564,562.455,314.565s315.651-285.5,600.066-285.5,331.66,181.216,331.66,181.216V0Z'},
            {value: 'M0,0V1079.819s94.027-1.71,429.107,0c227.375,3.418,211.971,0,564.164,0s340.379-1.709,569.293,0,357.3,0,357.3,0V0Z'}],
        fill: ["#A4D3E6","#E6F8FE"],
        easing: 'easeInOutQuint',
        duration: 1000,
        });
        setUpTransition(path, 1000, 1150);
    }, 
    element:  
        <svg className="transition__svg" height="100%" width="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMinYMax slice">
          <path ref={transition_component} className="transition__svg__path" d="M0,0H0S177.589-3.419,435.908,0C728.248,0,675.25-1.71,998.363,0s364.143-1.71,608.614,0,312.892,0,312.892,0H0Z" fill="#A4D3E6"></path>
        </svg>
    };    

    return(
        <Fragment>
            {transitioning.state && transitioning.transition.element}
            <TransitionContext.Provider value={{start: transition, state: transitioning.state}}>
                  {props.children}
            </TransitionContext.Provider>
        </Fragment>
    );
}

export default Transition;