import React, { useEffect, useState } from 'react';
import Form from '../Form/Form';
import { NewTodosState, getData, setData } from '../../utils';
import TodoList from './TodoList';
import { option } from '../../helper';
import Header from '../Header/Header';

const Todo: React.FC = () => {
   const myTodo = localStorage.getItem('todos') ? getData() : [];
   const [filter, setFilter] = useState('all');
   const [items, setItems] = useState<NewTodosState[]>(myTodo);

   useEffect(() => {
      setData('todos', items);
   }, [items]);

   const onAddTodo = (value: NewTodosState) => {
      setItems(item => [...item, value]);
   };

   const deletedItem = (id: number) => {
      if (myTodo) {
         setItems([...items].filter(item => item.id !== id));
      }
   };

   const updateItem = (id: number) => {
      if (myTodo) {
         const todosData = [...items];

         const todosItem = todosData.find(todo => todo.id === id);

         if (todosItem) {
            todosItem.completed = !todosItem.completed;
         }

         setItems(todosData);
      }
   };

   const clearCompleted = () => {
      setItems([...items].filter(item => !item.completed));
   };

   const updateLocalItem = (updated: []) => {
      setItems(updated);
   };

   const itemsLeft = () => {
      let completedItems: number;
      let totalLength = items.length;
      completedItems = items.filter(item => item.completed).length;

      if (completedItems === 0 && filter === 'completed') {
         return completedItems;
      }

      return totalLength - completedItems;
   };

   return (
      <div className="w-full max-w-[540px]">
         <Header />
         <main>
            <h1 className="sr-only">Todo Application</h1>
            <Form onAddTodo={onAddTodo} />
            <TodoList
               items={items}
               deleteItem={deletedItem}
               updateItem={updateItem}
               filter={filter}
               updateLocalItem={updateLocalItem}
            />
            <div className="text-xs text-[#777a92] dark:text-[#777a92] relative md:flex md:justify-between md:shadow-[0_9px_15px_-14px_rgba(0,0,0,0.5)] transition-all">
               <div className="text-sm bg-[#25273c] dark:bg-[#fff] flex justify-between items-center h-[52px] md:h-[69px] px-[19px] md:w-full transition-all">
                  <span>{itemsLeft()} items left</span>
                  <button
                     className="hover:text-[#fff] dark:hover:text-[#393a4c]"
                     onClick={clearCompleted}
                  >
                     Clear Completed
                  </button>
               </div>
               <ul className="bg-[#25273c] dark:bg-[#fff] flex justify-center gap-4 items-center shadow-[0_9px_15px_-14px_rgba(0,0,0,0.5)] md:shadow-none h-[52px] mt-[19px] md:mt-0 md:absolute md:top-[50%] md:left-[50%] md:translate-y-[-50%] md:translate-x-[-50%] transition-all">
                  {option.map(list => (
                     <li className="text-[12px] md:text-[14px]" key={list.id}>
                        <button
                           className="capitalize hover:text-[#fff] dark:hover:text-[#393a4c] transition"
                           aria-label={list.label}
                           onClick={() => setFilter(`${list.name}`)}
                        >
                           {list.name}
                        </button>
                     </li>
                  ))}
               </ul>
            </div>
            <div className="text-xs md:text-base mt-10 text-center text-[#4d5066]">
               Drag and drop to reorder list
            </div>
         </main>
      </div>
   );
};

export default Todo;
