import React from 'react'
import Title from '../../../../Text/HeaderText'

const Header = props => (
<header className="header header--3">
    <div className="header__content">
        <div className="heading-primary animated-bottom">
            <Title prefix="La nostra" title="Vision">
                Sappiamo tutti che i giovani in Italia vengono spesso sottovalutati, dimenticati, e certamente lasciati
                senza grandi speranze per il loro futuro. Ma sappiamo che la verità è spesso un’altra: tra i giovani
                “fannulloni” ci siamo anche noi, persone come te, pieni di idee, di voglia di fare, ambiziosi e
                sognatori.
                <br /><br /><strong>Ma da dove iniziare?</strong>
                <br />Poter seguire un’idea, trasformarla in un progetto concreto, quando non si hanno abbastanza
                conoscenze e competenze è una vera sfida.
                <br /> <strong>Serviva una soluzione. Così ci siamo dati da fare.</strong>
            </Title>
        </div>
    </div>
</header>
);

export default Header;