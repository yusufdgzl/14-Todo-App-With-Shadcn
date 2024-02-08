import TodoCard from "@/components/todo/todo-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([
    "Okula git",
    "Yemek Yap",
    "Haftalık ödevlerini tamamla",
  ]);
  const [enteredTodo, setEnteredTodo] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    setTodos((todos) => [...todos, enteredTodo]);

    setEnteredTodo("");
  }

  function deleteTodoHandler(id) {
    setTodos(todos.filter((todo, idx) => idx !== id));
  }

  function updateTodoHandler(id, changedTodo) {
    console.log(id, changedTodo);
  }

  return (
    <div className="flex flex-col bg-[#000000] w-full h-screen items-center  text-white">
      <h1 className="mt-10 text-[50px] font-semibold font-serif">TODO APP</h1>
      <form
        onSubmit={submitHandler}
        className=" w-3/5 p-10 flex space-x-4 text-2xl  justify-center"
      >
        <Input
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
          className=" w-3/6 text-black text-xl"
          placeholder="Please entered a todo..."
        />
        <Button>Add</Button>
      </form>
      <div className=" w-fullbg-slate-800 p-10 space-y-6 rounded-md">
        {todos.map((todo, index) => (
          <TodoCard
            id={index}
            key={index}
            todo={todo}
            onDeleteTodo={deleteTodoHandler}
            onUpdateTodo={updateTodoHandler}
          />
        ))}
      </div>
    </div>
  );
}
