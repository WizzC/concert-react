import { React, useState } from "react";
import Style from "./AffichageSalles.module.css";
import filtreImg from "../../assets/icons8-filter-30.png";
import { useNavigate } from "react-router-dom";



function AffichageSalles({ salles, styles }) {


  const navigate = useNavigate();
  const [listeSalles, setSalles] = useState(salles);

  const handleClick = (id) => {
    navigate(`/page-detail/${id}`);
  };

  // Fonction de filtrage des salles avec les critères de recherche et de style
  function filtre(salles, tabStyle, e) {
    let motAchercher = e.target.value;

    if (motAchercher == null) {
      return null;
    }
    const filtreNom = motAchercher.toLowerCase();
    const filteredResults = salles.filter(
      (item) =>
        (item.nom.toLowerCase().includes(filtreNom) ||
          item.adresse.ville.toLowerCase().includes(filtreNom) ||
          String(item.capacite).includes(filtreNom)) &&
        tabStyle.map((style) => item.styles.includes(style))
    );
    // Suppression des éléments existants dans la liste
    setSalles(filteredResults);
  }
  return (
    <section>
      <div className={Style.hautPage}>
        <input
          type="text"
          placeholder="Rechercher Salle"
          onChange={(e) => filtre(salles, styles.styles, e)}
          className={Style.barreRecherche}
        />
        <img className={Style.filtre} src={filtreImg} alt="filtre" />
        <div className={Style.filtreMenuDeroulant}></div>
      </div>
      <main>
        {/* {console.log("--------------")}
        {console.log(listeSalles)} */}
        {listeSalles.map((salle) => (
          <div
            className={Style.salles}
            key={salle.id}
            onClick={() => handleClick(salle.id)}
          >
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
