import './Filtre.css'

function AffichageFiltre({styles}){
    return(
        <div className='barreFiltre'>
            {styles.styles.map((style,index)=>
            <div key={index} className='group'>
                <input className="inputStyle" name={style} type="checkbox" />
                <label className="labelStyle" htmlFor="">{style}</label>
            </div>
            )}
        </div>
    )
}

export default AffichageFiltre