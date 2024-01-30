import Style from "./Filtre.module.css";
import React from "react";
import CreateMap from "../../CreateMap/CreateMap";

function AffichageFiltre({
  tabStyles,
  stylesFilter,
  tabSalleFiltrer,
  setTabStyleFilter,
}) {
  let tabCoordinates = [];

  tabSalleFiltrer.map((salle) => {
    tabCoordinates.push(salle.adresse.localisation.coordinates);
  });
  return (
    <div className={Style.barreFiltre}>
      <div className={Style.listeStyle}>
        {tabStyles.map((styles, index) =>
          styles.map((style, index) => (
            <div key={index} className={Style.group}>
              <input
                id={style}
                className={Style.inputStyle}
                onChange={(e) => {
                  remplirTab({ style, stylesFilter, setTabStyleFilter, e });
                }}
                name={style}
                type="checkbox"
              />
              <label className={Style.labelStyle} htmlFor={style}>
                {style}
              </label>
            </div>
          ))
        )}
      </div>
      <div className={Style.infoMap}>
        <CreateMap className={Style.carte} coordinates={tabCoordinates} />
      </div>
    </div>
  );
}

export default AffichageFiltre;

function remplirTab({ style, stylesFilter, setTabStyleFilter, e }) {
  if (e.target.checked) {
    setTabStyleFilter([...stylesFilter, style]);
  } else {
    setTabStyleFilter(stylesFilter.filter((element) => element !== style));
  }
}
