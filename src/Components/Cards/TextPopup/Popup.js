import React, { useEffect } from 'react'
import anime from 'animejs'


const Popup = props => {
    const ref = React.useRef(null)
    useEffect(()=> anime({
        targets: ref.current,
        opacity: [0,1],
        easing: 'easeInOutQuint',
        duration: 900}),[]);
    return (
        <div ref={ref} className="popup" style={{opacity: 0}} id="popup-1">
            <div className="popup__box">
                <div className="heading-secondary u-margin-top-small u-center-text">
                    <h2 className="heading-secondary--title u-margin-bottom-small" style={{fontSize: "2.5vh", fontWeight:"650"}}>{props.info.title}</h2>
                    <p className="heading-secondary--text  popup__text" style={{fontSize: "2vh"}}>{props.info.one}</p>
                    <p className="heading-secondary--text  popup__text" style={{fontSize: "2vh"}}>{props.info.two}</p>
                    <p className="heading-secondary--text  popup__text" style={{fontSize: "2vh"}}>{props.info.three}</p>
                </div>
                <div style={{marginBottom: "3vh", display: "flex", justifyContent: "center"}}>
                    <button className="button-round button-round--big button-round--blue" style={{fontSize: "3vh"}} onClick={() => props.back()}>Indietro</button>
                </div>
            </div>
        </div>
    );
}

export default Popup;