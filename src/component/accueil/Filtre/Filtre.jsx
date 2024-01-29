import Style from "./Filtre.module.css";
import React from "react";
// import CreateMap from '../../component/CreateMap/CreateMap';




function AffichageFiltre({ styles, stylesFilter, setTabStyleFilter }) {

  return (
    <div className={Style.barreFiltre}>
      {styles.styles.map((style, index) => (
        <div key={index} className={Style.group}>
          <input id={style}
            className={Style.inputStyle}
            onChange={(e) => {
              remplirTab({ style , stylesFilter, setTabStyleFilter , e})
            }}
            name={style}
            type="checkbox"
          />
          <label className={Style.labelStyle} htmlFor={style}>
            {style}
          </label>
        </div>
      ))
      }
      {/* { coordinates.length > 0 && <CreateMap coordinates={coordinates} />} */}
      
    </div>
  );
  
}

export default AffichageFiltre;


function remplirTab({ style , stylesFilter, setTabStyleFilter ,e}){
    if(e.target.checked){
      setTabStyleFilter([...stylesFilter,style]);
    }
    else{
      setTabStyleFilter(stylesFilter.filter(element => element !== style));
    }
}