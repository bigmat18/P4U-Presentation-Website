import React from 'react'

const ArrowText = props => (
    <div className="arrow">
        <div className="arrow__line">&nbsp;</div>
        <p className="arrow__title">{props.children}</p>
    </div>
);

export default ArrowText;