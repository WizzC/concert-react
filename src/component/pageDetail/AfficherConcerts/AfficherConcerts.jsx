import React from 'react';
import Style from './AfficherConcerts.module.css'
function AfficherConcerts({salle}){
    const listeConcerts = salle.concerts
    return(
        <div className={Style.ContainerListeConcerts}>
        {listeConcerts!=null && listeConcerts.map((concert,index) => <Concert concert={concert} key={index}/>)}
       </div> 
       )
}
function Concert({concert}){
    let date = new Date(concert.date);
    return(
        <div className={Style.concertContainer}>
            <p>{concert.nom}</p>
            <p>{(date).toLocaleDateString("fr")}</p>
            <p>{concert.placesRestantes} places</p>
        </div>
    )
}
export default AfficherConcerts