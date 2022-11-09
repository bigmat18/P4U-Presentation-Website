import React from 'react'
import rocket from '../../../../../Assets/Icon/rocket.png'

import CardList from '../../../../Cards/TextCard/TextCardList'
import Title from '../../../../Text/HeaderText'

const Goals = props => {

    const elements = ["Community di innovatori: per confrontarsi, imparare e crescere insieme",
    "Rendere la nostra piattaforma più personalizzabile",
    "Dare la possibilità alla community di conoscerci e lavorare con noi",
    "Aiutare le persone a trovare mentori "];

    return(
        <section className="section-goals u-margin-bottom-xlarge">
            <div className="heading-primary heading-primary--blue u-margin-bottom-large">
                <Title prefix="I nostri" title="Obbiettivi" text=" Amiamo le sfide. E amiamo porci obbiettivi ambiziosi. Questi sono alcuni dei nostri obbiettivi per il futuro della nostra app e piattaforma"/>
            </div>
            <CardList img={rocket} cards={elements}/>
        </section>
    );
}
export default Goals;