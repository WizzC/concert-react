import React, { useState } from "react";
import Style from './InformationSalle.module.css';
function InformationSalle({salle}) {

    const adresse = salle.adresse;

    
    const styles = salle.styles;

    return (
        <div className={Style.info}>
        <p>{adresse.numero + " " + adresse.voie}</p>
        <p>{adresse.codePostal + " " + adresse.ville}</p>
        <p>{styles.map((style) => style + " - "  )}</p>
        <p>{"capacite " + salle.capacite}</p>
        {salle.smac != false && <p>smac</p>}
        </div>

    )
}
export default InformationSalle