import { useEffect } from 'react';
import './Modal.css';

const Modal = ({ title, description, checked, visible, onClose }) => {
   const onKeydown = ({ key }) => {
      if (key === 'Escape') {
         onClose();
      }
   };

   useEffect(() => {
      document.addEventListener('keydown', onKeydown);
      return () => document.removeEventListener('keydown', onKeydown);
      // eslint-disable-next-line
   }, []);

   if (!visible) return null;

   return (
      <div className={visible ? 'modal active' : 'modal'} onClick={onClose}>
         <div className='modal__content' onClick={(e) => e.stopPropagation()}>
            <div className='modal__title'>{title}</div>
            <div className='modal__subtitle'>Description:</div>
            <div className='modal__description'>{description}</div>
            <div className='modal__status'>
               Status: <input type='checkbox' checked={checked} onChange={() => null} />
            </div>
            <div className='modal__btn'>
               <button type='submit' onClick={onClose}>
                  close
               </button>
            </div>
         </div>
      </div>
   );
};

export default Modal;
