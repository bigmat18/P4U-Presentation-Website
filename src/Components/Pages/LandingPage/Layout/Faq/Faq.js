import React, { Fragment } from 'react'
import FaqList from '../../../../Cards/FaqCard/FaqCardList'
import { Link } from 'react-router-dom'

const Faq = props => {
    const elements = [{id: "1", title: "Come funziona la community?", description: "Una volta che l’app sarà disponibile, per entrare a far parte della community avrai bisogno di verificare il tuo account. Dopodiché avrai accesso non solo a più opportunità e opzioni, ma anche alla sezione idee, dove potrai dare e chiedere feedback ad altri utenti."},
                    {id: "2", title: "Qual è lo scopo della nostra community?", description: <Fragment>La community è il centro di Project4U. Grazie alla community sarai in grado di confrontarti e imparare da altre persone con conoscenze e competenze diverse, ma con la stessa visione. <br/><strong>Per saperne di più, visita la nostra pagina <Link className="link link--blue link--small" to="/Community">Community</Link></strong></Fragment>},
                    {id: "3", title: "L’app sarà disponibile su tutti i cellulari?", description: "L’app sarà disponibile sia su iOS che su Android, e sarà gratuita."},
                    {id: "4", title: "Posso cercare e offrire lavoro sulla vostra piattaforma?", description: "Al momento no. La piattaforma è pensata per sviluppare idee e progetti in squadra, prima o a lato del mondo lavorativo."}]; 
    return(
    <section className="section-faq" id="faq">
            <div className="heading-secondary u-center-text u-margin-bottom-large">
                <h2 className="heading-secondary--title heading-secondary--animated">FAQ</h2>
            </div>
            <FaqList elements={elements}/>
        </section>
    );
}
export default Faq;