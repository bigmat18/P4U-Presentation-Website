import React, {Fragment, useContext} from 'react'
import image from '../../../../../Assets/Images/illustrazione_home.png'
import logo from '../../../../../Assets/Icon/logo_razzo3.png'
import Transition from '../../../../../Context/TransitionContext'


const Header = props =>
{
    const transition = useContext(Transition);

    return (
        <Fragment>
        <header className="header header--1">
            <div className="header__illustration">
                <img src={image} alt="header_image" className="header__img"/>
            </div>
            <div className="header__content">
                <figure className="header__logo">
                    <img src={logo} alt="Logo" className="header__figure"/>
                    <figcaption className="header__caption">Project4U</figcaption>
                </figure>
                <h1 className="header__title">
                    Porta la <span className="header__title--right">tua idea</span><br/>
                    In alto<br/><span className="header__title--left">insieme</span> a noi
                </h1>
                <button className="button-round button-round--shadow 
                button-round--ultra button-round--yellow"  onClick={() => transition.start("dark_in", "/Waiting-List")}> Mettiti in lista di attesa</button>
            </div>
        </header>
        </Fragment>

    );
}
export default Header;