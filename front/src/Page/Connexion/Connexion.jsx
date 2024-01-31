import React  from 'react';
import Modal from 'react-modal';
import Style from './Connexion.module.css';



// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)


function Connexion() {
  let user ={"Email":"","Password":""};

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  function connexionRequest(){
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
            localStorage.setItem("tokens", users.token)
            console.log(localStorage.getItem("tokens"));
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

    user["Email"]=e.target[0].value;
    user["Password"]=e.target[1].value;
    connexionRequest();
    handleClick({route : ""});
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
        <form onSubmit={()=>{recupForm}} method='POST'>
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