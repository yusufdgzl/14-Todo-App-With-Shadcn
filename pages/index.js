import { AlertDialog, AlertDialogItem } from "@/components/alert/alert-dialog";
import TodoCard from "@/components/todo/todo-card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([
    "Okula git",
    "Yemek Yap",
    "Haftalık ödevlerini tamamla",
  ]);

  const [selectedTodo,setSelectedTodo] = useState('')
// YUSUF DG
  const [alertDestructive, setAlertDestructive] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);

  
  const todoRef = useRef();

  function handlerAddTodo(e) {
    const enteredTodo = todoRef.current.value;
    e.preventDefault();

    if (enteredTodo.length < 5) {
      return;
    }

    setTodos((prev) => [...prev, enteredTodo]);

    setAlertSuccess(true);
    setTimeout(() => {
      setAlertSuccess(false);
    }, 2000);
  }

  function handlerDeleteTodo(id) {
    setTodos((item) => item.filter((item, index) => index !== id));
    setAlertDestructive(true);
    setTimeout(() => {
      setAlertDestructive(false);
    }, 2000);
  }

  function handlerEditTodo(item) {
  //  setSelectedTodo(item);
  const enteredTodo = todoRef.current.value;

  }

  return (
    <div className="flex flex-col bg-[#000000] w-full h-screen items-center  text-white">
      <div className=" absolute right-10 top-20 animate-bounce">
        {alertDestructive && (
          <Alert variant="destructive">
            <AlertTitle>Deleted</AlertTitle>
            <AlertDescription>Todo is deleted succesfully</AlertDescription>
          </Alert>
        )}
        {alertSuccess && (
          <Alert>
            <AlertTitle className="text-green-600">Added</AlertTitle>
            <AlertDescription className="text-green-600">
              Todo is added succesfully...
            </AlertDescription>
          </Alert>
        )}
      </div>
      <h1 className="mt-10 text-[50px] font-semibold font-serif">TODO APP</h1>
      <form className=" w-3/5 p-10 flex space-x-4 text-2xl  justify-center">
        <Input
         ref={todoRef}
          className=" w-3/6 text-black text-xl"
          placeholder="Please entered a todo..."
        />
        <Button onClick={handlerAddTodo}>addd</Button>
      </form>
      <div className=" w-3/6  shadow-[0_0_10px_0_white] bg-slate-800  p-10 space-y-6 rounded-md max-h-[55%] overflow-y-scroll  ">
        {todos.map((item, index) => (
          <TodoCard
            selectedTodo= {selectedTodo}
            setSelectedTodo= {setSelectedTodo}
            onEdit={handlerEditTodo}
            onDelete={handlerDeleteTodo}
            key={index}
            id={index}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}
