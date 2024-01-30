import Style from "./Filtre.module.css";
import React from "react";
<<<<<<< HEAD

=======
import CreateMap from "../../CreateMap/CreateMap";
>>>>>>> 2a8f3e2f1a773f2e43cb2a7b40e5d43284f67216

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
