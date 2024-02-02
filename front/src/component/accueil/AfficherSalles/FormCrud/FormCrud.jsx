import { React, useContext, useState } from "react";
import Modal from 'react-modal';
import Style from './FormCrud.module.css';
import {ContextTabStyle} from '../../../../Context/ContextStyle'

function FormCrud() {
  const [selectedStyle, setSelectedStyle] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const {styles} = useContext(ContextTabStyle);

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }

  function recupForm() {

  }
  const handleSelectChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedStyle(...selectedStyle ,event.target.selectedOptions.value);
    console.log(selectedStyle)
  };

  return (
    <div className={Style.divAdd}>
      <button className={Style.btnAdd} onClick={openModal}>+</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <div >
          <h2>Connexion </h2>
          <form onSubmit={recupForm} action='/' method='POST'>
            <div className={Style.divForm}>
              <label htmlFor="nom">Nom</label>
              <input className={Style.inputForm} id="nom" type="text" />
            </div>
            <div className={Style.divForm}>
              <label htmlFor="numero">Numéro de voie</label>
              <input className={Style.inputForm} id="numero" type="number" />
            </div>
            <div className={Style.divForm}>
              <label htmlFor="voie">nom de voie</label>
              <input className={Style.inputForm} id="voie" type="text" />
            </div>
            <div className={Style.divForm}>
              <label htmlFor="codePostal">Code postal </label>
              <input className={Style.inputForm} id="codePostal" type="text" />
            </div>
            <div className={Style.divForm}>
              <label htmlFor="ville">Ville</label>
              <input className={Style.inputForm} id="ville" type="text" />
            </div>
            <div className={Style.divForm}>
              <label htmlFor="capacite">capacite</label>
              <input className={Style.inputForm} id="capacite" type="number" />
            </div>
            <div className={Style.divForm}>
              <label htmlFor="smac">Smac</label>
              <input className={Style.inputForm} id="smac" type="checkbox" />
            </div>
            <div className={Style.divForm}>
              <label htmlFor="style">Selectionnez les styles</label>
              <select name="style" id="style" multiple value={selectedStyle} onChange={handleSelectChange}>
    {styles[0].map((style,index) => {
      return <option key={index} value={style}>{style}</option>
    })}
              </select>
            </div>
            <input className={Style.submit} type='submit'></input>
          </form>
        </div>

        <button onClick={closeModal}>X</button>
      </Modal>
    </div>


  );
}

export default FormCrud;