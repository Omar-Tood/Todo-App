"use client";
import { FC, useState } from "react";
import { todoType } from "@/types/todoType";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import { addTodo, deleteTodo, editTodo, toggleTodo } from "@/actions/todoActions";

interface Props {
  todos: todoType[];
}

const Todos: FC<Props> = ({ todos }) => {
  // State to manage the list of todo items
  const [todoItems, setTodoItems] = useState<todoType[]>(todos);

  // Function to create a new todo item
  const createTodo = (text: string) => {
    const id = (todoItems.at(-1)?.id || 0) + 1;
    addTodo(id, text);
    setTodoItems((prev) => [...prev, { id: id, text, done: false }]);
  };

  // Function to change the text of a todo item
  const changeTodoText = (id: number, text: string) => {
    setTodoItems((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
    editTodo(id, text);
  };

  // Function to toggle the "done" status of a todo item
  const toggleIsTodoDone = (id: number) => {
    setTodoItems((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
    );
    toggleTodo(id);
  };

  // Function to delete a todo item
  const deleteTodoItem = (id: number) => {
    setTodoItems((prev) => prev.filter((todo) => todo.id !== id));
    deleteTodo(id);
  };

  // Rendering the Todo List component
  return (
    <main className="flex mx-auto max-w-xl w-full min-h-screen flex-col items-center p-16">
      <div className="text-5xl font-medium">To-do app</div>
      <div className="w-full flex flex-col mt-8 gap-2">
        {/* Mapping through todoItems and rendering Todo component for each */}
        {todoItems.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            changeTodoText={changeTodoText}
            toggleIsTodoDone={toggleIsTodoDone}
            deleteTodoItem={deleteTodoItem}
          />
        ))}
      </div>
      {/* Adding Todo component for creating new todos */}
      <AddTodo createTodo={createTodo} />
    </main>
  );
};

export default Todos;