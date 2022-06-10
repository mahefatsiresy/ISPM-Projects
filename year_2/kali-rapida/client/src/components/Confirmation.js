import React from "react";

const Confirmation = ({ listeRepas, nomCli, salle, heure }) => {
  const clickHandler = () => {
    let cd = document.getElementById("commande-box");
    cd.className = "cb-hide";
  };
  return (
    <div>
      <p>
        Mr/Mme/Mle <span className="bold">{nomCli}</span> revecera les plats ci
        dessous dans la salle <span className="bold">{salle}</span> à{" "}
        <span className="bold">{heure}</span> :
      </p>
      <ul className="kali-list">
        {listeRepas.map((r) => {
          return (
            <li key={r.ID_REPAS}>
              {r.NOM_REPAS} ({r.QTT})
            </li>
          );
        })}
      </ul>

      <button className="btn btn-pwidth" onClick={clickHandler}>
        OK
      </button>
    </div>
  );
};

export default Confirmation;
