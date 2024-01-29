import React from "react";
import { Rating } from 'react-simple-star-rating'
import Styles from './AfficherAvis.module.css'
import Avis from '../Avis/Avis.jsx'
function AfficherAvis({ salle }) {
  const listeAvis = salle.avis;
  return (
  <div className={Styles.containerParent}>
    {listeAvis != null && listeAvis.map((avis, index) => <Avis avis={avis} key={index} />)}      
  </div>


  )
}


export default AfficherAvis

