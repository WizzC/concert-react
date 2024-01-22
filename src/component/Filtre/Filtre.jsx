import Style from './Filtre.module.css'

function AffichageFiltre({styles}){
    return(
        <div className={Style.barreFiltre}>
            {styles.styles.map((style,index)=>
            <div key={index} className={Style.group}>
                <input className={Style.inputStyle} name={style} type="checkbox" />
                <label className={Style.labelStyle} htmlFor="">{style}</label>
            </div>
            )}
        </div>
    )
}

export default AffichageFiltre