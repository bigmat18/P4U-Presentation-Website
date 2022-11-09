import React, { useContext } from 'react'
import style from './NoPageFound.module.scss'
import Transition from '../../../Context/TransitionContext'
const NoPageFound = props =>
{
    const transition = useContext(Transition);
    return (   
        <div className={style.center}>
            <span className={style.error}>
                <p className="heading-primary__title--main u-margin-top-xsmall u-center-text heading-primary--white">404</p>
                <p className="heading-primary__text heading-primary--white heading-primary__text--xlarge u-center-text">Questa pagina non è disponibile.</p>
                <div className="button-group u-margin-top-xsmall u-margin-bottom-xsmall" style={{justifyContent: "center"}}>
                    <button className="button-round button-round--normal button-round--blue" onClick={() => transition.start("light_in", "/Home")}>Home</button>
                    </div>
            </span>
        </div>
    );
}


export default NoPageFound;