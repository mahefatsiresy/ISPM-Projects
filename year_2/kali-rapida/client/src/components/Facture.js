import React, { useState, useEffect } from "react";

const Tr = ({ repas }) => {
  return (
    <tr>
      <td className="f-td">{repas.NOM_REPAS}</td>
      <td>{repas.QTT}</td>
      <td className="l-td">{repas.PU}</td>
    </tr>
  );
};

const Facture = ({ listeRepas, toogleContent }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < listeRepas.length; i++) {
      if (listeRepas[i]) {
        temp += listeRepas[i].PU * listeRepas[i].QTT;
      }
    }
    setTotal(temp);
  }, [listeRepas]);

  const clickHandler = () => {
    toogleContent();
  };

  return (
    <div className="facture">
      <h4>Vos commandes:</h4>
      <hr />
      <table className="f-table">
        <thead>
          <tr>
            <th className="f-td">Nom</th>
            <th>Qtt</th>
            <th className="l-td">PU</th>
          </tr>
        </thead>
        <tbody>
          {listeRepas.map((repas) => {
            return <Tr repas={repas} key={repas.ID_REPAS} />;
          })}
        </tbody>
        <tfoot>
          <tr>
            <th>TOTAL</th>
            <td></td>
            <td className="l-td">{total}</td>
          </tr>
        </tfoot>
      </table>
      <button className="btn btn-pwidth" onClick={clickHandler}>
        OK
      </button>
    </div>
  );
};

export default Facture;
