import { React,useState} from "react";
import Modal from 'react-modal';
import Style from './FormCrud.module.css';


function FormCrud(){
    
    const [modalIsOpen, setIsOpen] = useState(false);

        function openModal() {
          setIsOpen(true);
        }
      
      
        function closeModal() {
          setIsOpen(false);
        }
        
        function changerSign(){
          if(bool){
              setBool(false);
              setVarSign("Connexion");
          }
          else{
              setBool(true);
              setVarSign("Inscription");
          }
        }
        return (
          <div className={Style.divAdd}>
            <button className={Style.btnAdd} onClick={openModal}>+</button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              ariaHideApp={false}
            >  
              <button  onClick={closeModal}>X</button>
            </Modal>
          </div>
        );
      
}

export default FormCrud;