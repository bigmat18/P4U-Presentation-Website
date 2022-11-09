import React, { useContext, useState } from 'react'
import scrollDown from '../../../../Functions/scrollDown'
import WindowSizeContext from '../../../../../Context/WindowSizeContext'
import Popup from '../../../../Cards/TextPopup/Popup'

import svg from '../../../../../Assets/symbol-defs.svg'

const Service = props => {
    const [popup, setPoup] = useState(null);
    const size = useContext(WindowSizeContext);
    
    const back = () => setPoup(null);

    const desc = [{title:"CREA IL TUO TEAM", one:"Sfoglia profili e cerca persone per creare il tuo team", two: "Seleziona i settori e le competenze che stai cercando nei i membri del tuo futuro team", three:"Organizza un primo incontro per conoscervi e vedere se volete viaggiare insieme"},
    {title:"SCOPRI NUOVI PROGETTI", one:"Sfoglia i progetti per trovare la tua prossima avventura", two:"Cerca progetti e team nei quali cercano persone con le tue competenze", three:"Organizza un primo incontro per vedere se è il progetto giusto per te (e vuoi condividere la loro destinazione)"},
    {title:"GESTISCI I TUOI PROGETTI", one:"Questa è la vostra sala di comando: gestisci il tuo progetto con il tuo team al completo!", two: "Dividetevi i compiti all’interno del team e rimanete facilmente in contatto tra di voi", three: "Pieno controllo grazie alla visione d’insieme di tutti le diverse aree di lavoro"},
    {title:"CONTINUA A IMPARARE CON GLI ARTICOLI", one:"Impara con gli articoli provenienti da diverse galassie, dalla programmazione, all’economia e marketing", two: "Trai vantaggio anche dalle conoscenze esclusive della community", three: "Condividi quello le tue competenze con la community e sviluppa il tuo profilo scrivendo i tuoi articoli"}]

    return(
    <section id="service" className="section-service u-margin-bottom-xlarge">
        {popup !== null && popup}
        <div className="heading-secondary u-center-text u-margin-bottom-large">
            <h2 className="heading-secondary--title heading-secondary--animated">Ti offriamo un servizio a 360°</h2>
            <hr/>
        </div>

        <div className="section-service__group u-margin-top-large">
            <div  className="service" onClick={() => {(size.width > 1000) ? scrollDown("search_person", -100) : setPoup(<Popup info={desc[0]} back={back}/>)}}>
                <div className="service__title u-center-text">
                    <h2 className="heading-tertiary">Cerca Persone</h2>
                </div>

                <div className="service__content">
                    <svg className="service__img service__img--user">
                        <use xlinkHref={`${svg}#icon-user`}></use>
                    </svg>
                    <svg className="service__img service__img--search">
                        <use xlinkHref={`${svg}#icon-search`}></use>
                    </svg>
                </div>
            </div>

            <div className="service" onClick={() => (size.width > 1000) ? scrollDown("search_project", -100) : setPoup(<Popup info={desc[1]} back={back}/>)}>
                <div className="service__title u-center-text">
                    <h2 className="heading-tertiary">Cerca Progetti</h2>
                </div>

                <div className="service__content">
                    <svg className="service__img service__img--users">
                        <use xlinkHref={`${svg}#icon-users`}></use>
                    </svg>
                    <svg className="service__img service__img--search">
                        <use xlinkHref={`${svg}#icon-search`}></use>
                    </svg>
                </div>
            </div>

            <div className="service" onClick={() => {(size.width > 1000) ? scrollDown("project_managment", -100) : setPoup(<Popup info={desc[2]} back={back}/>)}}>
                <div className="service__title u-center-text">
                    <h2 className="heading-tertiary">Gestione Progetti</h2>
                </div>

                <div className="service__content">
                    <svg className="service__img service__img--user-tie">
                        <use xlinkHref={`${svg}#icon-user-tie`}></use>
                    </svg>
                    <svg className="service__img service__img--cogs">
                        <use xlinkHref={`${svg}#icon-cogs`}></use>     
                    </svg>
                </div>
            </div>

            <div className="service" onClick={() => {(size.width > 1000) ? scrollDown("article", -100) : setPoup(<Popup info={desc[3]} back={back}/>)}}>
                
                    <div className="service__title u-center-text">
                        <h2 className="heading-tertiary">Articoli e News</h2>
                    </div>

                    <div className="service__content">
                        <svg className="service__img service__img--book">
                            <use xlinkHref={`${svg}#icon-book`}></use>    
                        </svg>
                       
                        <svg className="service__img service__img--pencil">
                            <use xlinkHref={`${svg}#icon-pencil`}></use>    
                        </svg>
                    </div>
            </div>

        </div>
    </section> );
    
}

export default Service;