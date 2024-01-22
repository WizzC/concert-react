

import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import Style from './DemangerAvis.module.css'
const Stars = ({salle}) => {
  const [rating, setRating] = useState(100) // initial rating value
    let newSalle = salle;
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    if(newSalle.avis != null){
    newSalle.avis.push ({          
    "date": new Date(),
    "note": rate*2
  } )}
  else{
    newSalle.avis = [{          
      "date": new Date(),
      "note": rate*2
    
    }]
  }
  console.log(newSalle)
  }
const envoyerDonner = ()=>{

    
        const options = {
            method: 'PUT', 
            headers: {
              'Content-Type': 'application/json' 
            },
            body: JSON.stringify(newSalle ) 
          };
            fetch('https://localhost:44314/api/Salles/'+newSalle.id, options)
          .catch(error => console.error('Erreur :', error));
          window.location.reload(true);
    }
  return (
  
    <div className={Style.notation}>
    <>
    
      <Rating
        onClick={handleRating}
        allowFraction
        transition
        ratingValue={rating} /* Available Props */
      />
      </>
      <button onClick={envoyerDonner} >Valider</button>
      </div>
    )
}

const DemanderAvis = ({salle}) => {
  return (
    <div className={Style.DemanderAvis}>
      <Stars salle={salle}/>
    </div>
  )
}

export default DemanderAvis
