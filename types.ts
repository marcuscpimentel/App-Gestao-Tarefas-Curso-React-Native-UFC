import React from 'react';

export interface Todo {
  id: string;
  text: string;
}

export interface TodosState {
  todos: Todo[];
}

export interface TodosAction {
  type: string;
  payload?: Todo;
}


export interface ITodosContextData {
  state?: TodosState;
  dispatch?: React.Dispatch<TodosAction>;
}
