import Style from "./Filtre.module.css";
import React, { useState } from "react";
import { createStore  } from "state-pool";

const tabStyle = createStore();
tabStyle.setState("tabStyleChoisie",[])
function AffichageFiltre({ styles }) {
  const [tabStyleChoisie, setTabStyleChoisie] = tabStyle.useState("tabStyleChoisie");

  // console.log(tabStyleChoisie);

  return (
    <div className={Style.barreFiltre}>
      {styles.styles.map((style, index) => (
        <div key={index} className={Style.group}>
          <input
            className={Style.inputStyle}
            onChange={e => setTabStyleChoisie(++style)}
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
