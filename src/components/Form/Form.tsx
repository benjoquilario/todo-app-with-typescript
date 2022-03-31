import React, { useRef } from 'react';
import { NewTodosState, NewTodoProps } from '../../utils';

const Form: React.FC<NewTodoProps> = ({ onAddTodo }) => {
   const inputTodoText = useRef<HTMLInputElement>(null);

   const onHandleSubmit = (event: React.FormEvent) => {
      event.preventDefault();

      const enteredText = inputTodoText.current!.value;

      const newTodos: NewTodosState = {
         id: Math.floor(Math.random() * Date.now()),
         todo: enteredText,
         completed: false,
      };

      if (!enteredText) return;

      onAddTodo(newTodos);

      inputTodoText.current!.value = '';
   };

   return (
      <form
         className="mb-4 md:mb-[24px] bg-[#25273c] dark:bg-[#fff] overflow-hidden transition-all"
         onSubmit={onHandleSubmit}
      >
         <div className="relative w-full h-[47px] md:h-[64px] rounded">
            <button
               type="submit"
               aria-label="submit todo items"
               className="absolute top-[12px] md:top-[18px] left-[22px] border border-solid border-[#393a4c] dark:border-[#d2d3db] h-[22px] w-[22px] rounded-full"
            ></button>
            <label className="sr-only" htmlFor="todos">
               Create a new todo
            </label>
            <input
               className="pl-[52px] w-full h-full bg-[#25273c] dark:bg-[#fff] text-[#cacde8] dark:text-[#484b6a] text-xs md:text-base transition-all"
               placeholder="Create a new todo..."
               aria-label="Create a new todo"
               id="todos"
               type="text"
               ref={inputTodoText}
            />
         </div>
      </form>
   );
};

export default Form;
