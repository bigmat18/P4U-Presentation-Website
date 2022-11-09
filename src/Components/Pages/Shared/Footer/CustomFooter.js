import React, {useContext} from 'react';

import transitionContext from '../../../../Context/TransitionContext'

import Logo from '../../../../Assets/Icon/logo_razzo4.png'
import svg from '../../../../Assets/symbol-defs.svg'

import { Link } from 'react-router-dom';

const CustomFooter = props => {
    const transition = useContext(transitionContext);
    
    let navElements = props.buttons.map((element, index) => <li key={index} className="footer__item"><Link to={element.path}className="link link--yellow link--normal">{element.name}</Link></li>);
    navElements = <ul className="footer__list">{navElements}</ul>

    return (
    <footer className="footer">
        <div className="button-group">
                <button className="button-round button-round--shadow 
                button-round--ultra button-round--yellow" onClick={() => transition.start("dark_in","waiting-list")}>Mettiti in lista di attesa</button>
        </div>
        <div className="footer__logo-box">
            <img src={Logo} alt="Logo" className="footer__logo"/>
        </div>
        <div className="footer__content">
            <div className="footer__navigation u-margin-bottom-small">
                <h4 className="footer__title u-center-text">I nostri Servizi</h4>
                {navElements}
                <div className="footer__social u-margin-top-medium">
                    <a href="https://www.instagram.com/project4uu/" className="footer__icon-box">
                        <svg className="footer__icon">
                            <use xlinkHref={`${svg}#icon-instagram`}></use>
                        </svg>
                    </a>
                    <a href="https://www.facebook.com/project4u.it" className="footer__icon-box">
                        <svg className="footer__icon">
                            <use xlinkHref={`${svg}#icon-facebook`}></use>
                        </svg>
                    </a>

                    <a href="https://www.linkedin.com/company/project4uu" className="footer__icon-box">
                        <svg className="footer__icon">
                            <use xlinkHref={`${svg}#icon-linkedin2`}></use>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="footer__copyright">
                <h4 className="footer__title u-center-text">Copyright</h4>
                <p className="footer__text u-center-text">
                    &copy; Copyright 2021, Project4u. All Rights Reseved.
                </p>
            </div>
        </div>
    </footer>
    );
}

export default CustomFooter;