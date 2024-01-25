import React, { useState, useEffect } from 'react';
import AffichageFiltre from '../../component/Filtre/Filtre';
import AffichageSalles from '../../component/AfficherSalles/AffichageSalles';
import Style from'./Accueil.module.css';
import Navbar from '../../component/NavBar/Nav';

function Accueil() { 
    const [salles, setSalles] = useState([]);
    const [styles, setStyles] = useState(null);
    const [tabStyleFiltrer, setTabstyleFiltrer] = useState([])
    const [barreRecherche, setBarreRecherche] = useState()
    const [fonctionFiltre,setFonctionFiltre] = useState() //
    const url = 'https://localhost:44314/api/';

    console.log(fonctionFiltre);
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
            {styles !== null &&  <AffichageFiltre styles={styles} tabStyleFiltrer={tabStyleFiltrer} setTabStyleFilter={setTabstyleFiltrer} />}

            {salles.length > 0 && <AffichageSalles salles={salles} stylesFilter={tabStyleFiltrer} setBarreRecherche={setBarreRecherche} setFonctionFiltre={setFonctionFiltre} />}
        </div>

    </>
    )
}



export default Accueil