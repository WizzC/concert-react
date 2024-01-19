import { useState, useEffect } from 'react';

import CreateMap from '../component/CreateMap/CreateMap';

import InformationSalle from '../component/InformationSalle/InformationSalle';
import AfficherAvis from '../component/AfficherAvis/AfficherAvis';
import DemanderAvis from '../component/DemanderAvis/DemanderAvis';
function PageDetail({id}) {

    const urlGetById = 'https://localhost:44314/api/Salles/'+id;

    const [salles, setSalles] = useState({});
    const [coordinates, setCoordinates] = useState([]);

    useEffect(() => {
        fetch(urlGetById)
            .then(res => res.json())
            .then(salle => {
                setSalles(salle)
                setCoordinates(salle.adresse.localisation.coordinates)
            })
    }, [])
    return (

        <>
            {coordinates.length > 0 && <CreateMap coordinates={coordinates} />}
            {Object.keys(salles).length > 0 && <InformationSalle salle={salles} />}
            {Object.keys(salles).length > 0 && <DemanderAvis salle={salles} />}
            {Object.keys(salles).length > 0 && <AfficherAvis salle={salles} />}
        </>
    )

}

export default PageDetail