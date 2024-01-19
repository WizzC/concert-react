import React, { useState } from "react";

function InformationSalle({salle}) {

    const adresse = salle.adresse;

    console.log(adresse);
    const styles = salle.styles;
    console.log(styles);
console.log(salle.smac);
    return (
        <div>
        <p>{adresse.numero + " " + adresse.voie}</p>
        <p>{adresse.codePostal + " " + adresse.ville}</p>
        <p>{styles.map((style) => style + " - "  )}</p>
        <p>{"capacite " + salle.capacite}</p>
        {salle.smac != false && <p>smac</p>}
        </div>

    )
}
export default InformationSalle