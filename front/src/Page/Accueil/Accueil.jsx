import React, { useState, useEffect,useContext } from 'react';
import AffichageFiltre from '../../component/accueil/Filtre/Filtre';
import AffichageSalles from '../../component/accueil/AfficherSalles/AffichageSalles';
import Style from './Accueil.module.css';
import Navbar from '../../component/NavBar/Nav';
import { url } from "../../env";
import {ContextJwt} from "../../App"



function Accueil() {

    const contextJwt = useContext(ContextJwt) 

    const [salles, setSalles] = useState([]);
    const [tabStyleFiltrer, setTabstyleFiltrer] = useState([])
    const [tabSalleFiltrer, setTabsalleFiltrer] = useState([])
    const [tabStyle, setTabStyle] = useState([])
    const [barreRecherche, setBarreRecherche] = useState("")   

    useEffect(() => {
        fetch(`${url}Salles`)
            .then(res => res.json())
            .then(salles => {
                setSalles(salles);
                let stylesArray = [];
                salles.forEach(salle => {
                    salle.styles.forEach(style => {
                        stylesArray.push(style);
                    });
                });
                let uniqueStyles = Array.from(new Set(stylesArray));
                setTabStyle([uniqueStyles.sort()]);
                // console.log(tabStyle);

            });
    }, []);

    return (
        <>
            <Navbar setBarreRecherche={setBarreRecherche} />
            <div className={Style.page} >
                {tabStyle !== null && <AffichageFiltre tabStyles={tabStyle} tabSalleFiltrer={tabSalleFiltrer} stylesFilter={tabStyleFiltrer} setTabStyleFilter={setTabstyleFiltrer} />}
                {salles.length > 0 && <AffichageSalles barreRecherche={barreRecherche} salles={salles} setTabsalleFiltrer={setTabsalleFiltrer} stylesFilter={tabStyleFiltrer} />}
            </div>

        </>
    )
}

export default Accueil;