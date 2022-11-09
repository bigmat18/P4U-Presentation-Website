import React, { Fragment } from "react";

import Header from "./Layout/Header/Header";
import Service from "./Layout/Service/Service";
import Carosello from "./Layout/Carosello/Carosello";
import Faq from "./Layout/Faq/Faq";

const LandingPage = (props) => {
  return (
    <Fragment>
      <Header />
      <main className="home-main">
        <Service />
        <Carosello />
        <Faq />
      </main>
    </Fragment>
  );
};

export default LandingPage;
