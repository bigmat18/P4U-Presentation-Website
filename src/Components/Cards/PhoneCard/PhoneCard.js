import React from 'react'

const PhoneCard = props => {
    return (
        <div id={props.id} className={"overview-item " + ((props.reverse !== undefined) ? "overview-item--reverse animated-left" : "animated-right")}>
            <div className="overview-item__presentation">
                <div className="overview-item__phone">
                    <video className="overview-item__video" autoPlay muted loop>
                        {props.webm !== undefined && <source src={props.webm} type="video/webm"/>}
                        <source src={props.mp4} type="video/mp4"/>
                        Il tuo browser non è supportato!
                    </video>
                    <img src={props.overlay} alt="overlay" className="overview-item__overlay"/>
                    <div className={"overview-item__background " + ((props.reverse !== undefined) ?  "overview-item__background--blue":"overview-item__background--pink")}>&nbsp;</div>
                </div>
            </div>
    
            <div className="overview-item__content">
                <h3 className={"overview-item__title " + ((props.reverse !== undefined) ? "u-left-text":"u-right-text")}>
                    {props.title}
                </h3>
                <div className="overview-item__body">
                    <ul className="overview-item__list">
                        <li className="overview-item__item">
                            <img src={props.img} alt="listImg" className="overview-item__img"/>
                            <p className={"overview-item__text " + ((props.reverse !== undefined) ? "u-left-text": "u-right-text")}>
                            {props.one}
                            </p>
                        </li>
                        
                        <li className="overview-item__item">
                            <img src={props.img} alt="listImg2" className="overview-item__img"/>
                            <p className={"overview-item__text " + ((props.reverse !== undefined) ? "u-left-text": "u-right-text")}>
                            {props.two}
                            </p>
                        </li>
    
                        <li className="overview-item__item">
                            <img src={props.img} alt="listImg3" className="overview-item__img"/>
                            <p className={"overview-item__text " + ((props.reverse !== undefined) ? "u-left-text": "u-right-text")}>
                            {props.three}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PhoneCard;