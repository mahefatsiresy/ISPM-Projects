import React, { useState } from "react";
import Facture from "./Facture";
import Livraison from "./Livraison";
import Confirmation from "./Confirmation";
import { heures } from "../data";

const CommandeBox = ({ listeRepas, cbv }) => {
  const [isFacture, setIsFacture] = useState(true);
  const [isLivraison, setIsLivraison] = useState(false);
  const [isConfimartion, setIsConfimartion] = useState(false);
  const [btnText, setBtnText] = useState("Suivant");

  //Livraison info
  const [nomCli, setNomCli] = useState("");
  const [salle, setSalle] = useState("");
  const [heure, setHeure] = useState("");

  const toogleContent = () => {
    if (isFacture) {
      setIsFacture(false);
      setIsLivraison(true);
    }
    if (isLivraison) {
      setIsLivraison(false);
      setIsConfimartion(true);
      setBtnText("OK");
    }
  };

  const CBContent = () => {
    if (isFacture)
      return <Facture listeRepas={listeRepas} toogleContent={toogleContent} />;
    if (isLivraison)
      return (
        <Livraison
          setNom={setNomCli}
          setClasse={setSalle}
          setHeure={setHeure}
          toogleContent={toogleContent}
        />
      );
    if (isConfimartion)
      return (
        <Confirmation
          listeRepas={listeRepas}
          nomCli={nomCli}
          salle={salle}
          heure={heure}
        />
      );
    return <></>;
  };
  return (
    <div id="commande-box" className="card cb-hide disp-flex-center">
      <CBContent />
    </div>
  );
};

export default CommandeBox;
