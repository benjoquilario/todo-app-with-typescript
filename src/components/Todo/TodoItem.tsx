import React, { useEffect, useState } from 'react';
import { TodoListRender } from '../../utils';
import { Draggable } from 'react-beautiful-dnd';

const TodoItem: React.FC<TodoListRender> = ({
   id,
   todo,
   completed,
   index,
   deleteItem,
   updateItem,
}) => {
   const [isCompleted, setIsCompleted] = useState(false);

   const updateItemStatus = (id: number) => {
      return (event: React.MouseEvent) => {
         updateItem(id);
         setIsCompleted(!isCompleted);
         event.preventDefault();
      };
   };

   useEffect(() => {
      setIsCompleted(completed);
   }, [completed]);

   return (
      <Draggable key={id} draggableId={id.toString()} index={index}>
         {(provided: any) => {
            return (
               <li
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  id={id}
                  key={id}
                  index={index}
                  className={`${
                     completed ? 'line-through' : ''
                  } flex justify-between w-full h-[52px] md:h-[69px] px-[19px] text-[#cacde8] dark:text-[#484b6a] border-b border-solid border-[#393a4c] dark:border-[#d2d3db] transition-all`}
               >
                  <div
                     className="cursor-pointer flex items-center justify-center z-10 group"
                     onClick={updateItemStatus(id)}
                     aria-label="check button"
                  >
                     <div className="flex items-center justify-center rounded-full h-[23px] w-[25px] border border-solid border-[#393a4c] dark:border-[#d2d3db] group-hover:bg-gradient-to-r from-[#57ddff] to-[#c058f3] transition-all">
                        <div
                           style={{
                              backgroundImage: `${
                                 completed
                                    ? "url('/images/icon-check.svg'), linear-gradient(135deg,#57ddff,#c058f3)"
                                    : ''
                              }`,
                           }}
                           className={`inline-block rounded-full h-[20px] w-[22px] bg-center bg-no-repeat bg-[#25273c] dark:bg-[#fff] transition-all`}
                        ></div>
                     </div>
                     <span
                        onClick={updateItemStatus(id)}
                        className={`${
                           completed ? 'text-[#4d5066] dark:text-[#d2d3db]' : ''
                        } relative pl-3 text-[13px] md:text-[19px]`}
                     >
                        {todo}
                     </span>
                  </div>

                  <button onClick={() => deleteItem(id)}>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                     >
                        <path
                           fill="#494C6B"
                           fillRule="evenodd"
                           d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                        />
                     </svg>
                  </button>
               </li>
            );
         }}
      </Draggable>
   );
};

export default TodoItem;
