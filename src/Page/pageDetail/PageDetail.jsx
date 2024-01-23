import { useState, useEffect } from 'react';
import CreateMap from '../../component/CreateMap/CreateMap';
import InformationSalle from '../../component/InformationSalle/InformationSalle';
import AfficherAvis from '../../component/AfficherAvis/AfficherAvis';
import DemanderAvis from '../../component/DemanderAvis/DemanderAvis';
import AfficherConcerts from '../../component/AfficherConcerts/AfficherConcerts';
import { useParams } from 'react-router-dom';
import Style from './PageDetail.module.css'
function PageDetail() {

    const { id } = useParams();

    const urlGetById = 'https://localhost:44314/api/Salles/'+id;

    const [salle, setSalle] = useState({});
    const [coordinates, setCoordinates] = useState([]);

    useEffect(() => {
        fetch(urlGetById)
            .then(res => res.json())
            .then(salle => {
                setSalle(salle)
                setCoordinates(salle.adresse.localisation.coordinates)
            })
    }, [])
    return (

        <div className={Style.pageDetail}>
            {Object.keys(salle).length > 0 && <AfficherConcerts salle={salle} />}
            {coordinates.length > 0 && <CreateMap coordinates={coordinates} />}
            {Object.keys(salle).length > 0 && <InformationSalle salle={salle} />}
            {Object.keys(salle).length > 0 && <DemanderAvis salle={salle} setSalle={setSalle} />}
            {Object.keys(salle).length > 0 && <AfficherAvis salle={salle} />}
        </div>
    )

}

export default PageDetail