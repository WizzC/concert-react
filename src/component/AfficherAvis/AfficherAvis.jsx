import React from "react";
import { Rating } from 'react-simple-star-rating'
import styles from './AfficherAvis.module.css'
function AfficherAvis({salle}){
    const listeAvis = salle.avis;
    return (listeAvis.map(avis => <Avis avis={avis}/> ))
    
    
} 
function Avis({avis}){
    // console.log(avis);
    let date = new Date(avis.date);
    return (
        <div className={styles.avisContaine}>
            <p>{(date).toLocaleDateString("fr")}</p>
            <Stars note={avis.note}/>
        </div>
    )
}
const Stars = ({note}) => {  
    let noteSurCinq = note / 2;
    return (
      <Rating
        allowFraction 
        tooltipArray={['nul','nul', 'bof','bof', 'moyen','moyen', 'top','top', 'génial','génial']}
        transition
        initialValue={noteSurCinq}
        readonly={true}
        // onClick={handleRating}
      />
    )
  }
  

  
  export default AfficherAvis
  
