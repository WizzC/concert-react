import React, { useState, useEffect } from 'react';
import AffichageFiltre from '../../component/Filtre/Filtre';
import AffichageSalles from '../../component/AfficherSalles/AffichageSalles';
import Style from'./Accueil.module.css';
import Navbar from '../../component/NavBar/Nav';


function Accueil() {
    const [salles, setSalles] = useState([]);
    const [styles, setStyles] = useState(null);

    const url = 'https://localhost:44314/api/';

    useEffect(() => {
        fetch(`${url}Salles`)
        .then(res => res.json())
        .then(salle => {
             setSalles(salle)
        })
    }, [])


    useEffect(() => {
        fetch(`${url}Styles`)
        .then(res => res.json())
        .then(style => {
            setStyles(style)
        })
    }, [])
  
    return (
    <>
        <Navbar page={"accueil"} />
        <div className= {Style.page} >
            {styles !== null &&  <AffichageFiltre styles={styles}/>}
            {salles.length > 0 && <AffichageSalles salles={salles} styles={styles} />}
        </div>
    </>
    )

}

export default Accueil