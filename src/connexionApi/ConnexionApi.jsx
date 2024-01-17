import React, { useState, useEffect } from 'react';
function Connexion(idSalles) {
    const [salles, setSalles] = useState();
    const urlGetAll = 'https://localhost:44314/api/Salles/4';
    useEffect(() => {
        fetch(urlGetAll)
        .then(res => res.json())
        .then(salle => {
             setSalles(salle)
            ;
        })
    }, [])


    return ( <p>{salles.nom}</p>)

}

export default Connexion