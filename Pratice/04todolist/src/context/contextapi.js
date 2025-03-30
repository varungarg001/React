import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      title: "Task 1",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  updateTodo: (todo, id) => {},
});

export const ContextProvider = TodoContext.Provider;

export function useTodo() {
  return useContext(TodoContext);
}
