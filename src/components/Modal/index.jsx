import React, {useEffect} from 'react';
import Portal from './Portal';
import { Overlay, Dialog } from './styles';



const Modal =({children, open, onClose})=>{
// apertar esc e fechar o modal
    useEffect(()=> {
    function onEsc(e){
      if(e.keyCode === 27) onClose();
    }
    window.addEventListener("keydown", onEsc);

    return ()=> {
      window.removeEventListener('keydown', onEsc);
    }
  },[onClose])

  if(!open) return null;

  function onOverlayClick(){
    onClose();
  }

  function onDiologClick(e){
    e.stopPropagation();

  }

  return(
    <Portal>
      <Overlay onClick={onOverlayClick}>
        <Dialog onClick={onDiologClick}>{children}</Dialog>
      </Overlay> 
    </Portal>
  );
};

export default Modal;