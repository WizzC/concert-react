import Style from "./Filtre.module.css";
import React from "react";
import {createState} from "state-pool";
import pageAccueil from "../../Page/Accueil/Accueil";


const tabStyle = createState([])

function AffichageFiltre({ styles, tabStyleFiltrer, setTabStyleFilter }) {

  return (
    <div className={Style.barreFiltre}>
      {styles.styles.map((style, index) => (
        <div key={index} className={Style.group}>
          <input 
            className={Style.inputStyle}
            onChange={() => {
                setTabStyleFilter([...tabStyleFiltrer, style]);
            }}
            name={style}
            type="checkbox"
          />
          <label className={Style.labelStyle} htmlFor="">
            {style}
          </label>
        </div>
      ))}
    </div>
  );
}

export default AffichageFiltre;
