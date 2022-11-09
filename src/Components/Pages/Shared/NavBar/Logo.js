import React from 'react'
import img from '../../../../Assets/Icon/logo_icon.png';

const Logo = props =>
(
    <figure className="navigation__logo">
        <img src={img} alt="Logo" className="navigation__image"/>
        <figcaption className="navigation__caption">
            <span className="navigation__caption--1">Trova il tuo team</span>
            <span className="navigation__caption--2">Sviluppa la tua idea</span>
            <span className="navigation__caption--3">Preparati al decollo</span>
        </figcaption>
    </figure>
);

export default Logo;