import React from "react";
import { Rating } from 'react-simple-star-rating'
import styles from './AfficherAvis.module.css'

function AfficherAvis({salle}){
    const listeAvis = salle.avis;
    console.log(listeAvis);
    return (listeAvis.map((avis,index) => <Avis avis={avis} key={index}/> ))
    
    
} 
function Avis({avis}){

    let date = new Date(avis.date);
    return (
        <div className={styles.avisContaine}>
            <p className={styles.dateAvis}>{(date).toLocaleDateString("fr")}</p>
            <Stars note={avis.note}/>
        </div>
    )
}
const Stars = ({note}) => {  
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
  
