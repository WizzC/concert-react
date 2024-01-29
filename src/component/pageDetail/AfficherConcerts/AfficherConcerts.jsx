import React from 'react';
import Style from './AfficherConcerts.module.css'
import Concert from './Concert/Concert';
function AfficherConcerts({salle}){
    const listeConcerts = salle.concerts
    return(
        <div className={Style.ContainerListeConcerts}>
        {listeConcerts!=null && listeConcerts.map((concert,index) => <Concert concert={concert} key={index}/>)}
       </div> 
       )
}

export default AfficherConcerts