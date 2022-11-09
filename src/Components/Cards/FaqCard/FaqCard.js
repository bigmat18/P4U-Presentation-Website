import React from 'react'
import svg from '../../../Assets/symbol-defs.svg'

const FaqCard = props => (
        <div className="faq-item u-left-text u-margin-bottom-large">
            <h3 className="faq-item__title">{props.title}</h3>
            <input type="radio" className="faq-item__checkbox" readOnly checked={props.checked} id={"toggle" + props.id}/>
            <label htmlFor={"toggle" + props.id} className="faq-item__button" onClick={() => props.check(props.id)}>
                <svg className="faq-item__icon">
                    <use xlinkHref={`${svg}#icon-arrow_right`}></use>
                </svg>
            </label>
            <p className="faq-item__description">{props.desc}</p>
        </div>   
);
export default FaqCard;