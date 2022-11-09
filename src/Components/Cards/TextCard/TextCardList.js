import React from 'react'
import Card from './TextCard'

const TextCardList = props =>
{
    const cards = props.cards.map ((text, index) => <Card key={index} text={text} img={props.img}/>)
    return(
        <ul className="list">
            {cards}
        </ul>
    );
}

export default TextCardList;