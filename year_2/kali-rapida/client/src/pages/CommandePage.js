import React, { useState, useEffect } from "react";
import axios from "axios";
import CommandeBox from "../components/CommandeBox";
import Card2 from "../components/Card2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { images } from "../images/images.js";

const CommandePage = () => {
  const [repas, setRepas] = useState([]);
  const [selectedRepas, setSelectedRepas] = useState();
  const [listRepas, setListRepas] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/repas").then((response) => {
      setRepas(response.data);
    });
  }, []);
  useEffect(() => {
    if (selectedRepas) setListRepas([...listRepas, selectedRepas]);
  }, [selectedRepas]);

  return (
    <div className="f-width navbar-offset order-page">
      <CommandeBox listeRepas={listRepas} />
      {/* filters */}

      <div className="search-box">
        <div className="sb-container">
          <h2>De quoi avez vous envie ?</h2>
        </div>
      </div>
      {/* filters */}
      <div className="card-grid">
        {repas.map((r, index) => {
          if (r) {
            return (
              <Card2
                key={r.ID_REPAS}
                repas={r}
                imgSrc={images[index]}
                updateRepas={setSelectedRepas}
              />
            );
          } else {
            return <></>;
          }
        })}
      </div>
    </div>
  );
};

export default CommandePage;
