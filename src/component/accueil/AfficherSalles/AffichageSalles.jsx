import { React, useEffect, useState, useRef } from "react";

import Style from "./AffichageSalles.module.css";
import filtreImg from "../../../assets/icons8-filter-30.png";
import { useNavigate } from "react-router-dom";

function AffichageSalles({ salles, stylesFilter }) {
  const searchInputRef = useRef();
  const [listeSalles, setSalles] = useState(salles);
  const navigate = useNavigate();

  console.log(stylesFilter);
  const handleClick = (id) => {
    navigate(`/page-detail/${id}`);
  };

  useEffect(() => {
    console.log("Use effect styule filter");
    filtreSalles(salles, stylesFilter);
    
  }, [stylesFilter]);


  function filtreSalles(salles, stylesFilter) {
    let motAchercher = searchInputRef.current.value;
    console.log(motAchercher);

    if (motAchercher == null) {
      return null;
    }
    const filtreNom = motAchercher.toLowerCase();
    const filteredResults = salles.filter(
      (item) =>
        ((item.nom.toLowerCase().includes(filtreNom) ||
          item.adresse.ville.toLowerCase().includes(filtreNom) ||
          String(item.capacite).includes(filtreNom)) && 
          stylesFilter.every(style => item.styles.includes(style))
    )
    );

    setSalles(filteredResults);
  }

  return (
    <section>
      <div className={Style.hautPage}>
        <input
          type="text"
          placeholder="Rechercher Salle"
          onChange={(e) => filtreSalles(salles,stylesFilter, e)}
          className={Style.barreRecherche}
          ref={searchInputRef}
        />
        <img className={Style.filtre} src={filtreImg} alt="filtre" />
        <div className={Style.filtreMenuDeroulant}></div>
      </div>
      <main>
        {listeSalles.map((salle) => (
          <div
            className={Style.salles}
            key={salle.id}
            onClick={() => handleClick(salle.id)}>
            <p className={Style.nom}>{salle.nom}</p>
            <br />
            <p id="ville">{salle.adresse.ville}</p>
            <div className={Style.divCapacite}>
              <div className={Style.carreNoir}></div>
              <p className={Style.capacite}>{salle.capacite}</p>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
}

export default AffichageSalles;
