import { func } from "prop-types";
import Style from "./Filtre.module.css";
import React from "react";
import {createState,useContext } from "state-pool";
import pageAccueil from "../../Page/Accueil/Accueil";



function AffichageFiltre({ styles, tabStyleFiltrer, setTabStyleFilter ,fonctionFiltre}) {

  return (
    <div className={Style.barreFiltre}>
      {styles.styles.map((style, index) => (
        <div key={index} className={Style.group}>
          <input 
            className={Style.inputStyle}
            onChange={(e) => {
              remplirTab({ style , tabStyleFiltrer, setTabStyleFilter , e}),fonctionFiltre
            }}
            name={style}
            type="checkbox"
          />
          <label className={Style.labelStyle} htmlFor="">
            {style}
          </label>
        </div>
      ))
      }
      
    </div>
  );
  
}

export default AffichageFiltre;

/**
 * Remplir le tableau de styles en function de ce que l'utilisateur choisit
 * @param {*} param0 Json des éléments à modifier
 */
function remplirTab({ style, tabStyleFiltrer, setTabStyleFilter ,e}) {
    if(e.target.checked){
      setTabStyleFilter([...tabStyleFiltrer,style]);
    }
    else{
      setTabStyleFilter(tabStyleFiltrer.filter(element => element !== style));
    }
}