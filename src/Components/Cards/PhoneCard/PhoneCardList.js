import React, { Fragment } from 'react'
import Card from './PhoneCard'

const PhoneCardList = props =>
{
    const cards = props.cards.map((card, index) => 
    <Card key={index} overlay={props.overlay} img={props.img} {...index%2 !== 0 && {reverse: "true"}}
    title={card.title} id={card.id} one={card.one} two={card.two} three={card.three} mp4={card.mp4} webm={card.webm}/>);

    return(
        <Fragment>
            {cards}
        </Fragment>
    );
}

export default PhoneCardList;