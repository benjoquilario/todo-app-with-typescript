import React from 'react';
import TodoItem from './TodoItem';
import { NewTodosState } from '../../utils';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

interface TodoListRenderItem {
   items: NewTodosState[];
   updateItem: (id: number) => void;
   deleteItem: (id: number) => void;
   updateLocalItem: (data: any) => void;
   filter: string;
}

const TodoList: React.FC<TodoListRenderItem> = ({
   items,
   deleteItem,
   updateItem,
   updateLocalItem,
   filter,
}) => {
   const rendered = (
      id: number,
      todo: string,
      completed: boolean,
      index: number
   ) => {
      return (
         <TodoItem
            key={id}
            id={id}
            index={index}
            todo={todo}
            completed={completed}
            deleteItem={deleteItem}
            updateItem={updateItem}
         />
      );
   };
   const renderedList = items.map(({ id, todo, completed }, index) => {
      return rendered(id, todo, completed, index);
   });

   const renderedListActive = items.map(({ id, todo, completed }, index) => {
      if (completed) return '';

      return rendered(id, todo, completed, index);
   });

   const renderedListCompleted = items.map(({ id, todo, completed }, index) => {
      if (!completed) return '';
      return rendered(id, todo, completed, index);
   });

   const renderedFilteredList = () => {
      if (filter === 'active') return renderedListActive;
      else if (filter === 'completed') return renderedListCompleted;
      else return renderedList;
   };

   const onHandleOnDragEnd = (result: any) => {
      if (!result.destination) return;
      const updatedList = Array.from(items);
      const [reorderedItem] = updatedList.splice(result.source.index, 1);
      updatedList.splice(result.destination.index, 0, reorderedItem);
      updateLocalItem(updatedList as any);
   };

   return (
      <div className="h-auto bg-[#25273c] dark:bg-[#fff] shadow-[0_9px_15px_-14px_rgba(0,0,0,0.5)] transition-all">
         <DragDropContext onDragEnd={onHandleOnDragEnd}>
            <Droppable droppableId="droppable">
               {(provided: any) => {
                  return (
                     <ul
                        className="droppable"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                     >
                        {renderedFilteredList()}
                        {provided.placeholder}
                     </ul>
                  );
               }}
            </Droppable>
         </DragDropContext>
      </div>
   );
};

export default TodoList;
