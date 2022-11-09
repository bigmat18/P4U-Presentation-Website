import React, { useContext } from 'react'
import Transition from '../../../../Context/TransitionContext'
import svg from '../../../../Assets/symbol-defs.svg'

import Title from '../../../Text/HeaderText'


const Header = props =>
{
    const transition = useContext(Transition)
    return(
        <header className="header header--2">
            <div className="header__content animated-bottom">
                <div className="heading-primary">
                    <Title prefix="Entra nella" title="Community" text="Unisciti anche tu alla nostra esclusiva Community, per ampliare ancora di più il tuo orizzonte e usufruire al meglio di tutto ciò che P4U ha da offrirti. Solo insieme si può andare lontano!"/>
                </div>
                <div className="button-group button-group--center">
                    <div onClick={(e) => transition.start("dark_in", "waiting-list")} className="button-text button-text--center button-text--yellow">
                            <button className="button-text__btn button-text__btn--large">
                           Mettiti in lista di attesa!
                            </button>
                        <hr/>
                        <svg className="button-text__icon">
                            <use xlinkHref={`${svg}#icon-arrow_bottom`}></use>
                        </svg>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;