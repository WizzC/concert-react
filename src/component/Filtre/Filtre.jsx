import Style from "./Filtre.module.css";
import React from "react";
import {createState } from "state-pool";

const tabStyle= createState([])

function AffichageFiltre({ styles }) {
  const [tabStyleChoisie, setTabStyleChoisie]=tabStyle.useState();

//   console.log(tabStyleChoisie);

  return (
    <div className={Style.barreFiltre}>
      {styles.styles.map((style, index) => (
        <div key={index} className={Style.group}>
          <input
            className={Style.inputStyle}
            onChange={() => {
                setTabStyleChoisie(tabStyleChoisie+style);
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
