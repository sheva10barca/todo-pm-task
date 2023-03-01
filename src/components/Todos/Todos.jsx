import { useState } from 'react';
import { todosData } from '../data/todosData';

import InfoItem from '../InfoItem/InfoItem';
import TodoForm from '../TodoForm/TodoForm';
import TodoItem from '../TodoItem/TodoItem';

const Todos = () => {
   const [todos, setTodos] = useState(todosData);
   const [todo, setTodo] = useState({ title: '', description: '' });
   const [error, setError] = useState({
      titleError: false,
      descriptionError: false,
   });

   const inputsValidator = () => {
      if (todo.title.length <= 0 || todo.description.length <= 0) {
         setError({
            ...error,
            titleError: todo.title.length <= 0,
            descriptionError: todo.description.length <= 0,
         });
         return false;
      }
      return true;
   };

   const createTodo = (newTodo) => {
      setTodos([...todos, newTodo]);
   };

   const addNewTodo = (e) => {
      e.preventDefault();
      if (inputsValidator()) {
         const newTodo = {
            ...todo,
            id: Date.now(),
         };
         createTodo(newTodo);
         setTodo({ title: '', description: '' });
         setError({ titleError: false, descriptionError: false });
      }
   };

   return (
      <div>
         <TodoForm create={addNewTodo} todo={todo} setTodo={setTodo} error={error} />
         <InfoItem />
         {todos.map((todo) => (
            <TodoItem
               key={todo.id}
               id={todo.id}
               description={todo.description}
               title={todo.title}
               checked={todo.checked}
            />
         ))}
      </div>
   );
};

export default Todos;
