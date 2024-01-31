import { React, useEffect, useState, useRef } from "react";
import Style from "./AffichageSalles.module.css";
import { useNavigate } from "react-router-dom";

function AffichageSalles({
  salles,
  setTabsalleFiltrer,
  stylesFilter,
  barreRecherche,
}) {
  const [listeSalles, setSalles] = useState(salles);
  const navigate = useNavigate();

  // console.log(stylesFilter);

  //redirection vers page details
  const handleClick = (id) => {
    navigate(`/page-detail/${id}`);
  };

  // lance la focntion filtresalle au lancement de la page accueil
  useEffect(() => {
    filtreSalles(salles, stylesFilter, barreRecherche);
  }, [barreRecherche, stylesFilter]);

  // filtrage des salles selon la barre de recherche et styles
  const filtreSalles = (salles, stylesFilter, barreRecherche) => {

    const filtreNom = barreRecherche.toLowerCase();
    const filteredResults = salles.filter(
      (item) =>
        (item.nom.toLowerCase().includes(filtreNom) ||
          item.adresse.ville.toLowerCase().includes(filtreNom) ||
          String(item.capacite).includes(filtreNom)) &&
        stylesFilter.every((style) => item.styles.includes(style))
    );

    setSalles(filteredResults);
    setTabsalleFiltrer(filteredResults);
  };

  //affichage des salles
  return (
    <section>
      <main>
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
