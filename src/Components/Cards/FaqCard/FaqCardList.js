import React, { useState } from 'react'
import Card from './FaqCard'

const FaqCardList = props => {
    
    const [checked, setChecked] = useState(null);
    const check = id => (checked !== null && id === checked) ? setChecked(null) : setChecked(id);

    const elements = props.elements.map ((card, index) => <Card key={index} id={index} title={card.title} desc={card.description} checked={(checked !== null && checked === index) ? true:false} check={check}/>)
    
    return (
        <div className="section-faq__list u-margin-top-medium">
            {elements}
        </div>
    );
}

export default FaqCardList;