import React , {useEffect} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Style from './Connexion.module.css'


// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)


function Connexion() {
  let user ={"Email":"","Password":""};
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  function connexionRequest(){
    let tokens;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    };

    fetch("https://localhost:44314/api/User/authenticate", options)
        .then(res => res.json())
        .then(users => {
            tokens = users.token;
            console.log(tokens);
            // test(tokens);  // Appel à test après avoir obtenu le token
        });

  //   function test(tokens) {
  //       fetch("https://localhost:44314/api/User", {
  //           headers: { Authorization: `Bearer ${tokens}` }
  //       }).then(res => res.json())
  //       .then(users => { console.log(users) })
  //       .catch(error => {
  //           console.error('Fetch error:', error);
  //       });
  //  }
}

   function recupForm(e){
    e.preventDefault();
    user["Email"]=e.target[0].value;
    user["Password"]=e.target[1].value;
    connexionRequest()
   }


  return (
    <div >
      <button className={Style.btnConnexion} onClick={openModal}>Connexion</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className={Style.modal}
      >
        <h2>Connexion </h2>
        <form onSubmit={recupForm} method='POST'>
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