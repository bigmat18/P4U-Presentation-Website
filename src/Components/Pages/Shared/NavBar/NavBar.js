import React, {Fragment, useContext, useRef} from 'react'
import {NavLink} from 'react-router-dom';

import TransitionContext from '../../../../Context/TransitionContext'
import Logo from './Logo';

const NavBar = props => {

    const transition = useContext (TransitionContext);
    const checkBox = useRef(null);

    const toggle = (e, i) =>
    {
        checkBox.current.checked = false;
    }
    
    let buttons = props.buttons.map((button, i) => {
        return <li key={i} className="navigation__item"> <NavLink to={button.path}  className="navigation__link" activeClassName="navigation__link--active" onClick={(e) => toggle(e, i)}>{button.name}</NavLink></li>
    })

    buttons = <ul className="navigation__list">{buttons}</ul>;

    return(
        <div className="navigation">
            <Logo/>

          
     
            <input ref={checkBox} type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
            <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>
            <div className="navigation__background">&nbsp;</div>
            
            <nav className="navigation__nav">
                {buttons}
                <div className="button-group">
                    <button className="button-round button-round--normal button-round--blue" onClick={()=>transition.start("dark_in", "waiting-list")}>Log In</button>
                    <button className="button-round button-round--normal button-round--pink" onClick={()=>transition.start("dark_in", "waiting-list")}>Sign In</button>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;

