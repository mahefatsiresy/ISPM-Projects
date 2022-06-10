import React, { useState } from "react";
import { classes, heures } from "../data";

const Livraison = ({ setNom, setClasse, setHeure, toogleContent }) => {
  const [nom, setNom2] = useState("");
  const [sl, setSl] = useState("");
  const [h, setH] = useState("");

  function clickHandler() {
    setNom(nom);
    setClasse(sl);
    setHeure(h);
    toogleContent();
  }

  return (
    <div>
      <table className="livraison-table">
        <tbody>
          <tr>
            <td>Nom:</td>
            <td>
              <input
                type="text"
                className="lt-input"
                onChange={(e) => {
                  setNom2(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Salle:</td>
            <td>
              <select
                onChange={(e) => {
                  setSl(e.target.value);
                }}
              >
                {classes.map((classe) => {
                  return <option value={classe}>{classe}</option>;
                })}
              </select>
            </td>
          </tr>
          <tr>
            <td>Heure:</td>
            <td>
              {heures.map((h) => {
                return (
                  <>
                    <input
                      type="radio"
                      id={h}
                      name="heure"
                      value={h}
                      onChange={(e) => {
                        setH(e.target.value);
                      }}
                    />
                    <label htmlFor={h} className="lt-i-label">
                      {h}
                    </label>
                  </>
                );
              })}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2">
              <button className="btn btn-pwidth" onClick={clickHandler}>
                Suivant
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Livraison;
