import { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import './TodoItem.css';

const TodoItem = ({ id, title, description, checked, visible }) => {
   const [checkedStatus, setCheckedStatus] = useState(checked);
   const [isModal, setIsModal] = useState(false);

   const onClose = () => setIsModal(false);

   useEffect(() => {
      isModal && (document.body.style.overflow = 'hidden');

      return () => (document.body.style.overflow = 'unset');
   }, [isModal]);

   const trimText = (text) => {
      return text.length > 15 ? text.slice(0, 15) + '...' : text;
   };

   return (
      <>
         <div className='todo' onClick={() => setIsModal(true)}>
            <div className='todo__id'>{trimText(id)}</div>
            <div className='todo__title'>{trimText(title)}</div>
            <div className='todo__description'>{trimText(description)}</div>
            <div className='todo__status'>
               <input
                  type='checkbox'
                  checked={checkedStatus}
                  onChange={() => setCheckedStatus(!checkedStatus)}
               />
            </div>
         </div>
         {isModal && (
            <Modal
               visible={isModal}
               title={title}
               checked={checked}
               description={description}
               onClose={onClose}
            />
         )}
      </>
   );
};

export default TodoItem;
