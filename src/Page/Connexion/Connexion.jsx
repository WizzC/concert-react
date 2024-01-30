import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Style from './Connexion.module.css'


// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)


function Connexion() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div >
      <button className={Style.btnConnexion} onClick={openModal}>Connexion</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className={Style.modal}
      >
        <h2>Connexion </h2>
        <form action="">
          <div className={Style.divForm}>
            <label htmlFor="mail">Mail</label>
            <input className={Style.inputForm} id="mail" type="text" />
          </div>
          <div className={Style.divForm}>
            <label htmlFor="motDePasse">Mot de passe</label>
            <input className={Style.inputForm} id="motDePasse" type="password" />
          </div>
          <input className={Style.submit} type='submit'></input>
        </form>
        <button className={Style.btnClose} onClick={closeModal}>X</button>
      </Modal>
    </div>
  );
}

export default Connexion