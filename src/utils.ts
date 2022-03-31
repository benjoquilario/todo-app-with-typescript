export const initialState = [
   {
      id: '',
      todo: '',
      completed: false,
   },
];

export interface NewTodosState {
   id: number;
   todo: string;
   completed: boolean;
}

export interface TodoListRender {
   id: number;
   todo: string;
   completed: boolean;
   index: number;
   updateItem: (id: number) => void;
   deleteItem: (id: number) => void;
}

export type NewTodoProps = {
   onAddTodo: (value: NewTodosState) => void;
};

export const getData = () => JSON.parse(localStorage.getItem('todos') || '');

export const setData = (key: string, value: any[]) =>
   localStorage.setItem(key, JSON.stringify(value));
