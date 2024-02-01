import React from 'react';
import Style from './Connexion.module.css';
// import { jwtDecode } from "jwt-decode";


// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

function Connexion({setIsOpen}) {
  let user ={"Email":"","Password":""};
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
          localStorage.setItem("tokens",users.token)
          localStorage.setItem("admin",users.admin)
          console.log(users.admin)
          // const decodedToken = jwtDecode(users.token);
          // console.log(decodedToken)
          window.location.reload(false);

        });
}

   function recupForm(e){
    user["Email"]=e.target[0].value;
    user["Password"]=e.target[1].value;
    connexionRequest();
    setIsOpen(false) }

  return (
    <div >
        <h2>Connexion </h2>
        <form onSubmit={recupForm}  action='/' method='POST'>
          <div className={Style.divForm}>
            <label htmlFor="mail">Mail</label>
            <input className={Style.inputForm} id="mail" type="text" />
          </div>
          <div className={Style.divForm}>
            <label htmlFor="motDePasse">Mot de passe</label>
            <input className={Style.inputForm} id="motDePasse" type="password" />
          </div>
          <input  className={Style.submit} type='submit'></input>
        </form>
    </div>
  );
}


export default Connexion