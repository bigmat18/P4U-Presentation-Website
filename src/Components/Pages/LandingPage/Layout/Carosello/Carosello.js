import React from "react";
import svg from "../../../../../Assets/symbol-defs.svg";
import { Link } from "react-router-dom";

import avatar from "../../../../../Assets/Images/Avatar/avatar";
import CardList from "../../../../Cards/AdminCard/AdminCardList";

const people = [
  {
    name: "Ludovico Fiorella",
    img: avatar.ludo,
    role: "Project Manager",
    info: "Project Manager",
    username: "ludo_fiorella",
    link: "https://www.instagram.com/ludo_fiorella",
  },
  {
    name: "Chiara D'Ubaldi",
    img: avatar.chiara,
    role: "Marketing",
    info: "Marketing, Social Media Manager",
    link: "https://www.instagram.com/chiaradubaldi",
    username: "chiaradubaldi",
  },
  {
    name: "Alessandro Chirici",
    img: avatar.ale,
    role: "Developer",
    info: "Mobile Developer",
    username: "alessandrochirici24",
    link: "https://www.instagram.com/alessandrochirici24",
  },
  {
    name: "Marco Morozzi",
    img: avatar.marco,
    role: "Developer",
    info: "Frontend Developer",
    username: "marco_morozzi_",
    link: "https://www.instagram.com/marco_morozzi_",
  },
  {
    name: "Matteo Giuntoni",
    img: avatar.matteo,
    role: "Developer",
    info: "Backend Developer",
    username: "matte_giu",
    link: "https://www.instagram.com/matte_giu",
  },
];

const Carosello = (props) => {
  return (
    <section className="section-about-us u-margin-bottom-xlarge">
      <div className="heading-secondary u-center-text">
        <h2 className="heading-secondary--title heading-secondary--animated">
          DA IDEA A PROGETTO, FINO ALLE STELLE
        </h2>
        <hr />
        <p className="heading-secondary--text u-margin-top-xsmall">
          <strong>Vuoi far vedere quanto vali, ma non sai come fare?</strong> Noi ti diamo la
          possibilità di far decollare le tue idee, e così vogliamo aiutarti a creare e avere quelle
          esperienze in più. Questo è quello che vogliamo creare: una community di persone ambiziose
          e con la voglia di mettersi in gioco come noi, per condividere idee e insieme cambiare le
          regole del gioco.
        </p>
      </div>

      <div className="section-about-us__scroll">
        <div className="section-about-us__background">&nbsp;</div>
        <div className="section-about-us__card-group">
          <CardList cards={people} svg={svg} type={"blue"} />
        </div>
      </div>

      <div className="button-group button-group--center">
        <div className="button-text button-text--center">
          <Link to="about" className="button-text__btn button-text__btn--normal">
            Vedi di piu su di noi
          </Link>
          <hr />
        </div>
      </div>
    </section>
  );
};

export default Carosello;
