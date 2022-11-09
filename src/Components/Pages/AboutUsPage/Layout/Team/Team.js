import React from 'react'
import svg from '../../../../../Assets/symbol-defs.svg'

import avatar from '../../../../../Assets/Images/Avatar/avatar'
import CardList from '../../../../Cards/AdminCard/AdminCardList'
import Title from '../../../../Text/HeaderText'

const Team = props =>{
    
    const people = [{name: "Ludovico Fiorella", img: avatar.ludo, role: "Project Manager", info: "Project Manager", username: "ludo_fiorella", link: "https://www.instagram.com/ludo_fiorella"},
    {name: "Chiara D'Ubaldi", img: avatar.chiara, role: "Marketing", info: "Marketing, Social Media Manager", link: "https://www.instagram.com/chiaradubaldi", username: "chiaradubaldi"},
    {name: "Alessandro Chirici", img: avatar.ale, role: "Developer", info: "Mobile Developer", username: "alessandrochirici24", link: "https://www.instagram.com/alessandrochirici24"},
    {name: "Marco Morozzi", img: avatar.marco, role:"Developer", info: "FrontEnd Developer", username: "marco_morozzi_", link: "https://www.instagram.com/marco_morozzi_"},
    {name: "Matteo Giuntoni", img: avatar.matteo, role:"Developer", info: "FullStack Developer", username: "matte_giu", link: "https://www.instagram.com/matte_giu"}]    
    
    return (
        <section className="section-team u-margin-bottom-xxlarge">
            <div className="section-team__background section-team__background--1">&nbsp;</div>

            <div className="heading-primary heading-primary--blue u-margin-bottom-small">
                <Title prefix="Il nostro" title="Team di Innovatori">
                    Dietro a tutto questo ci siamo noi. 6 ragazzi, 3 paesi, e interminabili <br/>videochiamate la domenica sera. 
                    Per metà <strong>conosciuti online</strong>, è stata proprio la difficoltà nel trovarci a farci capire quanto fosse importante avere uno spazio per trovare altre persone con le quali condividere idee e progetti. 
                    <br/><br/>Trovare altri giovani <strong>come noi</strong>, e aiutarvi a dare forma alle vostre idee, dandovi uno spazio dove conoscervi, creare e crescere i vostri progetti non è solo la mission di P4U, ma anche quello che <strong>ci motiva e dà forza</strong>. 
                </Title>
            </div>
    
            <div className="section-team__list u-margin-bottom-medium">
                <CardList cards={people} svg={svg}size="large" type="yellow"/>
            </div>
                                    
            <div className="section-team__background section-team__background--2">&nbsp;</div>
        </section>
    );
}



export default Team;