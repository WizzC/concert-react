import React from 'react';
import Style from'./AffichageSalles.module.css';
import filtre from '../../assets/icons8-filter-30.png';
import { useNavigate } from 'react-router-dom';

function AffichageSalles({ salles }) {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/page-detail/${id}`);
  };

  return (
    <section>
      <div className={Style.hautPage}>
        <input type="text" placeholder="Rechercher Salle" className={Style.barreRecherche} />
        <img className={Style.filtre} src={filtre} alt="filtre" />
        <div className={Style.filtreMenuDeroulant}></div>
      </div>
      <main>
        {salles.map(salle => (
          <div className={Style.salles} key={salle.id} onClick={() => handleClick(salle.id)}>
            <p className={Style.nom}>{salle.nom}</p>
            <br />
            <p id='ville'>{salle.adresse.ville}</p>
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
