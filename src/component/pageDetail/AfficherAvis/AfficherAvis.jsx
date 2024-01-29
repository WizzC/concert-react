import React from "react";
import { Rating } from 'react-simple-star-rating'
import Styles from './AfficherAvis.module.css'

function AfficherAvis({ salle }) {
  const listeAvis = salle.avis;
  return (
  <div className={Styles.containerParent}>
    {listeAvis != null && listeAvis.map((avis, index) => <Avis avis={avis} key={index} />)}      
  </div>


  )
}
function Avis({ avis }) {

  let date = new Date(avis.date);
  return (
    <div className={Styles.avisContaine}>
      <p className={Styles.dateAvis}>{(date).toLocaleDateString("fr")}</p>
      <Stars note={avis.note} />
    </div>
  )
}
const Stars = ({ note }) => {
  let noteSurCinq = note / 2;
  return (
    <Rating
      allowFraction
      transition
      initialValue={noteSurCinq}
      readonly={true}
    />
  )
}



export default AfficherAvis

