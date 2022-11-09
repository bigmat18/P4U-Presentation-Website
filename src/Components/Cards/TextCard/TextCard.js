import React from 'react'

const TextCard = props =>
(
    <li className="list__item">
        <img src={props.img} alt="ListIcon" className="list__logo"/>
        <p className="list__text">
        {props.text}
        </p>
    </li>
);

export default TextCard;