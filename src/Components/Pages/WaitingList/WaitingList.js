import React, {useContext, useRef, useState} from 'react'
import axios from 'axios'

import svg from '../../../Assets/symbol-defs.svg'
import Transition from '../../../Context/TransitionContext'
import FadeIn from '../../../hoc/Transition/ComponentFadein'


const WaitingList = props => {

    const  transition = useContext(Transition)

    const [sent, setSent] = useState(true)
    const [error, setError] = useState(0)

    const email = useRef(null);
    const name = useRef(null);
    const surname = useRef(null);
    const label = useRef(null);

    const sendEmail = () =>
    {
        const data = {email: email.current.value, first_name: name.current.value, last_name: surname.current.value};
        if(data.email === '' || data.first_name === '' || data.last_name === '') return;
        const pattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(data.email.match(pattern) === null) return;
       
        axios.post('email/', data, {
            headers: {
              "X-Api-Key": 'yRFU7311.cbSkgpJCMrMs9hnr7itWwX2dFCeixIrN',
            }
          })
        .then((response) => {
            if(sent !== undefined) setSent(false);
        })
        .catch((error) => {
             if(error.response.status && error.response.status == 400) setError(2)
             else setError(1)
        });
    }

    return(
        <FadeIn state={transition.state} background="#4E5169">
            <div className="section-login__background">&nbsp;</div>
            <div className="section-login"> 
            {(sent) ? 
                <div className="section-login__form"  style={{background: "rgba(78, 81, 105, 0.8)"}}>
                    <div className="form">
                        <div className="heading-secondary u-center-text section-login__title" style={{marginBottom: "3vh"}}>
                            <h2 style={{color: "white"}}className="heading-secondary--title">METTITI IN LISTA DI ATTESA</h2>
                        </div>

                        <div className="form__group">
                            <svg className="form__icon">
                                <use xlinkHref={`${svg}#icon-email`}></use>
                            </svg>
                            <input ref={email} type="email" placeholder="Email" id="email" className="form__input form__input--full" required/>
                            <label ref={label} htmlFor="email" className="form__label form__label--white">Email</label>
                        </div>

                        <div className="form__container form__container--full">
                            <div className="form__group--half">
                                <svg className="form__icon">
                                    <use xlinkHref={`${svg}#icon-person-outline`}></use>
                                </svg>
                                <input ref={name} type="text" placeholder="Nome" id="first_name" className="form__input form__input--full" required/>
                                <label htmlFor="first_name" className="form__label form__label--white">Nome</label>
                            </div>

                            <div className="form__group--half">
                                <svg className="form__icon">
                                    <use xlinkHref={`${svg}#icon-person-outline`}></use>
                                </svg>
                                <input ref={surname} type="text" placeholder="Cognome" id="second_name" className="form__input form__input--full" required/>
                                <label htmlFor="second_name" className="form__label form__label--white">Cognome</label>
                            </div>
                        </div>

                        {error === 1 && <center> <h2 style={{color: "#FF9494", marginBottom: "2.5rem", marginTop:"2.5rem"}}>C'è stato un errore, riprova piu tardi!</h2> </center>}
                        {error === 2 && <center> <h2 style={{color: "#FF9494", marginBottom: "2.5rem", marginTop:"2.5rem"}}>Questa email esiste già.</h2> </center>}
                        
                        <div className="section-login__button">
                            <button style={{marginBottom: 0, marginRight: "2rem"}} className="button-round button-round--big button-round--blue" onClick={() => sendEmail()}>Iscriviti</button>
                            <button className="button-round button-round--big" onClick={() => transition.start("light_in", "%BACK%")}>Indietro</button>
                        </div> 
                        
                    </div>
                </div>
            : 
            <div className="section-login__form" style={{background: "rgba(78, 81, 105, 0.8)"}}>
                <div className="form">
                    <div className="heading-secondary u-center-text u-margin-bottom-medium">
                        <h2 style={{color: "white"}} className="heading-secondary--title">Ti avviseremo quando saremo pronti per il lancio!</h2>
                    </div> 
                    <div className="button-group u-margin-top-medium" style={{justifyContent: "center"}}>
                        <button className="button-round button-round--big button-round--blue" onClick={() => transition.start("light_in", "%BACK%")}>Indietro</button>
                    </div>
                </div>
            </div>}

            </div>
        </FadeIn>
    );
}

export default WaitingList;