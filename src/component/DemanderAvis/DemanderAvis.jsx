

import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const Stars = ({salle}) => {
  const [rating, setRating] = useState(100) // initial rating value
    let newSalle = salle;
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    console.log(rate)
 newSalle.avis.push ({          
    "date": new Date(),
    "note": rate*2
  } )
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
    }
  return (
  
    <div>
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
    <div className="DemanderAvis">
      <Stars salle={salle}/>
    </div>
  )
}

export default DemanderAvis
