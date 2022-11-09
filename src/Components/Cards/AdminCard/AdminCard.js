import React from 'react'

const AdminCard = props => {
    
    let style = "admin-card";
    if (props.size !== undefined) style +=" admin-card--" + props.size;
    if (props.type !== undefined) style += " admin-card--" + props.type;
    
    return (
        <div className={style}>
            <figure className="admin-card__avatar">
                <img src={props.img} alt="Avatar" className="admin-card__image"/>
                <figcaption className="admin-card__caption u-center-text">{props.role}</figcaption>
            </figure>
            <div className="admin-card__content u-center-text">
                <p className="admin-card__name">{props.name}</p>
                <hr/>
                <p className="admin-card__intro">{props.info}</p>
            </div>
            <div className="admin-card__link">
                <svg className="admin-card__icon">
                    <use xlinkHref={`${props.svg}#icon-instagram`}></use>
                </svg>
                <a href={props.link} className="admin-card__nickname">{props.username}</a>
            </div>
        </div>
    );
}
export default AdminCard;