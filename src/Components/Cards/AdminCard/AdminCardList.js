import React, { Fragment } from 'react'
import Card from './AdminCard'

const AdminCardList = props =>
{
    const cards = props.cards.map((card, index) => 
    <Card key={index} name={card.name} img={card.img} info={card.info} role={card.role} username={card.username} link={card.link} type={props.type} size={props.size} svg={props.svg}/>);
    return (
        <Fragment>
            {cards}
        </Fragment>
    );
}

export default AdminCardList;