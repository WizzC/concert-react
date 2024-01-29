import React, { useState, useEffect } from 'react';
import AffichageFiltre from '../../component/accueil/Filtre/Filtre';
import AffichageSalles from '../../component/accueil/AfficherSalles/AffichageSalles';
import Style from './Accueil.module.css';
import Navbar from '../../component/NavBar/Nav';

function Accueil() {
    const [salles, setSalles] = useState([]);
    const [styles, setStyles] = useState(null);
    const [tabStyleFiltrer, setTabstyleFiltrer] = useState([])
    const [tabSalleFiltrer, setTabsalleFiltrer] = useState([])

    const url = 'https://localhost:44314/api/';

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
                console.log(tabStyle);
            });
    }, []);

    return (
    <>

        <Navbar />
        <div className= {Style.page} >
            {styles !== null &&  <AffichageFiltre styles={styles} tabSalleFiltrer={tabSalleFiltrer} stylesFilter={tabStyleFiltrer} setTabStyleFilter={setTabstyleFiltrer} />}
            {salles.length > 0 && <AffichageSalles salles={salles} setTabsalleFiltrer={setTabsalleFiltrer} stylesFilter={tabStyleFiltrer} />}
        </div>

    </>
    )
}

export default Accueil;
