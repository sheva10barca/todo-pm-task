import { useState } from 'react';
import './TodoForm.css';

const TodoForm = ({ create, todo, setTodo, error }) => {
   return (
      <form className='form'>
         <div className='form-item'>
            <div className='form__title'>Title:</div>
            <div>
               <input
                  className={error.titleError ? 'error__input' : ''}
                  value={todo.title}
                  type='text'
                  placeholder='Enter title'
                  onChange={(e) => setTodo({ ...todo, title: e.target.value })}
               />
            </div>

            {error.titleError && <p className='error'>This field is empty</p>}
         </div>
         <div className='form-item'>
            <div className='form__title'>Description:</div>

            <input
               className={error.descriptionError ? 'error__input' : ''}
               value={todo.description}
               type='text'
               placeholder='Enter description'
               onChange={(e) => setTodo({ ...todo, description: e.target.value })}
            />

            {error.descriptionError && <p className='error'>This field is empty</p>}
         </div>
         <div className='form__btn'>
            <button onClick={create}>Create</button>
         </div>
      </form>
   );
};

export default TodoForm;
