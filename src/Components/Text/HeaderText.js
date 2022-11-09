import React, { Fragment } from 'react'

const HeaderText = props =>
(
    <Fragment>
         <h1 className="heading-primary__title u-center-text">
            {props.prefix !== undefined && <span className="heading-primary__title--sub">{props.prefix}<br/></span>}
            <span className="heading-primary__title--main">{props.title}</span>
        </h1>
        <p className="heading-primary__text heading-primary__text--large u-center-text">
            {(props.text === undefined) ? props.children:props.text}
        </p>
    </Fragment>
);

export default HeaderText;