import React, { useState, useEffect } from 'react';
import AffichageFiltre from '../../component/Filtre/Filtre';
import AffichageSalles from '../../component/AfficherSalles/AffichageSalles';
import Style from'./Accueil.module.css';
import Navbar from '../../component/NavBar/Nav';
import PropTypes from 'prop-types'



function Accueil() {
    const [salles, setSalles] = useState([]);
    const [styles, setStyles] = useState(null);
    const [tabStyleFiltrer, setTabstyleFiltrer] = useState([])

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
            {styles !== null &&  <AffichageFiltre styles={styles} tabStyleFiltrer={tabStyleFiltrer} setTabStyleFilter={setTabstyleFiltrer}/>}
            {salles.length > 0 && <AffichageSalles salles={salles} styles={styles} stylesFilter={tabStyleFiltrer}/>}
        </div>

    </>
    )
}



export default Accueil