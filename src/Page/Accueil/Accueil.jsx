import React, { useState, useEffect } from 'react';
import AffichageFiltre from '../../component/Filtre/Filtre';
import AffichageSalles from '../../component/AfficherSalles/AffichageSalles';
import './Accueil.css'

function Accueil() {
    const [salles, setSalles] = useState([]);
    const [styles, setStyles] = useState(null);

    const url = 'https://localhost:44314/api/';

    useEffect(() => {
        fetch(`${url}salles`)
        .then(res => res.json())
        .then(salle => {
             setSalles(salle)
        })
    }, [])


    useEffect(() => {
        fetch(`${url}styles`)
        .then(res => res.json())
        .then(style => {
            setStyles(style)
        })
    }, [])
  
    return (
    <div className='page'>
        {styles !== null &&  <AffichageFiltre styles={styles}/>}
        {salles.length > 0 && <AffichageSalles salles={salles}/>}
    </div>
    )

}

export default Accueil