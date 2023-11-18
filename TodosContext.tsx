import React, { createContext, useReducer, ReactNode, ReactElement, useContext } from 'react';
import { ITodosContextData, TodosState, TodosAction } from './types';

export const TodosContext = createContext({} as ITodosContextData);

interface TodosProviderProps {
  children: ReactNode;
}

const todosInitialState: TodosState = {
  todos: [
    { id: "1", text: "Finalizar a escrita do capítulo" },
    { id: "2", text: "Brincar com as crianças" },
    { id: "3", text: "Ler a Bíblia" },
  ],
};

export const TodosProvider: React.FC<TodosProviderProps> = ({
  children,
}) => {
  var [state, dispatch] = useReducer(todosReducer, todosInitialState);

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
};

function todosReducer(state: TodosState, action: TodosAction): TodosState {
  switch (action.type) {
    case "add": {
      return { ...state, todos: [...state.todos, action.payload] };
    }
    case "edit": {
      var updatedTodo = { ...action.payload };
      var updatedTodoIndex = state.todos.findIndex(
        (t) => t.id === action.payload.id,
      );
      return { 
        ...state, 
        todos: [
          ...state.todos.slice(0, updatedTodoIndex),
          updatedTodo,
          ...state.todos.slice(updatedTodoIndex + 1),
        ] 
      };
    }
    case "delete": {
      return { 
        ...state, 
        todos: state.todos.filter((todo) => todo.id !== action.payload.id) 
      };
    }
    default:
      return state;
  }
}
