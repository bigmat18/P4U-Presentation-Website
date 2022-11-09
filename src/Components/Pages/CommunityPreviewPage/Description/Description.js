import React from 'react'
import come from '../../../../Assets/Images/come.png'
import dove from '../../../../Assets/Images/dove.png'
import perche from '../../../../Assets/Images/perche.png'

import Arrow from '../../../Text/ArrowText'
import Card from '../../../Cards/ImageCard/ImageCard'


const Description = props => (

    <section className="section-presentation u-margin-bottom-xlarge">
        
        <Card img={dove} title="QUAL È LA DESTINAZIONE?" text=" Lamentarsi e fare nulla al riguardo, è inutile. E la nostra community lo sa. Con questa community ti unirai e conoscerai un gruppo di persone, fonti di idee, con le quali confrontarti ed dalle quali trarre ispirazione."/>
        
        <Arrow>Come?</Arrow>
        
        <Card reverse img={come} title="COME CI ARRIVIAMO?" text="All’inizio nella sezione community avrai la possibilità di proporre idee per migliorare e sviluppare al meglio P4U, poi stiamo già lavorando per dare la possibilità a chiunque di postare le loro idee e ricevere il feedback dalla community stessa."/>
        
        <Arrow>Perchè?</Arrow>
        
        <Card img={perche} title="PERCHÉ DOVRESTI ENTRARE?">
            È un’occasione unica per conoscere altre persone con la tua stessa visione e la stessa voglia di prendere il controllo della loro vita, e non lasciare a niente e nessun altro di definire il loro viaggio. Cosa aspetti? Non essere timido, abbiamo bisogno di tutti per rivoluzionare il nostro futuro!
            <br/><br/>(Ah, l’abbiamo detto che è gratis?)
        </Card>
    </section>

);

export default Description;