import './AffichageSalles.css'
import filtre from'../../assets/icons8-filter-30.png'

function AffichageSalles({salles}) {

    return ( 
    <section>
        <div className='hautPage' >
            <input type="text" placeholder="Rechercher Salle" className="barreRecherche"/>
            <img className='filtre' src={filtre} alt="filtre" />
            <div className='filtreMenuDeroulant'>

            </div>
        </div>
        <main>
        {salles.map(salle => 
            <div className='salles' key={salle.id}>
                <p id='nom'>{salle.nom}</p>
                <br/>
                <p id='ville'>{salle.adresse.ville}</p>
                <div className='divCapacite'>
                    <div className='carreNoir'></div>
                    <p className='capacite'>{salle.capacite}</p>
                </div>
            </div>
        )}
        </main>
    </section>
    )
 
}

export default AffichageSalles