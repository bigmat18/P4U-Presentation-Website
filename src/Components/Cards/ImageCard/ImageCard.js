import React from 'react'

const ImageCard = props => (
    <div className={"community-item " +((props.reverse === undefined) ? "animated-right":"community-item--reverse animated-left")}>
        <div className="community-item__figure">
            <img src={props.img} alt="ImageDescription" className="community-item__img"/>
        </div>
        <div className="community-item__content">
            <h3 className="community-item__title">
            {props.title}
            </h3>

            <p className="community-item__body">
                {(props.text === undefined) ? props.children:props.text}
            </p>
        </div>
    </div>
);

export default ImageCard;