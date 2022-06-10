import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

const LandingPage = () => {
  let desc2 = `Ce site est notre mini-projet sur JavaScript.
Nous avons utiliser la bibliothèque React, React-fontAwesome et aussi
express.js et sqlite3 pour le backend.`;
  return (
    <div className="f-width">
      <Hero />
      <h2 className="h2">A propos de nous</h2>
      <div className="f-width center-contents">
        <div className="cards-container">
          <Card
            description=" Nous sommes des élèves de l'ISPM dans la filiere IGGLIA, niveua L2,
          classe A et B"
          />
          <Card description={desc2} />
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
